"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendMessage } from "@/app/contact/actions";
import { topics, type ContactState } from "@/lib/contact";

const initialState: ContactState = { status: "idle", message: "" };

const field =
  "mt-2 w-full rounded-xl border bg-pit px-4 py-3 text-bone placeholder:text-bone/35 outline-none transition focus:border-lava focus:ring-2 focus:ring-lava/30";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);
  // Kept outside the form: React resets form fields after each action, which would zero a hidden input.
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function submit(formData: FormData) {
    formData.set("startedAt", String(startedAt.current));
    formAction(formData);
  }

  const values = state.values;

  const err = state.fieldErrors ?? {};
  const border = (key: keyof typeof err) => (err[key] ? "border-crimson" : "border-white/10");

  return (
    <form action={submit} noValidate className="space-y-5">
      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-bone/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={values?.name}
            required
            aria-invalid={Boolean(err.name)}
            aria-describedby={err.name ? "name-error" : undefined}
            className={`${field} ${border("name")}`}
            placeholder="Your name"
          />
          {err.name && (
            <p id="name-error" className="mt-1.5 text-sm text-crimson">
              {err.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-bone/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values?.email}
            required
            aria-invalid={Boolean(err.email)}
            aria-describedby={err.email ? "email-error" : undefined}
            className={`${field} ${border("email")}`}
            placeholder="you@company.com"
          />
          {err.email && (
            <p id="email-error" className="mt-1.5 text-sm text-crimson">
              {err.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="text-sm text-bone/80">
          What&apos;s it about?
        </label>
        <select
          id="topic"
          name="topic"
          required
          // Remount on each result: browsers don't reapply a changed defaultValue to <select> after a form reset.
          key={`${state.status}-${values?.topic ?? ""}-${state.message}`}
          defaultValue={values?.topic ?? ""}
          aria-invalid={Boolean(err.topic)}
          aria-describedby={err.topic ? "topic-error" : undefined}
          className={`${field} ${border("topic")}`}
        >
          <option value="" disabled>
            Choose one
          </option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {err.topic && (
          <p id="topic-error" className="mt-1.5 text-sm text-crimson">
            {err.topic}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-bone/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={values?.message}
          required
          aria-invalid={Boolean(err.message)}
          aria-describedby={err.message ? "message-error message-hint" : "message-hint"}
          className={`${field} ${border("message")} resize-y`}
          placeholder="The role or problem, your stack, and your timeline."
        />
        <p id="message-hint" className="mt-1.5 text-xs text-bone/45">
          A few lines is plenty.
        </p>
        {err.message && (
          <p id="message-error" className="mt-1 text-sm text-crimson">
            {err.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={pending}
          className="ember-btn rounded-full bg-void px-8 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${state.status === "success" ? "text-green-400" : state.status === "error" ? "text-crimson" : ""}`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
