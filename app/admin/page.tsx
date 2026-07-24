"use client";

import { useState, FormEvent } from "react";

type Subscriber = { email: string; subscribedAt: string };

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  async function handleUnlock(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/admin/subscribers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Invalid token.");
      }

      setSubscribers(data.subscribers);
      setUnlocked(true);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  async function handleExport() {
    const res = await fetch("/api/admin/subscribers?format=csv", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!unlocked) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-brnch-paper px-6">
        <form
          onSubmit={handleUnlock}
          className="w-full max-w-sm rounded-2xl bg-brnch-espresso/[0.04] p-8"
        >
          <p className="eyebrow text-brnch-orange">Admin</p>
          <h1 className="mt-3 font-display text-2xl font-bold text-brnch-espresso">
            Enter admin token
          </h1>

          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Admin token"
            required
            className="mt-6 w-full rounded-xl border border-brnch-espresso/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-brnch-orange"
          />

          {status === "error" && (
            <p className="mt-3 text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full rounded-full bg-brnch-orange px-6 py-3 eyebrow text-brnch-cream disabled:opacity-50"
          >
            {status === "loading" ? "Checking…" : "Unlock"}
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-brnch-paper px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow text-brnch-orange">Admin</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-brnch-espresso">
              Subscribers ({subscribers.length})
            </h1>
          </div>
          <button
            onClick={handleExport}
            className="rounded-full bg-brnch-orange px-6 py-3 eyebrow text-brnch-cream"
          >
            Export CSV
          </button>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-brnch-espresso/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-brnch-espresso/[0.05]">
              <tr>
                <th className="px-5 py-3 eyebrow text-brnch-espresso/60">
                  Email
                </th>
                <th className="px-5 py-3 eyebrow text-brnch-espresso/60">
                  Subscribed
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brnch-espresso/10">
              {subscribers.length === 0 && (
                <tr>
                  <td
                    colSpan={2}
                    className="px-5 py-6 text-center text-brnch-espresso/50"
                  >
                    No subscribers yet.
                  </td>
                </tr>
              )}
              {subscribers.map((s) => (
                <tr key={s.email}>
                  <td className="px-5 py-3 text-brnch-espresso">{s.email}</td>
                  <td className="px-5 py-3 text-brnch-espresso/60">
                    {new Date(s.subscribedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}