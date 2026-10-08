"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Play, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { NetworkVisual } from "@/components/network";
export function AuthForm({ signup = false }: { signup?: boolean }) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [recover, setRecover] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (signup && data.get("password") !== data.get("confirm")) {
      setStatus("The passwords do not match. Please check both fields.");
      return;
    }
    setStatus(
      signup
        ? "Account creation is not available yet. No account has been created, and your credentials have not been sent or stored. Explore the demo workspace while the platform is in development."
        : "Sign-in is not available yet. Your credentials have not been sent or stored. You can explore the demo workspace without an account.",
    );
    form.reset();
  }
  return (
    <section className="auth-wrap container">
      <div className="auth-copy">
        <span className="eyebrow">A more connected workspace</span>
        <h1>
          {signup
            ? "Build what’s next. Connect the rest."
            : "Your digital world, in one place."}
        </h1>
        <p>
          {signup
            ? "One workspace for your applications, APIs, and the workflows between them. Discover the SPIRAGIVING product vision."
            : "Bring your connections into focus and make room for what matters. Take a look inside our sample workspace."}
        </p>
        <NetworkVisual />
      </div>
      <div className="auth-card">
        <h2>{signup ? "Create your account" : "Welcome back"}</h2>
        <p>Authentication preview · production accounts coming soon</p>
        <form onSubmit={submit}>
          {signup && (
            <div className="field">
              <label htmlFor="auth-name">Full name</label>
              <input
                id="auth-name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Your name"
              />
            </div>
          )}
          <div className="field">
            <label htmlFor="auth-email">
              {signup ? "Work email" : "Email address"}
            </label>
            <input
              id="auth-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
            />
          </div>
          <div className="field">
            <label htmlFor="auth-password">Password</label>
            <div className="password-field">
              <input
                id="auth-password"
                name="password"
                type={show ? "text" : "password"}
                required
                minLength={signup ? 12 : 1}
                maxLength={128}
                autoComplete={signup ? "new-password" : "current-password"}
                placeholder={
                  signup ? "At least 12 characters" : "Enter a sample password"
                }
              />
              <button
                type="button"
                className="icon-button"
                aria-label={show ? "Hide password" : "Show password"}
                onClick={() => setShow(!show)}
              >
                {show ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
            {signup && (
              <span className="field-hint">
                Use a sample password. Real credentials are not needed for this
                preview.
              </span>
            )}
          </div>
          {signup && (
            <div className="field">
              <label htmlFor="auth-confirm">Confirm password</label>
              <input
                id="auth-confirm"
                name="confirm"
                type={show ? "text" : "password"}
                autoComplete="new-password"
                required
                minLength={12}
                maxLength={128}
                placeholder="Re-enter your sample password"
              />
            </div>
          )}
          {signup ? (
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>
                I agree to the <Link href="/terms">terms</Link> and{" "}
                <Link href="/privacy">privacy policy</Link>.
              </span>
            </label>
          ) : (
            <div className="auth-links">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me (preview)</span>
              </label>
              <button
                className="text-link"
                style={{ fontSize: 12, border: 0, background: "none" }}
                type="button"
                onClick={() => setRecover(true)}
              >
                Forgot password?
              </button>
            </div>
          )}
          <Button type="submit">
            {signup ? "Preview account creation" : "Preview sign-in"}
          </Button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
        <div className="auth-switch">
          {signup ? "Already have an account?" : "New to SPIRAGIVING?"}{" "}
          <Link href={signup ? "/login" : "/signup"}>
            {signup ? "Log in" : "Get started"}
          </Link>
        </div>
        <Link className="auth-demo-link" href="/dashboard">
          <Play size={13} />
          Explore demo without an account
        </Link>
      </div>
      <Dialog open={recover} onOpenChange={setRecover}>
        <DialogContent
          title="Password recovery"
          description="Password recovery will be available when production authentication launches. This demo has no real accounts or stored passwords."
        >
          <Link className="button button-primary" href="/dashboard">
            Explore the demo workspace
          </Link>
        </DialogContent>
      </Dialog>
    </section>
  );
}
