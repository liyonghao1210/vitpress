import { defineConfig } from 'vitepress'
// import { SearchPlugin } from '@vitepress/plugin-search'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // vite: {
  //   plugins: [
  //     SearchPlugin()
  //   ]
  // },
  title: "liyonghao的在线文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      {
        text: '有下拉', items: [
          { text: 'Vue 2', link: '/vue2' },
          { text: 'Vue 3', link: '/vue3' }
        ]
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'gitlab', link: 'https://gitlab.com/liyonghao1210' },
      { icon: 'gitee', link: 'https://gitee.com/liyonghao1210' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Evan You'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
