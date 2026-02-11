"use client";

import React from "react";

function buildTarget(locale: "sv" | "en") {
  const hash = window.location.hash || "";
  const currentHost = window.location.host; // ex: localhost:3000
  const isLocal =
    currentHost.includes("localhost") || currentHost.startsWith("127.0.0.1");

  if (isLocal) {
    // Lokal dev: byt bara path
    return `/${locale}${hash}`;
  }

  // Prod: byt domän + locale
  const host =
    locale === "sv" ? "https://www.barecrm.se" : "https://www.barecrm.io";
  return `${host}/${locale}${hash}`;
}


export function LanguageSwitch({
  current,
}: {
  current: "sv" | "en";
}) {
  return (
    <div
      className="flex items-center gap-2 pl-2 border-l text-sm"
      style={{ borderColor: "var(--divider)" }}
    >
      <button
        type="button"
        onClick={() => (window.location.href = buildTarget("sv"))}
        className="hover:opacity-80"
        style={{
          fontWeight: current === "sv" ? 600 : 400,
          color: current === "sv" ? "var(--graphite-900)" : "var(--graphite-700)",
        }}
        aria-current={current === "sv" ? "page" : undefined}
      >
        SV
      </button>

      <span aria-hidden style={{ opacity: 0.5 }}>
        ·
      </span>

      <button
        type="button"
        onClick={() => (window.location.href = buildTarget("en"))}
        className="hover:opacity-80"
        style={{
          fontWeight: current === "en" ? 600 : 400,
          color: current === "en" ? "var(--graphite-900)" : "var(--graphite-700)",
        }}
        aria-current={current === "en" ? "page" : undefined}
      >
        EN
      </button>
    </div>
  );
}
