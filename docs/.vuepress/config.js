const utils = require("./utils")

module.exports = {
  title: "收藏夹",
  description: "我的收藏夹",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  plugins: [
    'demo-block'
  ],
  themeConfig: {
    nav: [{
        text: "首页",
        link: "/"
      },
      {
        text: "读书",
        link: "/books/"
      },
      {
        text: "库",
        link: "/repository/"
      },
      {
        text: "好文",
        link: "/article/"
      },
      {
        text: "工具",
        link: "/tool/"
      },
      {
        text: "面试",
        link: "/interview/"
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: 'Last Updated',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public"
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-include"))
    }
  }
}