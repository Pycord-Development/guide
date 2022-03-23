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
      type: "category",
      label: "Getting Started",
      items: [
        "Getting-Started/creating-your-first-bot",
        "Getting-Started/more-features",
        "Getting-Started/hosting-your-bot",
        "Getting-Started/rules-and-common-practices",
      ],
    },
    {
      type: "category",
      label: "Interactions",
      link: { type: "doc", id: "Interactions/index" },
      items: [
        {
          type: "category",
          label: "Application Commands",
          items: [
            "Interactions/Application-Commands/slash-commands",
            "Interactions/Application-Commands/context-menus",
			      "Interactions/Application-Commands/localizations",
          ]
        },
        {
          type: "category",
          label: "Message Components",
          items: [
            "Interactions/Message-Components/buttons",
            "Interactions/Message-Components/dropdowns",
            "Interactions/Message-Components/modal-dialogs",
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Extensions",
      items: [
        {
          type: "category",
          label: "Commands",
          items: [
            "Extensions/Commands/prefixed-commands",
            "Extensions/Commands/groups",
            "Extensions/Commands/cogs",
            "Extensions/Commands/help-command",
          ]
        },
       {
        type: "category",
        label: "Tasks",
        items: [
           "Extensions/Tasks/tasks"
        ]
       },
       {
         type: "category",
         label: "Pages",
         items: [
           "Extensions/Pages/paginator-basics",
           "Extensions/Pages/paginator-faq"
         ]
       }
      ],
    },
    {
      type: "category",
      label: "Voice",
      link: { type: "doc", id: "Voice/index" },
      items: ["Voice/receiving"],
    },
    {
      type: "category",
      label: "Popular Topics",
      link: { type: "generated-index" },
      items: [
        "Popular-Topics/threads",
        "Popular-Topics/intents",
        "Popular-Topics/subclassing-bots",
        "Popular-Topics/sharding",
      ],
      customProps: {
        cards: [
          {
            title: "Intents",
            description: "Learn all about Discord intents",
            url: "/popular-topics/intents",
          }
        ]
      }
    },
    {
      type: "category",
      label: "More",
      link: { type: "generated-index" },
      items: [
        "More/git",
        "More/community-resources",
        "More/contributing",
      ]
    },
  ],
};

module.exports = sidebars;
