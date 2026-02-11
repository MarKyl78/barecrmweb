"use client";

import { useState } from "react";

export function WaitlistForm({ locale = "sv" }: { locale?: "sv" | "en" }) {
  const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT;

  const t = {
    placeholder: locale === "en" ? "you@email.com" : "din@epost.se",
    ctaIdle: locale === "en" ? "Join the waitlist" : "Ställ mig i kö",
    ctaSending: locale === "en" ? "Sending…" : "Skickar…",
    success:
      locale === "en"
        ? "All set. We’ll ping you when BareCRM is live."
        : "Klart. Du får en ping när BareCRM är live.",
    error:
      locale === "en"
        ? "Something went wrong. Please try again."
        : "Hmm. Det gick inte att skicka. Testa igen.",
  };


  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      const source =
          typeof window !== "undefined" ? window.location.hostname : "unknown";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          source,
          locale,
          page: "early-access",
        })

      });

      if (!res.ok) throw new Error("Bad response");
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
          className="h-12 flex-1 rounded-md border px-4"
          style={{ borderColor: "var(--divider)", background: "var(--surface)" }}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="h-12 rounded-md px-5 font-medium disabled:opacity-60"
          style={{ background: "var(--brand-base)", color: "var(--graphite-900)" }}
        >
          {status === "sending" ? t.ctaSending : t.ctaIdle}
        </button>
      </form>

      {status === "sent" && (
        <p className="mt-3 text-sm" style={{ color: "var(--graphite-700)" }}>
          {t.success}
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm" style={{ color: "var(--danger)" }}>
          {t.error}
        </p>
      )}
    </div>
  );
}
