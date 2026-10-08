"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
export function downloadText(
  name: string,
  content: string,
  type = "text/plain;charset=utf-8",
) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    if (values.get("website")) {
      setError(true);
      setStatus("Unable to prepare this message. Please try again.");
      return;
    }
    if (String(values.get("message")).trim().length < 20) {
      setError(true);
      setStatus("Please add at least 20 characters to your message.");
      return;
    }
    setBusy(true);
    setStatus("");
    await new Promise((resolve) => setTimeout(resolve, 350));
    try {
      downloadText(
        "spiragiving-contact-draft.txt",
        `SPIRAGIVING CONTACT DRAFT — NOT SUBMITTED\n\nName: ${values.get("name")}\nEmail: ${values.get("email")}\nCompany: ${values.get("company") || "Not provided"}\nInquiry: ${values.get("inquiry")}\nSubject: ${values.get("subject")}\n\n${values.get("message")}\n\nThis draft was prepared locally. No message has been sent to SPIRAGIVING.`,
      );
      setError(false);
      setStatus(
        "Your draft is ready to download. It has not been sent. Live contact submissions are coming soon.",
      );
    } catch {
      setError(true);
      setStatus(
        "The draft could not be created. Please copy your message and try again.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-name">Full name *</label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            placeholder="Alex Morgan"
          />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Business email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            placeholder="alex@company.com"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-company">Company</label>
          <input
            id="contact-company"
            name="company"
            autoComplete="organization"
            maxLength={150}
            placeholder="Your company"
          />
        </div>
        <div className="field">
          <label htmlFor="contact-inquiry">Inquiry type *</label>
          <select id="contact-inquiry" name="inquiry" required>
            {[
              "General inquiry",
              "Technical support",
              "Business partnership",
              "API integration",
              "Enterprise solutions",
              "Other",
            ].map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-subject">Subject *</label>
        <input
          id="contact-subject"
          name="subject"
          required
          maxLength={150}
          placeholder="What would you like to connect?"
        />
      </div>
      <div className="field">
        <label htmlFor="contact-message">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={20}
          maxLength={5000}
          placeholder="Tell us about your project, your tools, and what you have in mind…"
        />
        <span className="field-hint">20–5,000 characters</span>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="checkbox-label">
        <input type="checkbox" required />
        <span>
          I have read the <Link href="/privacy">privacy policy</Link>. I
          understand this form prepares a local draft and does not send a
          message.
        </span>
      </label>
      <Button type="submit" disabled={busy}>
        {busy ? <Loader2 className="spin" size={16} /> : <Download size={16} />}{" "}
        {busy ? "Preparing draft…" : "Download contact draft"}
      </Button>
      {status && (
        <p
          className={`form-status ${error ? "error" : "success"}`}
          role="status"
        >
          {status}
        </p>
      )}
      <p className="field-hint" style={{ marginTop: 18 }}>
        Demo mode. Your details stay in this browser and downloaded file; they
        are not submitted to a server.
      </p>
    </form>
  );
}
