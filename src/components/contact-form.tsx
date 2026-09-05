"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mt-12 rounded-2xl border border-card-border bg-background p-8 text-center"
      >
        <h3 className="text-lg font-semibold">Thanks — message received</h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          This is a static demo, so nothing was sent. To reach the team
          directly, email us at{" "}
          <a
            href="mailto:hello@aiworkshop.example"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            hello@aiworkshop.example
          </a>
          . We reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="mt-12 space-y-6 rounded-2xl border border-card-border bg-background p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-2 focus:outline-primary"
            placeholder="Ada Lovelace"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-2 focus:outline-primary"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium"
        >
          What do you want to build?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full resize-y rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-2 focus:outline-primary"
          placeholder="We'd love to give our support team an AI copilot..."
        />
      </div>
      <div>
        <label
          htmlFor="newsletter"
          className="flex items-start gap-3 text-sm text-muted"
        >
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            className="mt-0.5 h-4 w-4 rounded border-card-border text-primary focus:outline-2 focus:outline-primary"
          />
          <span>
            Also subscribe me to the AI Workshop newsletter — practical notes
            and builds, no spam.
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-contrast transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Send message
      </button>
      <p className="text-center text-xs leading-5 text-muted">
        This is a static demo form. Email us at{" "}
        <a
          href="mailto:hello@aiworkshop.example"
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          hello@aiworkshop.example
        </a>{" "}
        to reach the team directly.
      </p>
    </form>
  );
}