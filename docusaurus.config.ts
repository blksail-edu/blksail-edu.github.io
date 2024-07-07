import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { themes } from "prism-react-renderer";
const lightTheme = themes.github;
const darkTheme = themes.dracula;
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Autonomous Underwater Vehicle Challenge",
  tagline: "MIT Beaver Works Summer Institute - BLKSAIL",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://blksail-edu.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "blksail-edu", // Usually your GitHub org/user name.
  projectName: "blksail-edu.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],
  /* Your site config here */

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/blksail-edu/blksail-edu.github.io/tree/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          lastVersion: "current",
          versions: {
            current: {
              label: "2024",
              path: "",
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/blksail-edu/blksail-edu.github.io/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    /* Your theme config here */
    image: "img/AUVC.MIT.BWSI.001.png",
    navbar: {
      title: "AUVC",
      logo: {
        alt: "BWSI AUVC Logo",
        src: "img/auvc_icon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Course",
        },
        { to: "/blog", label: "Announcements", position: "left" },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [],
          dropdownActiveClassDisabled: true,
        },
        {
          href: "https://github.com/blksail-edu",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "AUV Challenge",
          items: [
            {
              label: "Course",
              to: "/docs/intro",
            },
            {
              label: "Announcements",
              to: "/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/64zGV9EY93",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/blksail-edu",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/blksail",
            },
            {
              label: "blkSAIL",
              href: "https://www.blksail.ai/",
            },
            {
              label: "MIT BWSI",
              href: "https://beaverworks.ll.mit.edu/CMS/bw/bwsi",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BLKSAIL, Inc.`,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 320, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

export default config;
