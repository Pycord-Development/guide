// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pycord Guide',
  tagline: 'Imagine a place... where you can learn how to add more features to your Pycord bot',
  url: 'localhost',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Pycord-Development', // Usually your GitHub org/user name.
  projectName: 'Guide', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Pycord-Development/guide/tree/master/guide',
        },
        theme: {
          customCss: require.resolve('./src/scss/main.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pycord Guide',
        logo: {
          alt: 'Pycord Logo SVG',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guide',
            items: [
              {
                label: 'Index',
                to: '/guide/index.md',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/pycord',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/pycord',
              },
              {
                label: 'Github',
                href: 'https://github.com/Pycord-Development',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Twitter',
                to: 'https://twitter.com/PycordDev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-present Pycord Development, Built with ❤️ and Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
