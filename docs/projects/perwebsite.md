---
title: perwebsite
---

# perwebsite

## 简介

本仓库是 `perwebsite` 个人站点的源码。基于 [VitePress](https://vitepress.dev/) 构建，纯 Markdown 写作，无运行时数据库，构建产物为静态 HTML / CSS / JS，可托管在 GitHub Pages、Netlify、Vercel 等任意静态平台。

站点默认语言为中文（`zh-CN`），支持明暗主题自动切换，所有页面统一挂在仓库名同名的子路径下（`https://USERNAME.github.io/perwebsite/`），方便在 GitHub Pages 上零配置部署。

## 技术栈

- **VitePress `^1.6.4`** — 静态站点生成器，提供 Markdown 渲染、主题、导航与构建管线
- **Vue 3** — VitePress 内置运行时，仅用于主题插槽与自定义组件扩展（本项目未自定义组件）
- **TypeScript** — 配置文件 `docs/.vitepress/config.mts` 使用 TS ESM，配合 `defineConfig` 享受类型提示
- **GitHub Actions** — CI/CD，推送到 `main` 后自动构建并发布到 GitHub Pages

辅助约定：

- `.nvmrc` 锁定 Node `24`，CI 与本地保持一致
- `.editorconfig` 强制 LF + UTF-8 + 2 空格缩进
- `.gitattributes` 给常见文本格式显式声明 `text eol=lf`，避免跨平台 diff 噪音

## 亮点

- **零运行时依赖**：除了 `vitepress` 一个 devDependency，没有引入任何第三方包，CI 缓存命中率高、镜像构建快。
- **目录即路由**：所有页面放在 `docs/` 下，文件名直接决定 URL，`docs/projects/foo.md` 自动渲染为 `/projects/foo`，无需手写路由表。
- **本地搜索可关闭**：通过不配置 `themeConfig.search` 让本地搜索索引留空，再决定是否走 Algolia 或 CSS 隐藏。
- **构建产物可审计**：输出物全部落在 `docs/.vitepress/dist/`，便于在提交前 `npm run docs:preview` 做最后的人工验收。
- **CI 与部署解耦**：构建脚本与发布脚本相互独立，调试构建问题时可在本地完全复现 CI 行为。

## 链接

- GitHub: https://github.com/USERNAME/perwebsite
- 演示: <占位 — 待部署到 `https://USERNAME.github.io/perwebsite/` 后回填>
- 文档: <占位 — 当前以本仓库 README 作为唯一文档源；后续可拆分独立文档站点>