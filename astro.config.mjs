import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sammyageil.com',
  server: {
    host: '127.0.0.1',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
