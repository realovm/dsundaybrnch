import { promises as fs } from "fs";
import path from "path";

/**
 * Newsletter subscriber storage.
 *
 * Ships as a JSON file on disk so the feature works out of the box with
 * zero setup. Swap the three functions below for calls to Postgres,
 * Supabase, etc. — nothing outside this file needs to change.
 */

export type Subscriber = {
  email: string;
  subscribedAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "subscribers.json");

async function ensureStore(): Promise<Subscriber[]> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Subscriber[];
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
    return [];
  }
}

export async function listSubscribers(): Promise<Subscriber[]> {
  return ensureStore();
}

export async function addSubscriber(email: string): Promise<{ added: boolean }> {
  const subscribers = await ensureStore();
  const normalized = email.trim().toLowerCase();

  if (subscribers.some((s) => s.email === normalized)) {
    return { added: false };
  }

  subscribers.push({ email: normalized, subscribedAt: new Date().toISOString() });
  await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2), "utf-8");
  return { added: true };
}

export function subscribersToCsv(subscribers: Subscriber[]): string {
  const header = "email,subscribedAt";
  const rows = subscribers.map((s) => `${s.email},${s.subscribedAt}`);
  return [header, ...rows].join("\n");
}
