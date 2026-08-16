// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ふんわり消灯ギミック',
  tagline: 'VRChatワールドの照明を、点灯から消灯までなめらかに',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://usuakari-koubou.github.io',
  baseUrl: '/funwari-lightblend-docs/',

  organizationName: 'usuakari-koubou',
  projectName: 'funwari-lightblend-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/compare_on_off.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ふんわり消灯ギミック',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'ドキュメント',
          },
          {
            href: 'https://usuakari.booth.pm/',
            label: 'BOOTH',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {label: 'はじめに', to: '/docs/'},
              {label: 'クイックスタート', to: '/docs/quickstart'},
              {label: '利用規約', to: '/docs/license'},
            ],
          },
          {
            title: 'リンク',
            items: [
              {label: 'BOOTH', href: 'https://usuakari.booth.pm/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} うすあかり工房`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
