module.exports = {
  title: "Open LDR web API",
  tagline:
    "Bem vindo a documentação da Web API do Repositório de dados Laboratoriais (Open LDR). Este projecto é mantido pelo Ministério da Saúde e consiste na descrição do processo consumo de relatórios dos dados armazenados no Open LDR.",
  url: "https://openldr.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "openldr", // Usually your GitHub org/user name.
  projectName: "api", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "LDR web API",
      logo: {
        alt: "LDR web API",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/openldr/api",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Open LDR",
              to: "docs/openldr/",
            },
            {
              label: "Open LDR API",
              to: "docs/openldr-api/",
            },
          ],
        },
        {
          title: "Links Uteis",
          items: [
            {
              label: "Documentação do Open LDR Data",
              href: "http://openldr.org",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/openldr/api",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenLDR API, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
