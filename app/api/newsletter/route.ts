import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { addSubscriber } from "@/lib/subscribers";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid email." },
      { status: 400 }
    );
  }

  const { added } = await addSubscriber(parsed.data.email);

  return NextResponse.json({
    ok: true,
    message: added ? "You're on the list." : "You're already subscribed.",
  });
}
