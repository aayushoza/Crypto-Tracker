// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crypto Dashboard',
  tagline: 'Real-time Cryptocurrency Price Tracking',
  url: 'https://your-crypto-dashboard.com',
  baseUrl: '/',
  organizationName: 'aayushoza ',
  projectName: 'crypto-dashboard',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/yourusername/crypto-dashboard/tree/main/docs',
        },
        blog: false, // Removing blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig: ({
    image: 'img/project-social-card.jpg',
    navbar: {
      title: 'Crypto Dashboard',
      logo: {
        alt: 'Crypto Dashboard Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
