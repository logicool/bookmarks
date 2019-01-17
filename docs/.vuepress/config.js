const utils = require("./utils")

module.exports = {
  title: "收藏夹",
  description: "我的收藏夹",
  base: "/bookmarks/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    nav: [{
        text: "首页",
        link: "/"
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
    config: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-include"))
    }
  }
}