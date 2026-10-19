import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { sendMessage } from "@/app/contact/actions";
import type { ContactState } from "@/lib/contact";

const idle: ContactState = { status: "idle", message: "" };

function form(fields: Record<string, string> = {}) {
  const data = new FormData();
  const values = {
    name: "Asha Rao",
    email: "asha@example.com",
    topic: "A project or consulting",
    message: "I would like to talk about a backend project.",
    // Old enough to pass the minimum fill time.
    startedAt: String(Date.now() - 10_000),
    ...fields,
  };
  for (const [key, value] of Object.entries(values)) data.set(key, value);
  return data;
}

const fetchMock = vi.fn();

beforeEach(() => {
  fetchMock.mockReset().mockResolvedValue(new Response("{}", { status: 200 }));
  vi.stubGlobal("fetch", fetchMock);
  vi.stubEnv("RESEND_API_KEY", "test-key");
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("sendMessage validation", () => {
  it("sends a valid message to Resend with the short subject", async () => {
    const state = await sendMessage(idle, form());
    expect(state.status).toBe("success");
    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    const body = JSON.parse(init.body);
    expect(body.subject).toBe("New message from Asha Rao · Project");
    expect(body.reply_to).toBe("asha@example.com");
  });

  it.each([
    ["name", { name: "A" }, "Please enter your name."],
    ["name", { name: "a".repeat(101) }, "Please enter your name."],
    ["email", { email: "not-an-email" }, "Please enter a valid email address."],
    ["email", { email: `${"a".repeat(195)}@example.com` }, "Please enter a valid email address."],
    ["topic", { topic: "Free pizza" }, "Please choose a topic."],
    ["message", { message: "Too short" }, "Please write at least 20 characters."],
    ["message", { message: "x".repeat(5001) }, "Please keep it under 5,000 characters."],
  ])("rejects an invalid %s: %j", async (field, fields, error) => {
    const state = await sendMessage(idle, form(fields));
    expect(state.status).toBe("error");
    expect(state.fieldErrors?.[field as keyof NonNullable<ContactState["fieldErrors"]>]).toBe(error);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("echoes the submitted values back on a validation error", async () => {
    const state = await sendMessage(idle, form({ message: "Too short" }));
    expect(state.values).toEqual({
      name: "Asha Rao",
      email: "asha@example.com",
      topic: "A project or consulting",
      message: "Too short",
    });
  });

  it("trims whitespace before validating", async () => {
    const state = await sendMessage(idle, form({ name: "   A   " }));
    expect(state.fieldErrors?.name).toBe("Please enter your name.");
  });

  it("fakes success without sending when the honeypot is filled", async () => {
    const state = await sendMessage(idle, form({ website: "https://spam.example" }));
    expect(state.status).toBe("success");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("fakes success without sending when the form was filled in under 3 seconds", async () => {
    const state = await sendMessage(idle, form({ startedAt: String(Date.now() - 1_000) }));
    expect(state.status).toBe("success");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns an error when RESEND_API_KEY is missing", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const state = await sendMessage(idle, form());
    expect(state.status).toBe("error");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns an error when Resend rejects the request", async () => {
    fetchMock.mockResolvedValue(new Response("{}", { status: 500 }));
    const state = await sendMessage(idle, form());
    expect(state.status).toBe("error");
    expect(state.values?.email).toBe("asha@example.com");
  });
});
