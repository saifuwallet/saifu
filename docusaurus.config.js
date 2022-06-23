// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Saifu Docs',
  tagline: 'Docs for the extensible Solana Wallet',
  url: 'https://docs.saifu.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'saifuwallet', // Usually your GitHub org/user name.
  projectName: 'saifu', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/saifuwallet/saifu/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Saifu Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Getting help',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'plugins/Plugin Overview',
            position: 'left',
            label: 'Plugins',
          },
          {
            href: 'https://github.com/saifuwallet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Saifu',
            items: [
              {
                label: 'Brave / Edge / Chrome',
                to: 'https://saifuwallet.com',
              },
              {
                label: 'Safari',
                to: 'https://saifuwallet.com/blog',
              },
              {
                label: 'Firefox',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },

          {
            title: 'Docs',
            items: [
              {
                label: 'Plugins',
                to: '/plugins',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://saifuwallet.com',
              },
              {
                label: 'Blog',
                to: 'https://saifuwallet.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/saifuwallet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Saifu Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
