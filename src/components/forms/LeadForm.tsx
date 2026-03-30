"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type LeadPayload = {
  fullName: string;
  email: string;
  company: string;
  role: string;
  website?: string;
  budgetRange: string;
  primaryNeed: string;
  timeline: string;
  message?: string;
};

const budgets = ["< $2k", "$2k–$5k", "$5k–$10k", "$10k+", "Not sure"];
const needs = [
  "Acquisition system",
  "Sales & CRM system (RelaviCX)",
  "Operations system",
  "Infrastructure / software build",
  "Not sure",
];
const timelines = ["Immediate", "2–4 weeks", "1–3 months", "3+ months"];

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-black/80">{label}</span>
        {hint ? <span className="text-xs text-black/50">{hint}</span> : null}
      </div>
      {children}
    </label>
  );
}

const inputClass =
  "h-11 rounded-xl border border-black/15 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-avario-teal focus:ring-offset-2 ring-offset-background";

export function LeadForm({ className }: { className?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [payload, setPayload] = useState<LeadPayload>({
    fullName: "",
    email: "",
    company: "",
    role: "",
    website: "",
    budgetRange: budgets[2],
    primaryNeed: needs[0],
    timeline: timelines[1],
    message: "",
  });

  const canSubmit = useMemo(() => {
    return (
      payload.fullName.trim().length >= 2 &&
      payload.email.trim().length >= 5 &&
      payload.company.trim().length >= 2 &&
      payload.role.trim().length >= 2 &&
      payload.budgetRange.trim().length > 0 &&
      payload.primaryNeed.trim().length > 0 &&
      payload.timeline.trim().length > 0
    );
  }, [payload]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Failed to submit");
      }
      setStatus("success");
      setPayload((p) => ({
        ...p,
        message: "",
      }));
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" hint="Required">
          <input
            className={inputClass}
            value={payload.fullName}
            onChange={(e) => setPayload({ ...payload, fullName: e.target.value })}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Email" hint="Required">
          <input
            className={inputClass}
            value={payload.email}
            onChange={(e) => setPayload({ ...payload, email: e.target.value })}
            placeholder="you@company.com"
            autoComplete="email"
            type="email"
            required
          />
        </Field>
        <Field label="Company" hint="Required">
          <input
            className={inputClass}
            value={payload.company}
            onChange={(e) => setPayload({ ...payload, company: e.target.value })}
            placeholder="Company name"
            required
          />
        </Field>
        <Field label="Role" hint="Required">
          <input
            className={inputClass}
            value={payload.role}
            onChange={(e) => setPayload({ ...payload, role: e.target.value })}
            placeholder="Founder, Head of Sales, etc."
            required
          />
        </Field>
        <Field label="Website" hint="Optional">
          <input
            className={inputClass}
            value={payload.website}
            onChange={(e) => setPayload({ ...payload, website: e.target.value })}
            placeholder="https://"
            type="url"
          />
        </Field>
        <Field label="Budget range" hint="Required">
          <select
            className={inputClass}
            value={payload.budgetRange}
            onChange={(e) =>
              setPayload({ ...payload, budgetRange: e.target.value })
            }
            required
          >
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Primary need" hint="Required">
          <select
            className={inputClass}
            value={payload.primaryNeed}
            onChange={(e) =>
              setPayload({ ...payload, primaryNeed: e.target.value })
            }
            required
          >
            {needs.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline" hint="Required">
          <select
            className={inputClass}
            value={payload.timeline}
            onChange={(e) => setPayload({ ...payload, timeline: e.target.value })}
            required
          >
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Context" hint="Optional">
        <textarea
          className={cn(inputClass, "min-h-28 py-3")}
          value={payload.message}
          onChange={(e) => setPayload({ ...payload, message: e.target.value })}
          placeholder="What’s currently breaking in your growth process?"
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-black/60">
          This form is a qualification step. We respond to serious requests.
        </div>
        <Button type="submit" disabled={!canSubmit || submitting}>
          {submitting ? "Submitting..." : "Request Consultation"}
        </Button>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl border border-avario-teal/30 bg-avario-teal-tint px-5 py-4 text-sm text-avario-dark-teal">
          Submitted. We’ll review your request and respond with next steps.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-black">
          {errorMessage ?? "Failed to submit. Please try again."}
        </div>
      ) : null}
    </form>
  );
}
