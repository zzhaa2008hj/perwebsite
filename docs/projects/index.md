# 项目

持续做一些有用的项目 — 个人工具、开源小库、文档站点都算。这里只放还在维护或即将启动的部分；历史归档留待后续整理。

## perwebsite

### 简介
个人技术介绍站点，基于 VitePress 构建，托管在 GitHub Pages。首页展示自我简介、项目与博客索引；关于页与博客页各自独立成区。整套站点使用 Markdown 编写，零运行时数据库，构建产物为纯静态文件。

### 技术栈
`VitePress` `Vue 3` `TypeScript` `GitHub Actions`

[查看详情](/projects/perwebsite/)

## dotlink

### 简介
一个用于在多台机器之间同步 dotfiles 的小 CLI 工具，通过软链接（symlink）将仓库里的配置文件映射到 `$HOME` 对应路径。支持 `link / unlink / status` 子命令，计划加入 `--dry-run` 与基于 Git 标签的 profile 切换。

### 技术栈
`Rust` `clap` `tokio` `serde`

## mdpad

### 简介
本地优先的 Markdown 草稿本 CLI，提供 `new / list / edit / rm` 子命令。所有条目以纯文本 `.md` 形式存放在 `~/Documents/mdpad/`，无索引数据库，可直接被 `grep` / `ripgrep` 检索。目标是替代在临时文件里乱写想法、之后又找不到的流程。

### 技术栈
`Node.js` `TypeScript` `Commander.js` `chokidar`