import Reveal from "@/components/Reveal";
import EventCard from "@/components/EventCard";
import { upcomingEvents } from "@/lib/content";

export const metadata = { title: "Next Brunch — d'SundayBrnch" };

export default function PartiesPage() {
  return (
    <>
      <section className="bg-brnch-espresso px-6 pb-20 pt-40 text-brnch-cream md:px-10 md:pt-48">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange">Upcoming Brunch</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Two Sundays a month.{" "}
              <span className="font-accent text-brnch-orange">
                Never the same twice.
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-brnch-paper px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {upcomingEvents.map((event, i) => (
            <Reveal key={event.slug} delay={i * 0.1}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
