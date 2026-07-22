import { NextRequest, NextResponse } from "next/server";
import { listSubscribers, subscribersToCsv } from "@/lib/subscribers";

/**
 * GET /api/admin/subscribers            -> JSON list
 * GET /api/admin/subscribers?format=csv -> CSV download
 *
 * Protect with a header: Authorization: Bearer <ADMIN_TOKEN>
 * Set ADMIN_TOKEN in your environment before deploying. If it isn't set,
 * this route stays locked (fails closed).
 */

function isAuthorized(req: NextRequest) {
  const token = process.env.ADMIN_TOKEN;
  if (!token) return false;

  const auth = req.headers.get("authorization") ?? "";
  return auth === `Bearer ${token}`;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const subscribers = await listSubscribers();
  const format = req.nextUrl.searchParams.get("format");

  if (format === "csv") {
    return new NextResponse(subscribersToCsv(subscribers), {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=subscribers.csv",
      },
    });
  }

  return NextResponse.json({ ok: true, count: subscribers.length, subscribers });
}
