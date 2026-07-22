"use client";

import { motion } from "framer-motion";

export default function SunSeal({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Explore D SUNDAY BRNCH"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="eyebrow relative flex items-center justify-center rounded-full bg-brnch-orange px-12 py-5 text-brnch-cream shadow-[0_0_0_1px_rgba(239,227,196,0.35)] transition-shadow hover:shadow-[0_0_0_1px_rgba(239,227,196,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brnch-cream"
    >
      Explore
    </motion.button>
  );
}