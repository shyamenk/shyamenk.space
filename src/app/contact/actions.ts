"use server";

import { emailSubject, topics, type ContactState, type ContactValues } from "@/lib/contact";
import { contactEmail } from "@/lib/contact-email";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Humans take longer than this to fill in the form; most bots don't.
const MIN_FILL_MS = 3000;

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const topic = String(formData.get("topic") ?? "");
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "");
  const startedAt = Number(formData.get("startedAt") ?? 0);
  const values: ContactValues = { name, email, topic, message };

  // Pretend success to bots so they don't retry with a different payload.
  if (honeypot || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "success", message: "Thanks, your message is on its way." };
  }

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2 || name.length > 100) fieldErrors.name = "Please enter your name.";
  if (!EMAIL.test(email) || email.length > 200) fieldErrors.email = "Please enter a valid email address.";
  if (!topics.includes(topic as (typeof topics)[number])) fieldErrors.topic = "Please choose a topic.";
  if (message.length < 20) fieldErrors.message = "Please write at least 20 characters.";
  if (message.length > 5000) fieldErrors.message = "Please keep it under 5,000 characters.";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return { status: "error", message: "The form isn't connected yet. Please email me directly instead.", values };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "shyamenk.space <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? "shyamenk@gmail.com"],
      reply_to: email,
      subject: emailSubject(name, topic),
      ...contactEmail(values),
    }),
  });

  if (!response.ok) {
    console.error("Contact form: Resend returned", response.status);
    return { status: "error", message: "Something went wrong sending your message. Please email me directly instead.", values };
  }

  return { status: "success", message: "Thanks, your message is on its way. I'll reply by email." };
}
