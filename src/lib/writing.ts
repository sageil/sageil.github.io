import { getCollection } from 'astro:content';

export async function getEssays() {
  const essays = await getCollection('writing');
  return essays.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function readingMinutes(markdown: string): number {
  const words = markdown.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
