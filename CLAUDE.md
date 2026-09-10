# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

基于 VitePress 的个人技术站点，部署在 GitHub Pages。内容使用 Markdown 编写，构建产物为纯静态文件。

## 常用命令

```bash
npm run docs:dev      # 启动开发服务器（热更新），监听 localhost:5173
npm run docs:build    # 构建静态站点，输出到 docs/.vitepress/dist/
npm run docs:preview  # 预览构建产物，监听 localhost:4173
```

## 架构说明

### 目录结构
- `docs/` — VitePress 站点源文件根目录
- `docs/.vitepress/config.mts` — 站点配置（标题、语言、导航、侧边栏等）
- `docs/.vitepress/theme/` — 自定义主题（index.ts + style.css）
- `docs/.vitepress/dist/` — 构建产物（部署到 GitHub Pages 的内容）
- `.github/workflows/deploy.yml` — GitHub Actions 自动部署配置

### 路由规则
VitePress 使用基于目录的路由：`docs/about/index.md` → `/about/`，`docs/projects/perwebsite/index.md` → `/projects/perwebsite/`。

### 部署机制
推送 `main` 分支后，GitHub Actions 自动运行 `npm ci && npm run docs:build`，然后将 `docs/.vitepress/dist/` 部署到 GitHub Pages。

### 已知约束
- `base: '/perwebsite/'` — 站点必须挂在子路径下，不能挂在根域
- `cleanUrls: false` — GitHub Pages 静态服务器不自动处理 .html 后缀，启用 cleanUrls 会导致死链
- `ignoreDeadLinks: false`（默认）— 构建时会检查所有内部链接，断链会导致 build 失败
- Node 24（.nvmrc 已固定）

### 配置文件 key 字段
站点标题 `title`、描述 `description`、导航 `nav`、侧边栏 `sidebar`、社交链接 `socialLinks` 均在 `config.mts` 中。
