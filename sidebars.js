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
    {
      type: 'category',
      label: 'Getting Started',
      items: ["Getting Started/installation", "Getting Started/creating-your-first-bot"],
    },
    {
      type: 'category',
      label: "Interactions",
      items: ["Interactions/buttons", "Interactions/slash-commands"]
    },
    {
      type: 'category',
      label: "Extensions",
      items: [
        'Extensions/Commands',
        'Extensions/Pages'
      ]
    },
    {
      type: 'category',
      label: "Voice",
      items: ["Voice/index", "Voice/receiving"]
    },
    {
      type: 'category',
      label: "Topics",
      items: ["Topics/community-resources", "Topics/git","Topics/contributing"]
    }
  ]
};

module.exports = sidebars;
