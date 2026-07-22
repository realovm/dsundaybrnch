"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { socials } from "@/lib/content";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("done");
      setMessage(data.message);
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <footer className="bg-brnch-espresso-deep px-6 pb-10 pt-20 text-brnch-cream md:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            Never miss a <span className="font-accent text-brnch-orange">Sunday</span>.
          </h3>
          <p className="mt-3 max-w-md text-sm text-brnch-cream/70">
            Subscribe for first access to reservations, dress code reveals, and
            lineup announcements — every 1st and 3rd Sunday.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-full border border-brnch-cream/30 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-brnch-cream/40 focus:border-brnch-orange"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-full bg-brnch-orange px-6 py-3 eyebrow text-brnch-cream transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
          {message && (
            <p
              className={`mt-3 text-xs ${
                status === "error" ? "text-red-400" : "text-brnch-orange"
              }`}
            >
              {message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8 md:justify-items-end">
          <div>
            <p className="eyebrow text-brnch-cream/50">Follow</p>
            <ul className="mt-4 space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-brnch-cream/80 transition-colors hover:text-brnch-orange"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-brnch-cream/50">Legal</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-brnch-cream/80 hover:text-brnch-orange">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-brnch-cream/80 hover:text-brnch-orange">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-brnch-cream/10 pt-6 text-xs text-brnch-cream/40 md:flex-row">
        <p>© {new Date().getFullYear()} D SUNDAY BRNCH. All rights reserved.</p>
        <p>Lagos, Nigeria</p>
      </div>
    </footer>
  );
}
