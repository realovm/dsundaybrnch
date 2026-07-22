import Reveal from "@/components/Reveal";
import PovCard from "@/components/PovCard";

export const metadata = { title: "POVs — d'SundayBrnch" };

const povs = [
  { id: 1, src: "https://res.cloudinary.com/hnhbf8yt/video/upload/v.../pov-1.mp4", poster: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784720352/3_ua6be6.jpg",},
  { id: 2, src: "https://res.cloudinary.com/hnhbf8yt/video/upload/v.../pov-2.mp4", poster: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784720297/1_rltly1.jpg",},
  { id: 3, src: "https://res.cloudinary.com/hnhbf8yt/video/upload/v.../pov-2.mp4", poster: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721300/5_rqfo11.jpg",},
  { id: 4, src: "https://res.cloudinary.com/hnhbf8yt/video/upload/v.../pov-2.mp4", poster: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721362/12_z57rhf.jpg",},
  { id: 5, src: "https://res.cloudinary.com/hnhbf8yt/video/upload/v.../pov-2.mp4", poster: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721406/14_abvstd.jpg",},
  { id: 6, src: "https://res.cloudinary.com/hnhbf8yt/video/upload/v.../pov-2.mp4", poster: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721321/7_eticy7.jpg",},
  { id: 7, src: "https://res.cloudinary.com/hnhbf8yt/video/upload/v.../pov-2.mp4", poster: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721354/11_oxrx45.jpg",},
  { id: 8, src: "https://res.cloudinary.com/hnhbf8yt/video/upload/v.../pov-2.mp4", poster: "https://res.cloudinary.com/hnhbf8yt/image/upload/v1784721409/15_ht1pgl.jpg",},
  
];

export default function PovsPage() {
  return (
    <>
      <section className="bg-brnch-espresso px-6 pb-20 pt-40 text-brnch-cream md:px-10 md:pt-48">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-brnch-orange">POVs</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              What it{" "}
              <span className="font-accent text-brnch-orange">actually</span>{" "}
              felt like.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-sm text-brnch-cream/70 md:text-base">
              Clips and highlights from the dance floor to the DJ booth, shot by our guests, not a crew.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brnch-paper px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {povs.map((pov, i) => (
            <Reveal key={pov.id} delay={(i % 4) * 0.08}>
              <PovCard src={pov.src} poster={pov.poster} caption={pov.caption} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
