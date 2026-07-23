import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import EventCard from "@/components/EventCard";
import { upcomingEvents } from "@/lib/content";

export default function Home() {
  const nextEvent = upcomingEvents[0];

  return (
    <>
      <Hero />

      {/* BRAND INTRO — day / cream */}
      <section id="brand-intro" className="bg-brnch-paper px-6 py-28 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-brnch-orange">The Brand</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-brnch-espresso md:text-6xl">
              Not an event.{" "}
              <span className="font-accent text-brnch-orange">A rhythm.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brnch-espresso/70 md:text-lg">
              Twice a month, we take over the City of Benin and turn the
              afternoon tables to Music disks.
              Long lunches slide into golden-hour sets, plates give way to
              dance floors, and the whole thing repeats.Same energy, same
              venue every 1st and 3rd Sunday of the month.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NEXT EVENT TEASER — night / espresso */}
      <section className="bg-brnch-espresso px-6 py-28 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange">Next Up</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-bold text-brnch-cream md:text-5xl">
              Mark the date.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.15}>
              <EventCard event={nextEvent} />
            </Reveal>
            <Reveal delay={0.25} className="flex flex-col justify-center gap-6">
              <p className="text-brnch-cream/70 md:text-lg">
                Every edition of D SUNDAY BRNCH has its own theme and its own lineup but the same promise: golden experience in Trafik with the city&rsquo;s best DJs.
              </p>
              <Link
                href="/parties"
                className="w-fit rounded-full border border-brnch-cream/30 px-6 py-3 eyebrow text-brnch-cream transition-colors hover:border-brnch-orange hover:text-brnch-orange"
              >
                See All Upcoming Brunch →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED VISUALS — day / cream */}
      <section className="bg-brnch-cream px-6 py-28 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange-deep">The Look</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-bold text-brnch-espresso md:text-5xl">
              A feeling, mostly captured in motion.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784720336/2_fjewrm.jpg",
              "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721329/8_oydbti.jpg",
              "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721311/6_ppg3we.jpg",
              "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721285/4_r4swfl.jpg",
            ].map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div
                  className={`relative overflow-hidden rounded-2xl bg-brnch-espresso/10 ${
                    i % 2 === 0 ? "aspect-[3/4]" : "aspect-square md:mt-10"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-14 text-center">
            <Link
              href="/lookbook"
              className="eyebrow text-brnch-espresso underline decoration-brnch-orange decoration-2 underline-offset-8 hover:text-brnch-orange-deep"
            >
              Open the Full Lookbook
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA — orange */}
      <section className="bg-brnch-orange px-6 py-24 text-center md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-brnch-cream md:text-5xl">
              Your table is two Sundays away.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <Link
              href="/reservations"
              className="mt-8 inline-block rounded-full bg-brnch-espresso px-10 py-4 eyebrow text-brnch-cream transition-transform hover:scale-105"
            >
              Reserve Your Spot
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
