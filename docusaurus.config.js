// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pycord Guide",
  tagline:
    "Imagine a place where you can learn how to create a Discord Bot",
  url: "https://guide.pycord.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Pycord-Development", // Usually your GitHub org/user name.
  projectName: "Guide", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      {
        docs: {
          editUrl:
            "https://github.com/Pycord-Development/guide/tree/main",
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
        },
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,  // TODO: Support light mode (I know, I know. Eww. I'm sorry.)
    },
    navbar: {
      title: "Pycord Guide",
      hideOnScroll: true,
      items: [
        {
          label: "Home",
          position: "left",
          href: "https://pycord.dev/",
        },
        {
          label: "Docs",
          position: "left",
          href: "https://docs.pycord.dev",
        },
        {
          label: "GitHub",
          position: "left",
          href: "https://pycord.dev/github",
        },
        // TODO: Post v2.0: Version the docs
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        // },
        // TODO: Locales
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          label: "Source",
          // We should use href instead of to, but it creates a strange styling issue
          to: 'https://github.com/Pycord-Development/guide',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Pycord Development, All rights reserved.`,
    },
    prism: {
      defaultLanguage: "python",
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: "B3W8ZM9HW4",
      apiKey: "1bf03e7f2ea8fef3ab0c70f50c65e063",  // Public key
      indexName: "pycord",
    }
  },
};

module.exports = config;
