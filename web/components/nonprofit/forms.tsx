"use client";
import { useId, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Download, Mail } from "lucide-react";
import { foundation } from "@/lib/nonprofit";
export function InquiryForm({
  kind = "contact",
}: {
  kind?: "contact" | "giving" | "volunteer";
}) {
  const id = useId();
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(
    null,
  );
  const [amount, setAmount] = useState("100");
  const [frequency, setFrequency] = useState("One-time");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (const name of ["name", "message"]) {
      const field = e.currentTarget.elements.namedItem(name) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      if (!field.value.trim()) {
        field.setCustomValidity("Please enter more than spaces.");
        field.reportValidity();
        return;
      }
    }
    const data = new FormData(e.currentTarget);
    const topic =
      kind === "giving"
        ? "Giving inquiry"
        : kind === "volunteer"
          ? "Volunteer interest"
          : String(data.get("topic"));
    const subject = `Spira Giving Colorado — ${topic}`;
    const body = `Name: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}\n${data.get("organization") ? `Organization: ${data.get("organization")}\n` : ""}${kind === "giving" ? `Proposed gift: $${amount === "custom" ? data.get("custom") : amount}\nPreference: ${frequency}\n` : ""}\n${String(data.get("message")).trim()}\n\nThis is an inquiry, not a grant application or a completed contribution.`;
    setDraft({ subject, body });
  }
  function download() {
    if (!draft) return;
    const url = URL.createObjectURL(
      new Blob(
        [`To: ${foundation.email}\nSubject: ${draft.subject}\n\n${draft.body}`],
        { type: "text/plain;charset=utf-8" },
      ),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "spira-giving-inquiry.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="inquiry-box">
      <form
        onSubmit={submit}
        onInput={(e) => {
          const field = e.target;
          if (
            field instanceof HTMLInputElement ||
            field instanceof HTMLTextAreaElement
          )
            field.setCustomValidity("");
        }}
        onChange={() => {
          if (draft) setDraft(null);
        }}
      >
        <h2>
          {kind === "giving"
            ? "Let’s talk about giving."
            : kind === "volunteer"
              ? "Share your interest."
              : "Start a conversation."}
        </h2>
        <p className="form-intro">
          {kind === "giving"
            ? "Prepare an inquiry about a contribution. No payment is collected here."
            : kind === "volunteer"
              ? "Tell us how you would like to contribute your time or skills."
              : "For general questions, foundation information or a cultural conversation."}
        </p>
        {kind === "giving" && (
          <>
            <fieldset className="choice-field">
              <legend>Contribution you’d like to discuss (USD)</legend>
              <div className="amount-options">
                {["50", "100", "250", "custom"].map((value) => (
                  <label
                    className={amount === value ? "selected" : ""}
                    key={value}
                  >
                    <input
                      type="radio"
                      name="amount"
                      value={value}
                      checked={amount === value}
                      onChange={() => setAmount(value)}
                    />
                    {value === "custom" ? "Other" : `$${value}`}
                  </label>
                ))}
              </div>
            </fieldset>
            {amount === "custom" && (
              <label htmlFor={`${id}-amount`}>
                Amount (USD)
                <input
                  id={`${id}-amount`}
                  name="custom"
                  type="number"
                  min="1"
                  max="100000000"
                  step="0.01"
                  required
                  placeholder="Enter an amount"
                />
              </label>
            )}
            <label htmlFor={`${id}-frequency`}>
              Giving preference
              <select
                id={`${id}-frequency`}
                aria-label="Giving preference"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              >
                <option>One-time</option>
                <option>Recurring giving inquiry</option>
              </select>
            </label>
          </>
        )}
        <div className="field-pair">
          <label htmlFor={`${id}-name`}>
            Full name
            <input
              id={`${id}-name`}
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              placeholder="Your name"
            />
          </label>
          <label htmlFor={`${id}-email`}>
            Email address
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label htmlFor={`${id}-org`}>
          Organization <span>(optional)</span>
          <input
            id={`${id}-org`}
            name="organization"
            autoComplete="organization"
            maxLength={150}
            placeholder="Organization or community group"
          />
        </label>
        {kind === "contact" && (
          <label htmlFor={`${id}-topic`}>
            What would you like to discuss?
            <select id={`${id}-topic`} name="topic">
              <option>General inquiry</option>
              <option>Foundation information</option>
              <option>Arts and culture</option>
              <option>Public records</option>
              <option>Website correction</option>
            </select>
          </label>
        )}
        <label htmlFor={`${id}-message`}>
          {kind === "volunteer" ? "Your interests and skills" : "Your message"}
          <textarea
            id={`${id}-message`}
            name="message"
            required
            rows={5}
            maxLength={2500}
            placeholder={
              kind === "volunteer"
                ? "Tell us about your interests, experience and availability…"
                : "How can we help?"
            }
          />
        </label>
        <label className="consent">
          <input type="checkbox" required />
          <span>
            I understand this form prepares a draft, and I will need to send the
            email myself.
          </span>
        </label>
        <button className="action" type="submit">
          Prepare email draft
          <ArrowUpRight size={18} />
        </button>
        <p className="form-note">
          Your details stay in this page until you open your email app or
          download the draft. Please don’t include sensitive financial
          information.
        </p>
      </form>
      {draft && (
        <section className="draft-result" role="status" aria-live="polite">
          <h3>
            <Check size={20} />
            Your draft is ready.
          </h3>
          <p>
            It has not been sent. Open your email app to review and send it, or
            download a copy.
          </p>
          <div className="draft-preview">
            <strong>To: {foundation.email}</strong>
            <pre>{draft.body}</pre>
          </div>
          <div className="button-row">
            <a
              className="action"
              href={`mailto:${foundation.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}
            >
              <Mail size={17} />
              Open email app
            </a>
            <button className="text-link" type="button" onClick={download}>
              Download draft
              <Download size={16} />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
