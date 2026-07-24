"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { upcomingEvents } from "@/lib/content";

const WHATSAPP_NUMBER = "2348140128922";

export default function ReservationForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("event");

  const [eventId, setEventId] = useState(preselected ?? upcomingEvents[0]?.slug ?? "");
  const [status, setStatus] = useState<"idle" | "done">("idle");
  const [waUrl, setWaUrl] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const fullName = form.get("fullName");
    const email = form.get("email");
    const phone = form.get("phone");
    const guests = form.get("guests");
    const notes = form.get("notes");

    const event = upcomingEvents.find(function (ev) {
      return ev.slug === eventId;
    });

    const lines = [
      "Hi D SUNDAY BRNCH! I would like to reserve a spot.",
      "",
      "Event: " + (event ? event.title : eventId),
      "Date: " + (event ? event.displayDate : ""),
      "Name: " + fullName,
      "Email: " + email,
      "Phone: " + phone,
      "Guests: " + guests,
      "Notes: " + (notes ? notes : "none")
    ];
    const message = lines.join("\n");

    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);

    setWaUrl(url);
    setStatus("done");
    window.open(url, "_blank");
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-brnch-espresso/[0.04] p-8 text-center">
        <p className="font-display text-2xl font-bold text-brnch-espresso">
          Almost there.
        </p>
        <p className="mt-3 text-sm text-brnch-espresso/70">
          We opened WhatsApp with your reservation details filled in, just hit send to confirm with our team.
        </p>
        <a href={waUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-brnch-orange px-6 py-3 eyebrow text-brnch-cream">
          Open WhatsApp Again
        </a>
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
              {event.title} - {event.displayDate}
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

      <button
        type="submit"
        className="rounded-full bg-brnch-orange px-8 py-4 eyebrow text-brnch-cream transition-opacity hover:opacity-90"
      >
        Confirm Reservation
      </button>

      <p className="text-xs text-brnch-espresso/50">
        You will be redirected to WhatsApp to send your reservation details to our team directly.
      </p>
    </form>
  );
}
