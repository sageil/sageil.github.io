import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getEssays } from '../lib/writing';

export async function GET(context: APIContext) {
  const essays = await getEssays();
  return rss({
    title: 'Sammy Ageil',
    description: 'Notes on engineering leadership, platform systems, and building software with AI.',
    site: context.site!,
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.description,
      pubDate: essay.data.date,
      link: `/writing/${essay.id}/`,
    })),
  });
}
