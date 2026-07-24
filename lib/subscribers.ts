import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export type Subscriber = { email: string; subscribedAt: string };

const KEY = "newsletter:subscribers";

export async function listSubscribers(): Promise<Subscriber[]> {
  const subscribers = await redis.get<Subscriber[]>(KEY);
  return subscribers ?? [];
}

export async function addSubscriber(email: string): Promise<{ added: boolean }> {
  const subscribers = await listSubscribers();
  const normalized = email.trim().toLowerCase();

  if (subscribers.some((s) => s.email === normalized)) {
    return { added: false };
  }

  subscribers.push({ email: normalized, subscribedAt: new Date().toISOString() });
  await redis.set(KEY, subscribers);
  return { added: true };
}

export function subscribersToCsv(subscribers: Subscriber[]): string {
  const header = "email,subscribedAt";
  const rows = subscribers.map((s) => `${s.email},${s.subscribedAt}`);
  return [header, ...rows].join("\n");
}