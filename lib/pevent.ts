/**
 * Pevent.ng ticketing integration.
 *
 * This module is intentionally the ONLY place in the codebase that knows
 * about Pevent.ng's request/response shape. Everything else (the
 * reservation form, the API route) talks to the small interface below.
 *
 * To go live:
 *   1. Set PEVENT_API_BASE_URL, PEVENT_API_KEY in your environment (.env.local)
 *   2. Map each PartyEvent.peventEventId to the real event id Pevent.ng issues
 *   3. Confirm the field names in `buildReservationPayload` against the
 *      current Pevent.ng API docs — placeholders are marked below.
 */

export type ReservationInput = {
  eventId: string; // Pevent.ng event id (see PartyEvent.peventEventId)
  fullName: string;
  email: string;
  phone: string;
  guests: number;
  notes?: string;
};

export type ReservationResult =
  | { ok: true; confirmationId: string; ticketUrl?: string }
  | { ok: false; error: string };

const PEVENT_API_BASE_URL = process.env.PEVENT_API_BASE_URL ?? "";
const PEVENT_API_KEY = process.env.PEVENT_API_KEY ?? "";

function isConfigured() {
  return Boolean(PEVENT_API_BASE_URL && PEVENT_API_KEY);
}

function buildReservationPayload(input: ReservationInput) {
  // NOTE: placeholder field names — align with the live Pevent.ng schema
  // once API access is issued.
  return {
    event_id: input.eventId,
    attendee: {
      name: input.fullName,
      email: input.email,
      phone: input.phone,
    },
    ticket_quantity: input.guests,
    notes: input.notes ?? "",
  };
}

export async function createReservation(
  input: ReservationInput
): Promise<ReservationResult> {
  if (!isConfigured()) {
    // Graceful, explicit fallback so the rest of the product can be built,
    // reviewed, and demoed before real credentials exist.
    return {
      ok: false,
      error:
        "Pevent.ng is not configured yet. Set PEVENT_API_BASE_URL and PEVENT_API_KEY to enable live reservations.",
    };
  }

  try {
    const response = await fetch(`${PEVENT_API_BASE_URL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PEVENT_API_KEY}`,
      },
      body: JSON.stringify(buildReservationPayload(input)),
    });

    if (!response.ok) {
      const text = await response.text();
      return { ok: false, error: `Pevent.ng error (${response.status}): ${text}` };
    }

    const data = await response.json();

    return {
      ok: true,
      confirmationId: data.confirmation_id ?? data.id ?? "unknown",
      ticketUrl: data.ticket_url,
    };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown error contacting Pevent.ng",
    };
  }
}
