import { describe, expect, it } from "vitest";
import { emailSubject } from "@/lib/contact";

describe("emailSubject", () => {
  it("labels each topic as Role, Project or General", () => {
    expect(emailSubject("Asha", "A role or opportunity")).toBe("New message from Asha · Role");
    expect(emailSubject("Asha", "A project or consulting")).toBe("New message from Asha · Project");
    expect(emailSubject("Asha", "Something else")).toBe("New message from Asha · General");
  });

  it("falls back to General for an unknown topic", () => {
    expect(emailSubject("Asha", "Free pizza")).toBe("New message from Asha · General");
  });

  it("keeps a 60-character name intact", () => {
    const name = "a".repeat(60);
    expect(emailSubject(name, "Something else")).toBe(`New message from ${name} · General`);
  });

  it("truncates names over 60 characters to 57 plus an ellipsis", () => {
    const name = "b".repeat(61);
    expect(emailSubject(name, "Something else")).toBe(`New message from ${"b".repeat(57)}... · General`);
  });
});
