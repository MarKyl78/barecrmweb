import React from "react";

export function H1({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`font-semibold tracking-tight text-[42px] leading-[1.1] sm:text-[48px] ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-semibold tracking-tight text-[28px] leading-[1.2] sm:text-[32px] ${className}`}
    >
      {children}
    </h2>
  );
}

export function P({
  children,
  muted,
  className = "",
}: {
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`leading-relaxed text-[16px] sm:text-[17px] ${className}`}
      style={{
        color: muted ? "var(--graphite-700)" : "var(--graphite-900)",
      }}
    >
      {children}
    </p>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-[15px] font-medium transition hover:opacity-90";


  if (variant === "primary") {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        style={{
          background: "var(--brand-base)",
          color: "var(--graphite-900)",
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} border ${className}`}
      style={{
        borderColor: "var(--divider)",
        background: "var(--surface)",
        color: "var(--graphite-900)",
      }}
    >
      {children}
    </a>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border ${className}`}
      style={{
        borderColor: "var(--divider)",
        background: "var(--surface)",
      }}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-base md:text-lg font-semibold tracking-tight ${className}`}
    >
      {children}
    </div>
  );
}
