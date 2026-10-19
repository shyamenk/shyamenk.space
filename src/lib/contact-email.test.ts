import { describe, expect, it } from "vitest";
import { contactEmail } from "@/lib/contact-email";

const hostile = {
  name: `<script>alert("x")</script>`,
  email: "a&b@example.com",
  topic: "Something else",
  message: `Tom & Jerry's <b>"bold"</b> idea\nsecond line`,
};

describe("contactEmail escaping", () => {
  it("escapes HTML in the name, email and message", () => {
    const { html } = contactEmail(hostile);
    expect(html).not.toContain("<script>");
    expect(html).not.toContain("<b>");
    expect(html).toContain("&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;");
    expect(html).toContain("a&amp;b@example.com");
    expect(html).toContain("Tom &amp; Jerry&#39;s &lt;b&gt;&quot;bold&quot;&lt;/b&gt; idea");
  });

  it("turns message newlines into <br> in the HTML part", () => {
    const { html } = contactEmail(hostile);
    expect(html).toContain("idea<br>second line");
  });

  it("URL-encodes the sender address in the reply link", () => {
    const { html } = contactEmail(hostile);
    expect(html).toContain(`href="mailto:a%26b%40example.com?subject=Re%3A%20Something%20else"`);
  });

  it("keeps the plain-text part unescaped", () => {
    const { text } = contactEmail(hostile);
    expect(text).toContain(`New message from ${hostile.name}`);
    expect(text).toContain(hostile.message);
  });
});
