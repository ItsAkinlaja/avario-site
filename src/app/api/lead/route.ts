import { NextResponse } from "next/server";

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

function isNonEmptyString(value: unknown, minLength = 1) {
  return typeof value === "string" && value.trim().length >= minLength;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as Partial<LeadPayload> | null;
  if (!data) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = typeof data.fullName === "string" ? data.fullName.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";
  const role = typeof data.role === "string" ? data.role.trim() : "";
  const budgetRange =
    typeof data.budgetRange === "string" ? data.budgetRange.trim() : "";
  const primaryNeed =
    typeof data.primaryNeed === "string" ? data.primaryNeed.trim() : "";
  const timeline = typeof data.timeline === "string" ? data.timeline.trim() : "";
  const website = typeof data.website === "string" ? data.website.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!isNonEmptyString(fullName, 2)) {
    return NextResponse.json({ error: "Full name is required" }, { status: 400 });
  }
  if (!isNonEmptyString(email, 5) || !isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (!isNonEmptyString(company, 2)) {
    return NextResponse.json({ error: "Company is required" }, { status: 400 });
  }
  if (!isNonEmptyString(role, 2)) {
    return NextResponse.json({ error: "Role is required" }, { status: 400 });
  }
  if (!isNonEmptyString(budgetRange, 1)) {
    return NextResponse.json({ error: "Budget range is required" }, { status: 400 });
  }
  if (!isNonEmptyString(primaryNeed, 1)) {
    return NextResponse.json({ error: "Primary need is required" }, { status: 400 });
  }
  if (!isNonEmptyString(timeline, 1)) {
    return NextResponse.json({ error: "Timeline is required" }, { status: 400 });
  }

  const payload: LeadPayload = {
    fullName,
    email,
    company,
    role,
    website: isNonEmptyString(website, 4) ? website : undefined,
    budgetRange,
    primaryNeed,
    timeline,
    message: isNonEmptyString(message, 3) ? message : undefined,
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.RELAVICX_WEBHOOK_URL;
  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        source: "avario-website",
        submittedAt: new Date().toISOString(),
        lead: payload,
      }),
    }).catch(() => null);

    if (!res || !res.ok) {
      return NextResponse.json(
        { error: "Submission failed" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
