import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://sammyageil.com',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: 'Sammy Ageil',
      description:
        'Execution-minded engineering leadership, platform modernization, and production-grade AI.',
      customCss: [
        '@fontsource-variable/inter',
        '@fontsource-variable/newsreader',
        './src/styles/home.css',
        './src/styles/starlight.css',
      ],
      components: {
        Header: './src/components/SiteHeader.astro',
        Sidebar: './src/components/SectionNav.astro',
        Footer: './src/components/starlight/Footer.astro',
        PageFrame: './src/components/starlight/PageFrame.astro',
        TwoColumnContent: './src/components/starlight/TwoColumnContent.astro',
        PageSidebar: './src/components/starlight/PageSidebar.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
        ContentPanel: './src/components/starlight/ContentPanel.astro',
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/sageil' },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/sammy-ageil/',
        },
      ],
      sidebar: [
        { label: 'About', link: '/' },
        { label: 'Projects', link: '/projects/' },
        {
          label: 'Writing',
          items: [
            { label: 'Overview', link: '/writing/' },
            {
              label: 'AI is not extra headcount',
              link: '/writing/ai-is-not-extra-headcount/',
            },
            {
              label: 'The AI agents were working in parallel',
              link: '/writing/ai-agents-working-in-parallel/',
            },
            {
              label: 'It’s hard to learn a tool you think might replace you',
              link: '/writing/what-building-kodacode-taught-me-about-ai-adoption/',
            },
          ],
        },
      ],
      lastUpdated: false,
      pagination: false,
      editLink: {
        baseUrl: 'https://github.com/sageil/sageil.github.io/edit/main/',
      },
    }),
  ],
});
