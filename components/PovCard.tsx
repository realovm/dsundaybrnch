"use client";

export default function PovCard({
  src,
  poster,
  caption,
}: {
  src: string;
  poster: string;
  caption: string;
}) {
  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-brnch-espresso">
      <video
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => e.currentTarget.pause()}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brnch-espresso-deep/90 to-transparent p-4">
        <p className="text-xs text-brnch-cream/85">{caption}</p>
      </div>
    </div>
  );
}
