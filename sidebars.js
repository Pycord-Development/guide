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
    "introduction",
    "installation",
    {
      type: "autogenerated",
      dirName: "Getting Started",
    },
    {
      type: "autogenerated",
      dirName: "Interactions",
    },
    {
      type: "autogenerated",
      dirName: "Extensions",
    },
    {
      type: "autogenerated",
      dirName: "Voice",
    },
    {
      type: "autogenerated",
      dirName: "Popular Topics",
    },
    {
      type: "autogenerated",
      dirName: "More",
    },
  ],
};

module.exports = sidebars;
