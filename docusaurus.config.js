// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pycord Guide",
  tagline:
    "Imagine a place... where you can learn how to add more features to your Pycord bot",
  url: "https://pycord.dev",
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
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/Pycord-Development/guide/tree/master/guide",
          routeBasePath: "/guide",
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
        },
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
      },
    ],
  ],

  themeConfig: {
    autoCollapseSidebarCategories: false,
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Pycord Guide",
      items: [
        {
          type: "doc",
          docId: "index",
          position: "left",
          label: "Guide",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © Pycord Development, All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
