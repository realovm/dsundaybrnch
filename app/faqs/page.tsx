import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { faqs } from "@/lib/content";

export const metadata = { title: "FAQs — d'SundayBrnch" };

export default function FaqsPage() {
  return (
    <>
      <section className="bg-brnch-espresso px-6 pb-20 pt-40 text-brnch-cream md:px-10 md:pt-48">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange">FAQs</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Good to know{" "}
              <span className="font-accent text-brnch-orange">
                before Sunday.
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-brnch-paper px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
