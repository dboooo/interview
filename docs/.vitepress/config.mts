import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端面试指南",
  description: "前端面试题目类型收集",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '面试题目', link: '/Vue/01.md' },
    ],

    sidebar: [
      {
        text: 'Vue相关',
        items: [
          { text: '说说你对vue的理解', link: '/Vue/01.md' },
        ]
      },
      {
        text: 'React相关',
        items: [
          { text: '说说你对React的理解', link: '/React/01.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dboooo' }
    ]
  }
})
