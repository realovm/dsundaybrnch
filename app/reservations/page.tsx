import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import ReservationForm from "@/components/ReservationForm";

export const metadata = { title: "Reservations — d'SundayBrnch" };

export default function ReservationsPage() {
  return (
    <>
      <section className="bg-brnch-espresso px-6 pb-20 pt-40 text-brnch-cream md:px-10 md:pt-48">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange">Reservations</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Save your <span className="font-accent text-brnch-orange">seat</span>{" "}
              at the table.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-brnch-paper px-6 py-20 md:px-10">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <Suspense fallback={null}>
              <ReservationForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
