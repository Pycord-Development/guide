/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "index",
    "installation",
    {
      type: "category",
      label: "Getting Started",
      items: ["Getting-Started/creating-your-first-bot"],
    },
    {
      type: "category",
      label: "Interactions",
      link: { type: "doc", id: "Interactions/index" },
      items: [
        "Interactions/buttons",
        "Interactions/dropdowns",
        "Interactions/slash-commands",
      ],
    },
    {
      type: "category",
      label: "Extensions",
      items: ["Extensions/Commands", "Extensions/Pages"],
    },
    {
      type: "category",
      label: "Voice",
      link: { type: "doc", id: "Voice/index" },
      items: ["Voice/receiving"],
    },
    {
      type: "category",
      label: "Topics",
      link: { type: "generated-index" },
      items: [
        "Topics/intents",
        "Topics/subclassing-bots",
        "Topics/sharding",
        "Topics/git",
        "Topics/community-resources",
        "Topics/contributing",
      ],
      customProps: {
        cards: [
          {
            title: "Intents",
            description: "Learn all about Discord intents",
            url: "/topics/intents",
          }
        ]
      }
    },
  ],
};

module.exports = sidebars;
