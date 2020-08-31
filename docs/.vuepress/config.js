module.exports = {
  base: '/my-vue-preset/',
  serviceWorker: true,
  title: 'my-vue-preset 说明文档',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }]
  ],
  themeConfig: {
    sidebar: 'auto',
    repo: 'https://github.com/lawrence998/my-vue-preset',
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: true
    }
  }
}
