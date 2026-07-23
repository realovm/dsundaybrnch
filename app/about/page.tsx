import Reveal from "@/components/Reveal";

export const metadata = { title: "About — d'SundayBrnch" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-brnch-espresso px-6 pb-24 pt-40 text-brnch-cream md:px-10 md:pt-48">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange">About Us</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              We started with one long lunch{" "}
              <span className="font-accent text-brnch-orange">
                that never wanted to end.
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-brnch-paper px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-brnch-orange-deep">The Story</p>
            <p className="mt-5 text-base leading-relaxed text-brnch-espresso/75 md:text-lg">
              D SUNDAY BRNCH is more than just a party, it's a carefully curated lifestyle experience where great music, good food, beautiful people, and unforgettable moments come together.
              Held every 1st and 3rd Sunday, we create a space where friends reconnect, strangers become friends, and every event feels like the highlight of the weekend. From high-energy DJ sets and premium cocktails to immersive décor and vibrant entertainment, every detail is designed to deliver an atmosphere that's stylish, exciting, and unforgettable.
              Whether you're celebrating a special occasion, enjoying a relaxed afternoon brunch, or dancing into the evening, D SUNDAY BRNCH offers an experience that blends luxury, culture, and community in one destination.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-brnch-orange-deep">The Mission</p>
            <p className="mt-5 text-base leading-relaxed text-brnch-espresso/75 md:text-lg">
              We exist to give Benin a reason to dress up twice a month. Not
              for a random Friday, but for a Sunday that ends better than it
              started. Every edition is built around the same principle:
              exceptional hosting, a curated crowd, and a soundtrack that
              takes you from golden hour into the night without missing a
              beat.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brnch-cream px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange-deep">The Experience</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold text-brnch-espresso md:text-5xl">
              One hour of lunch. Five hours of everything else.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Arrive",
                copy: "Trafik open at 1PM. Tables are set, the first tracks are warm, and golden hour is still two hours away.",
              },
              {
                title: "Unwind",
                copy: "Plates move, conversation carries, and the resident DJ builds the room slowly. Brunch with a pulse.",
              },
              {
                title: "Dance",
                copy: "As the sun drops, the tables give way to the floor. Guest DJs take over until the last song plays.",
              },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-brnch-espresso/[0.04] p-8">
                  <h3 className="font-display text-xl font-bold text-brnch-espresso">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brnch-espresso/70">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brnch-orange px-6 py-24 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-brnch-cream/80">The Community</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold text-brnch-cream md:text-5xl">
            A crowd that shows up dressed, ready, and every single time.
          </h2>
        </Reveal>
      </section>
    </>
  );
}
