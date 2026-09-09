import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '个人技术介绍',
  description: 'perwebsite — 个人技术介绍、项目作品与博客笔记',
  base: '/perwebsite/',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'auto',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3451b2' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
      { text: '项目', link: '/projects/' },
      { text: '博客', link: '/posts/' },
      {
        text: 'GitHub',
        link: 'https://github.com/USERNAME/perwebsite',
      },
    ],

    sidebar: {
      '/': [
        {
          text: '首页',
          items: [
            { text: '欢迎', link: '/' },
          ],
        },
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '自我介绍', link: '/about/' },
          ],
        },
      ],
      '/projects/': [
        {
          text: '项目',
          items: [
            { text: '项目总览', link: '/projects/' },
          ],
        },
      ],
      '/posts/': [
        {
          text: '博客',
          items: [
            { text: '所有文章', link: '/posts/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/USERNAME/perwebsite' },
      { icon: 'gmail', link: 'mailto:hello@example.com' },
    ],

    // 本地搜索暂时关闭：MiniSearch 对 CJK 切分效果差，
    // VitePress 默认主题没有 provider: 'off' 选项；最干净的“禁用”是
    // 不配置 search（默认 local），再让 todo 10 决定是否接入 Algolia
    // 或在主题 CSS 里隐藏 .VPNavBarSearch。

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    footer: {
      message: '基于 MIT 协议发布，欢迎自由使用与转载。',
      copyright: `Copyright © ${new Date().getFullYear()} perwebsite contributors`,
    },

    editLink: {
      pattern: 'https://github.com/USERNAME/perwebsite/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdatedText: '最后更新于',
  },
})
