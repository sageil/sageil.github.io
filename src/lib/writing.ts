import { getCollection } from 'astro:content';

export async function getEssays() {
  const essays = await getCollection('writing');
  return essays.sort((a, b) => a.data.order - b.data.order);
}

export function readingMinutes(markdown: string): number {
  const words = markdown.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
