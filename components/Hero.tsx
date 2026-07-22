"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SunSeal from "./SunSeal";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.set(".hero-video", { scale: 1.15 })
        .to(".hero-video", { scale: 1, duration: 2.4, ease: "power2.out" }, 0)
        .from(
          ".hero-eyebrow",
          { opacity: 0, y: 16, duration: 0.8 },
          0.4
        )
        .from(
          ".hero-line",
          { opacity: 0, yPercent: 110, duration: 1, stagger: 0.12 },
          0.55
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 16, duration: 0.9 },
          "-=0.5"
        )
        .from(
          ".hero-seal",
          { opacity: 0, scale: 0.7, duration: 0.9, ease: "back.out(1.6)" },
          "-=0.6"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  function scrollToNext() {
    const next = document.getElementById("brand-intro");
    next?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      ref={rootRef}
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-brnch-espresso-deep"
    >
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
      <source
        src="https://res.cloudinary.com/hnhbf8yt/video/upload/v1784720068/IMG_5994_kmxxpj.mp4"
        type="video/mp4"/>
</video>

      <div className="absolute inset-0 bg-gradient-to-b from-brnch-espresso-deep/70 via-brnch-espresso-deep/40 to-brnch-espresso-deep/85" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-brnch-cream">
        
        <h1 className="max-w-4xl font-display text-[13vw] font-bold uppercase leading-[0.92] tracking-tight md:text-[6.2vw]">
          <span className="hero-line block overflow-hidden">
            <span className="block">After Church</span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span className="font-accent block lowercase text-brnch-orange">
              Na
            </span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span className="block"> Brunch</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-md text-sm text-brnch-cream/75 md:text-base">
          D SUNDAY BRNCH is Benin&rsquo;s recurring golden-hour experience where
          brunch tables become a dance floor, every 1st and 3rd Sunday.
        </p>

        <div className="hero-seal mt-12">
          <SunSeal onClick={scrollToNext} />
        </div>
      </div>
    </section>
  );
}
