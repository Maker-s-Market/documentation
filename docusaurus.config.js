// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Maker\'s Market Documentation',
  tagline: 'Documentation for Maker\'s Market',
  favicon: 'img/ES-Logo.png',

  // Set the production url of your site here
  url: 'https://maker-s-market.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'maker-s-market', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Maker\'s Market',
        logo: {
          alt: 'Maker\'s Market Logo',
          src: 'img/ES-Logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            label: 'Maker\'s Market',
            to: 'https://makers-market.pt',
            position: 'right'
          },
          {
            to: 'https://github.com/Maker-s-Market/',
            label: 'GitHub',
            position: 'right',
          },

          {
            to: 'https://es-proj.atlassian.net/jira/software/projects/KAN/boards/1',
            label: 'Jira',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'Channels',
            items: [
              {
                label: 'Maker\'s Market',
                href: 'https://makers-market.pt',
              },
              {
                label: 'Jira',
                href: 'https://es-proj.atlassian.net/jira/software/projects/KAN/boards/1',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Maker-s-Market/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Maker's Market, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
