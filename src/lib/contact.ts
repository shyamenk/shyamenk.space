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
