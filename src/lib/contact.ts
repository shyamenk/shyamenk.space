// Shared by the contact Server Action and the form. A "use server" module may only export async functions.

export type ContactValues = { name: string; email: string; topic: string; message: string };

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof ContactValues, string>>;
  // Echoed back on error: React resets the form after every action, and these refill it.
  values?: ContactValues;
};

export const topics = ["A role or opportunity", "A project or consulting", "Something else"] as const;

// One-word labels keep the inbox subject short; the full topic is shown inside the email.
const shortTopic: Record<(typeof topics)[number], string> = {
  "A role or opportunity": "Role",
  "A project or consulting": "Project",
  "Something else": "General",
};

export function emailSubject(name: string, topic: string) {
  const label = shortTopic[topic as (typeof topics)[number]] ?? "General";
  const who = name.length > 60 ? `${name.slice(0, 57)}...` : name;
  return `New message from ${who} · ${label}`;
}
