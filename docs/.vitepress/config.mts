import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端面试指南",
  description: "前端面试题目类型收集",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '面试题目', link: '/Vue/01.md' },
      { text: '训练营', link: '/Training/index.md' }
    ],

    sidebar: [
      {
        text: 'Vue相关',
        items: [
          { text: '说说你对vue的理解', link: '/Vue/01.md' },
          { text: 'Vue指令', link: '/Vue/02.md' },
          { text: 'Vue插件', link: '/Vue/03.md' },
          { text: 'Vue生命周期', link: '/Vue/04.md' },
          { text: 'Vue2和Vue3的区别', link: '/Vue/05.md' },
          {
            text: 'Vue如何做权限管理',
            link: '/Vue/06.md'
          }
        ]
      },
      {
        text: 'React相关',
        items: [
          { text: '说说你对React的理解', link: '/React/01.md' },
          { text: 'React生命周期', link: '/React/02.md' }
        ]
      },
      {
        text: '浏览器相关',
        items: [
          { text: '浏览器解析原理', link: '/Browser/01.md' },
          { text: '事件委托', link: '/Browser/02.md' }
        ]
      },
      {
        text: 'JS存储和网络基础知识',
        items: [
          { text: '前端本地存储方式', link: '/Store/01.md' }
        ],
      },
      {
        text: 'Javascript',
        items: [
          { text: '数组常用方法', link: '/Javascript/01.md' },
          { text: '字符串常用方法', link: '/Javascript/02.md' },
          { text: '防抖和节流', link: '/Javascript/03.md' },
          { text: '浅拷贝和深拷贝的区别', link: '/Javascript/04.md' },
          { text: 'js作用域链', link: '/Javascript/05.md' },
          { text: 'this指向问题', link: '/Javascript/06.md' },
          { text: 'JS原型, 原型链, 继承,', link: '/Javascript/07.md' },
          { text: 'JS的new操作', link: '/Javascript/08.md' }
        ]
      },
      {
        text: '网络',
        items: [
          { text: '常见网络攻击方式', link: '/Network/01.md' },
          {
            text: 'Https是如何保证安全的', link: '/Network/02.md'
          }
        ]
      },
      {
        text: '性能优化',
        items: [
          { text: '性能优化之LCP', link: '/Speed/01.md' }
        ]
      },
      {
        text: '前端算法',
        items: [
          { text: '算法', link: '/Algorithm/01.md' }
        ]
      },
      {
        text: '具体项目问题',
        items: [
          {
            text: '前端接受到后端发送的文件如何展示存储',
            link: '/Detail/01.md'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dboooo' }
    ]
  }
})
