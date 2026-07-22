import Reveal from "@/components/Reveal";
import MasonryGallery from "@/components/MasonryGallery";

export const metadata = { title: "Lookbook — d'SundayBrnch" };

const galleryImages = Array.from({ length: 15 }).map((_, i) => ({
  src: `/images/lookbook/${i + 1}.jpg`,
  alt: `D SUNDAY BRNCH moment ${i + 1}`,
  tall: i % 3 === 0,
}));

export default function LookbookPage() {
  return (
    <>
      <section className="bg-brnch-espresso px-6 pb-20 pt-40 text-brnch-cream md:px-10 md:pt-48">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange">Lookbook</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Fashion, crowd, and{" "}
              <span className="font-accent text-brnch-orange">venue</span> —
              in stills.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-brnch-paper px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <MasonryGallery images={galleryImages} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
