import Link from "next/link";
import type { PartyEvent } from "@/lib/content";

export default function EventCard({ event }: { event: PartyEvent }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-brnch-espresso text-brnch-cream">
      <div
        className="relative h-72 w-full overflow-hidden bg-brnch-espresso-deep bg-cover bg-center transition-transform duration-700 group-hover:scale-105 md:h-96"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brnch-espresso via-brnch-espresso/10 to-transparent" />
        <span className="absolute left-6 top-6 rounded-full bg-brnch-orange px-4 py-1.5 eyebrow text-brnch-cream">
          {event.displayDate}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-8">
        <h3 className="font-display text-2xl font-bold md:text-3xl">{event.title}</h3>
        <p className="text-sm leading-relaxed text-brnch-cream/75">{event.description}</p>

        <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
          <div>
            <dt className="eyebrow text-brnch-orange">Time</dt>
            <dd className="mt-1 text-brnch-cream/80">{event.time}</dd>
          </div>
          <div>
            <dt className="eyebrow text-brnch-orange">Venue</dt>
            <dd className="mt-1 text-brnch-cream/80">{event.venue}</dd>
          </div>
          <div className="col-span-2">
            <dt className="eyebrow text-brnch-orange">Dress Code</dt>
            <dd className="mt-1 text-brnch-cream/80">{event.dressCode}</dd>
          </div>
          {event.hosts && (
            <div className="col-span-2">
              <dt className="eyebrow text-brnch-orange">Hosts</dt>
              <dd className="mt-1 text-brnch-cream/80">{event.hosts.join(" · ")}</dd>
            </div>
          )}
        </dl>

        <Link
          href={`/reservations?event=${event.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-brnch-orange px-6 py-3 eyebrow text-brnch-cream transition-transform hover:translate-x-1"
        >
          Reserve a Spot →
        </Link>
      </div>
    </div>
  );
}
