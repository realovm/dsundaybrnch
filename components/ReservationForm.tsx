"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { upcomingEvents } from "@/lib/content";

export default function ReservationForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("event");

  const [eventId, setEventId] = useState(preselected ?? upcomingEvents[0]?.slug ?? "");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);

    const payload = {
      eventId,
      fullName: form.get("fullName"),
      email: form.get("email"),
      phone: form.get("phone"),
      guests: Number(form.get("guests")),
      notes: form.get("notes"),
    };

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("done");
      setMessage(
        `You're confirmed. Reference: ${data.confirmationId}. A ticket has been sent to your email.`
      );
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "We couldn't process that reservation. Please try again."
      );
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-brnch-espresso/[0.04] p-8 text-center">
        <p className="font-display text-2xl font-bold text-brnch-espresso">
          You&rsquo;re in.
        </p>
        <p className="mt-3 text-sm text-brnch-espresso/70">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div>
        <label className="eyebrow text-brnch-espresso/60">Event</label>
        <select
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          className="mt-2 w-full rounded-xl border border-brnch-espresso/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-brnch-orange"
        >
          {upcomingEvents.map((event) => (
            <option key={event.slug} value={event.slug}>
              {event.title} — {event.displayDate}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="eyebrow text-brnch-espresso/60">Full name</label>
          <input
            name="fullName"
            required
            className="mt-2 w-full rounded-xl border border-brnch-espresso/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-brnch-orange"
          />
        </div>
        <div>
          <label className="eyebrow text-brnch-espresso/60">Phone</label>
          <input
            name="phone"
            required
            className="mt-2 w-full rounded-xl border border-brnch-espresso/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-brnch-orange"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="eyebrow text-brnch-espresso/60">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-xl border border-brnch-espresso/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-brnch-orange"
          />
        </div>
        <div>
          <label className="eyebrow text-brnch-espresso/60">Guests</label>
          <input
            type="number"
            name="guests"
            min={1}
            max={10}
            defaultValue={2}
            required
            className="mt-2 w-full rounded-xl border border-brnch-espresso/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-brnch-orange"
          />
        </div>
      </div>

      <div>
        <label className="eyebrow text-brnch-espresso/60">
          Notes (optional)
        </label>
        <textarea
          name="notes"
          rows={3}
          className="mt-2 w-full rounded-xl border border-brnch-espresso/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-brnch-orange"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-brnch-orange px-8 py-4 eyebrow text-brnch-cream transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Processing…" : "Confirm Reservation"}
      </button>

      <p className="text-xs text-brnch-espresso/50">
        Reservations are processed securely through Pevent.ng.
      </p>
    </form>
  );
}
