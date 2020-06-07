module.exports = {
    title: 'Triton Docs',
    description: 'Translate your server',
    themeConfig: {
        // logo: '/vuepress-logo.png',
        lastUpdated: 'Last updated',
        repo: 'https://github.com/bencodezen/vuepress-starter-kit',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Recommend a change',
        nav: [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Contact',
            items: [
              {
                text: 'Discord',
                link: 'https://discord.gg/VvE9C2N'
              }
            ]
          },
        ],
        plugins: ['@vuepress/active-header-links']
      },
    serviceWorker: true
}