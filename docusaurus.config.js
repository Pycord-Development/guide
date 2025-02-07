// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require("prism-react-renderer").themes.vsLight;
// @ts-ignore
const darkCodeTheme = require("prism-react-renderer").themes.vsDark;

const DefaultLocale = 'en';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pycord Guide",
  tagline:
    "Imagine a place where you can learn how to create a Discord Bot",
  url: "https://guide.pycord.dev",
  trailingSlash: false,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Pycord-Development", // Usually your GitHub org/user name.
  projectName: "guide", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      {
        docs: {
          // @ts-ignore
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            // Link to Crowdin for French docs
            if (locale !== DefaultLocale) {
              return `https://translations.pycord.dev/guide/${locale}`;
            }
            // Link to GitHub for English docs
            return `https://github.com/Pycord-Development/guide/edit/main/${versionDocsDirPath}/${docPath}`;
          },
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
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ja', 'fr', 'it', 'hi', 'ko', 'pt-BR', 'es-ES', 'zh-CN', 'ru'],
  },
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
        {
          type: 'localeDropdown',
          position: 'right',
        },
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
