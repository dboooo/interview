import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端面试指南",
  description: "前端面试题目类型收集",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '面试题目', link: '/interviews/Vue/01.md' },
      { text: '知识', link: '/knowledge/webServer/01.md' },
      { text: '训练营', link: '/Training/index.md' },
    ],
    sidebar: {
      "/interviews": [
        {
          text: 'Vue相关',
          items: [
            { text: '说说你对vue的理解', link: '/interviews/Vue/01.md' },
            { text: 'Vue2和Vue3的区别', link: '/interviews/Vue/05.md' },
            { text: 'Vue指令', link: '/interviews/Vue/02.md' },
            { text: 'Vue插件', link: '/interviews/Vue/03.md' },
            { text: 'Vue生命周期', link: '/interviews/Vue/04.md' },
            { text: 'Vue如何做权限管理', link: '/interviews/Vue/06.md' },
            { text: 'Vue组件间通信', link: '/interviews/Vue/07.md' },
            { text: '对nextTick的理解', link: '/interviews/Vue/08.md' },
            { text: 'Vue的slot的理解', link: '/interviews/Vue/09.md' },
            { text: '对keep-alive的理解', link: '/interviews/Vue/10.md' },
            { text: '对keep-Vue的diff算法', link: '/interviews/Vue/11.md' },
            { text: 'Vue的SSR', link: '/interviews/Vue/12.md' },
          ]
        },
        {
          text: 'React相关',
          items: [
            { text: '说说你对React的理解', link: '/interviews/React/01.md' },
            { text: 'React生命周期', link: '/interviews/React/02.md' }
          ]
        },
        {
          text: 'Javascript',
          items: [
            { text: '数组常用方法', link: '/interviews/Javascript/01.md' },
            { text: '字符串常用方法', link: '/interviews/Javascript/02.md' },
            { text: '防抖和节流', link: '/interviews/Javascript/03.md' },
            { text: '浅拷贝和深拷贝的区别', link: '/interviews/Javascript/04.md' },
            { text: 'js作用域链', link: '/interviews/Javascript/05.md' },
            { text: 'this指向问题', link: '/interviews/Javascript/06.md' },
            { text: 'JS原型, 原型链, 继承,', link: '/interviews/Javascript/07.md' },
            { text: 'Promise', link: '/interviews/Javascript/08.md' },
            { text: '事件循环', link: '/interviews/Javascript/09.md' },
            { text: 'Promise', link: '/interviews/Javascript/10.md' },
          ]
        },
        {
          text: 'CSS相关',
          items: [
            { text: '水平垂直居中', link: '/interviews/CSS/01.md' }
          ]
        },
        {
          text: '浏览器相关',
          items: [
            { text: '浏览器解析原理', link: '/interviews/Browser/01.md' },
            { text: '事件委托', link: '/interviews/Browser/02.md' },
            { text: '跨域处理', link: '/interviews/Browser/03.md' },
            { text: '浏览器从输入网址到页面展示的过程', link: '/interviews/Browser/04.md' },
            { text: '前端本地存储方式', link: '/interviews/Browser/05.md' },
          ]
        },
        {
          text: '网络和安全',
          items: [
            { text: '常见网络攻击方式', link: '/interviews/Network/01.md' },
            { text: 'HTTP与HTTPS', link: '/interviews/Network/02.md' },
            { text: 'http的安全策略', link: '/interviews/Network/03.md' },
            { text: '在使用https协议的网站里能否使用http请求', link: '/interviews/Network/04.md' },
            { text: 'OSI 七层模型', link: '/interviews/Network/06.md' },
            { text: 'TCP/IP 协议 ', link: '/interviews/Network/05.md' },
          ]
        },
        {
          text: '具体项目问题',
          items: [
            { text: '前端如何接受后端发来的文件流并下载', link: '/interviews/Detail/01.md' },
            { text: '如何减少白屏的时间', link: '/interviews/Detail/02.md' },
            { text: '如何实现markdown和html文件互相转换', link: '/interviews/Detail/03.md' }

          ]
        },
        {
          text: 'Typescript',
          items: [
            { text: 'Type和interface的区别', link: '/interviews/Typescript/01.md' }
          ]
        },
        {
          text: '前端算法',
          items: [
            { text: '算法', link: '/interviews/Algorithm/01.md' }
          ]
        },
        {
          text: '设计模式',
          items: [
            { text: 'Vue2和Vue3的app注册方式体现了哪种设计模式(单例模式)', link: '/interviews/DesignModel/01.md' }
          ]
        }

      ],
      "/knowledge": [
        {
          text: 'web',
          items: [
            { text: 'web服务器', link: '/knowledge/webServer/01.md' }
          ]
        },
        {
          text: 'node.js',
          items: [
            { text: 'node模块', link: '/knowledge/node/01.md' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dboooo' }
    ]
  }
})
