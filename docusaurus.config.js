// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Pycord Guide',
    tagline: 'Imagine a place... where you can learn how to add more features to your Pycord bot',
    url: 'https://pycord.dev',
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
                    routeBasePath: '/guide', // we can edit this!
                },
                theme: {
                    customCss: require.resolve('./src/scss/main.scss'),
                },
            }),
        ],
    ],
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en"]
            }
        ]
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
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
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/pycord',
                        },
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/pycord',
                        },
                        
                        
                    ],
                },
                
                {
                    title: 'Pycord',
                    items: [
                        {
                            label: 'Documentation',
                            href: 'https://docs.pycord.dev',
                        },
                        {
                            label: 'Github',
                            href: 'https://github.com/Pycord-Development',
                        },
                        {
                            label: 'Website',
                            href: 'https://pycord.dev',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/PycordDev',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${ new Date().getFullYear() } Pycord Development`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }
};

module.exports = config;