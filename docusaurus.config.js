// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Red Scripts',
  tagline: 'Realistic scripts for your awesome server',
  url: 'https://docs.mrfreex.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://avatars.githubusercontent.com/u/86741222?s=200&v=4',
  organizationName: 'FreexDevelopment', // Usually your GitHub org/user name.
  projectName: 'docs.mrfreex.net', // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
        title: 'Red Scripts',
        logo: {
          alt: 'Logo',
          src: 'https://avatars.githubusercontent.com/u/86741222?s=200&v=4',
        },
        items: [
          {
            type: 'doc',
            docId: 'Documentation',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/FreexDevelopment',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/Documentation',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'MrFreex',
                href: 'https://github.com/MrFreex',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/2rYAP5naHy',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Red Scripts (MrFreex#2443)`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua"]
      },
    }),
};

module.exports = config;
