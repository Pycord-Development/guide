// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

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
    plugins: ['docusaurus-plugin-sass'],
    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Pycord-Development/guide/tree/master/guide',
                },
                theme: {
                    customCss: require.resolve('./src/scss/main.scss'),
                },
            }),
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true
        },
        navbar: {
            title: 'Pycord Guide',
            items: [
                {
                    type: 'doc',
                    docId: 'index',
                    position: 'left',
                    label: 'Guide'
                }
            ]
        },
        footer: {
            style: 'dark',
            /*links: [
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
            ],*/
            copyright: `Copyright © ${ new Date().getFullYear() } Pycord Development`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }
};

module.exports = config;