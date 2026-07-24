"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type GalleryImage = { src: string; alt: string; tall?: boolean };

const ITEMS_PER_PAGE = 8;

export default function MasonryGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(images.length / ITEMS_PER_PAGE));
  const start = page * ITEMS_PER_PAGE;
  const currentImages = images.slice(start, start + ITEMS_PER_PAGE);

  function goToPage(next: number) {
    setActive(null);
    setPage(next);
  }

  return (
    <>
      <div className="columns-2 gap-4 lg:columns-3">
        {currentImages.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setActive(i)}
            className={`mb-4 block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brnch-orange ${
              img.tall ? "aspect-[3/4]" : "aspect-[4/5]"
            } relative`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            className="rounded-full border border-brnch-espresso/20 px-6 py-3 eyebrow text-brnch-espresso transition-colors hover:border-brnch-orange hover:text-brnch-orange disabled:opacity-30 disabled:hover:border-brnch-espresso/20 disabled:hover:text-brnch-espresso"
          >
            Prev
          </button>
          <span className="eyebrow text-brnch-espresso/50">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages - 1}
            className="rounded-full border border-brnch-espresso/20 px-6 py-3 eyebrow text-brnch-espresso transition-colors hover:border-brnch-orange hover:text-brnch-orange disabled:opacity-30 disabled:hover:border-brnch-espresso/20 disabled:hover:text-brnch-espresso"
          >
            Next
          </button>
        </div>
      )}

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brnch-espresso-deep/95 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[85vh] w-full max-w-4xl"
            >
              <Image
                src={currentImages[active].src}
                alt={currentImages[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 font-display text-3xl text-brnch-cream"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}