import Reveal from "@/components/Reveal";
import MasonryGallery from "@/components/MasonryGallery";

export const metadata = { title: "Lookbook — d'SundayBrnch" };

const galleryImages = [
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721311/6_ppg3we.jpg", alt: "D SUNDAY BRNCH moment 1", tall: true },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721329/8_oydbti.jpg", alt: "D SUNDAY BRNCH moment 2", tall: false },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721345/10_uuqr9p.jpg", alt: "D SUNDAY BRNCH moment 3", tall: true },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721409/15_ht1pgl.jpg", alt: "D SUNDAY BRNCH moment 4", tall: false },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721362/12_z57rhf.jpg", alt: "D SUNDAY BRNCH moment 5", tall: true },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721406/14_abvstd.jpg", alt: "D SUNDAY BRNCH moment 6", tall: false },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721404/13_x366ot.jpg", alt: "D SUNDAY BRNCH moment 7", tall: true },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721354/11_oxrx45.jpg", alt: "D SUNDAY BRNCH moment 8", tall: false },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721337/9_njcfpe.jpg", alt: "D SUNDAY BRNCH moment 9", tall: true },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721300/5_rqfo11.jpg", alt: "D SUNDAY BRNCH moment 10", tall: false },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721321/7_eticy7.jpg", alt: "D SUNDAY BRNCH moment 11", tall: true },
  { src: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784720336/2_fjewrm.jpg", alt: "D SUNDAY BRNCH moment 12", tall: false },
  
  
];

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
