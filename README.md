# perwebsite

基于 [VitePress](https://vitepress.dev/) 的个人站点源码仓库，部署到 GitHub Pages。

## 简介

本仓库是 `perwebsite` 个人站点的源码站点。VitePress 是一个基于 Vite 与 Vue 3 的静态站点生成器（SSG），文档使用 Markdown 编写，构建产物为纯静态 HTML/CSS/JS，可托管在 GitHub Pages、Netlify、Vercel 等任何静态托管平台。

主要特性：

- 使用 VitePress `^1.6.4`，按 `package.json` 的 `devDependencies` 锁定
- 站点根目录为 `docs/`，源文件全部放在该目录树下
- 站点配置位于 `docs/.vitepress/config.mts`（TypeScript ESM 格式）
- 中文（`zh-CN`）作为默认语言，支持明暗主题自动切换
- 通过 GitHub Actions 自动构建并发布到 `https://USERNAME.github.io/perwebsite/`

仓库结构（高层视图）：

```
perwebsite/
├── docs/                       # VitePress 站点源文件根目录
│   └── .vitepress/             # VitePress 配置与构建产物目录
├── .github/workflows/          # GitHub Actions 自动部署
├── package.json
├── README.md
├── .nvmrc
├── .editorconfig
├── .gitignore
└── .gitattributes
```

## 本地开发

环境要求：

- Node.js **24**（`.nvmrc` 已固定；如使用 nvm，运行 `nvm use` 即可切换）
- npm（随 Node 自带，无需额外安装）

启动开发服务器（带热更新）：

```bash
npm install              # 首次或依赖变更后执行
npm run docs:dev         # 启动 VitePress dev server
```

开发服务器默认监听 `http://localhost:5173/`（端口被占用时会自动切换到下一个可用端口）。

构建静态站点：

```bash
npm run docs:build
```

构建产物输出到 `docs/.vitepress/dist/`，是纯静态文件，可托管到任意静态站点服务。

预览构建产物：

```bash
npm run docs:preview
```

预览服务器默认监听 `http://localhost:4173/`，用于在本地验证构建结果与最终线上表现是否一致。

## 部署

本仓库通过 GitHub Actions 自动部署到 GitHub Pages：

- 触发条件：推送到 `main` 分支（或手动 `workflow_dispatch`）
- 构建步骤：在 CI 中运行 `npm ci && npm run docs:build`
- 发布目标：`gh-pages` 分支（或 GitHub Pages 提供的 `pages` 环境）
- 线上地址：`https://USERNAME.github.io/perwebsite/`

部署前请确保：

1. 仓库 Settings → Pages → Source 选择 `GitHub Actions`
2. `docs/.vitepress/config.mts` 中的 `base` 字段已设置为 `/perwebsite/`（与仓库名一致）
3. Workflow 文件具备 `contents: read` 和 `pages: write` 权限

详细的 Actions 配置见 `.github/workflows/` 目录下的工作流文件。

## 已知限制

- **CJK 搜索效果有限**：VitePress 默认使用 MiniSearch 作为本地搜索后端，对中文等 CJK 字符的按词切分支持较弱，可能出现搜不到标题/正文命中词的情况。是否接入 Algolia DocSearch 或更换其他搜索方案留待 todo 10 验证后决定。
- **Markdown 扩展语法**：VitePress 自带的 Markdown 扩展（如代码块高亮行、容器提示、`::: tip` 等）不在 CommonMark 范围内，迁回其他渲染器时需要注意兼容性。
- **构建时间随内容增长**：首次冷构建以及大型站点增量构建都需要数秒至数十秒；CI 中务必保留足够的 timeout 余量。
- **Node 24 vs 22**：本仓库以 Node 24 为目标（`.nvmrc`），但 VitePress 1.6.x 同时兼容 Node 22。开发时如使用 22 仍可工作，但建议在 CI 与发布前切换到 24 以保持一致性。
- **GitHub Pages 路径限制**：站点必须挂在 `https://USERNAME.github.io/perwebsite/` 子路径下（仓库名即路径），不能挂在用户/组织根域。
- **死链检测默认开启 (实测结论)**：VitePress 1.6.4 中 `ignoreDeadLinks` 默认为 `false`，构建时会检查所有内部链接，命中不存在的路由会直接让 `npm run docs:build` 以非零退出码失败。实测在 `docs/about.md` 追加 `[测试错链](/this-does-not-exist)` 后 build 退出码为 1，撤回后恢复为 0。这是优点：CI 会强制保证链接有效；如果某些占位链接不可避免，可临时在 `docs/.vitepress/config.mts` 把 `ignoreDeadLinks` 设为 `true` 或显式列出豁免列表。本仓库暂不开启忽略，依赖 CI 失败来兜底。

## 许可

本仓库源码以 MIT 许可证发布，详见 `LICENSE` 文件（若仓库尚未包含该文件，默认为标准 MIT 文本）。

第三方依赖遵循各自上游许可证，详见 `node_modules/` 中各包的 `LICENSE` 文件。

```
MIT License

Copyright (c) perwebsite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```
