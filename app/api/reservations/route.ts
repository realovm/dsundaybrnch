import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createReservation } from "@/lib/pevent";

const schema = z.object({
  eventId: z.string().min(1, "Choose an event."),
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a valid phone number."),
  guests: z.coerce.number().int().min(1).max(10),
  notes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid reservation." },
      { status: 400 }
    );
  }

  const result = await createReservation(parsed.data);

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ...result, ok: true });
}
