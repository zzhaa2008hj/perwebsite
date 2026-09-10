# 关于我页面内容填充 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 用真实内容替换全站占位内容，按已确认的设计方案重写 about 页、首页、项目页

**Architecture:** VitePress 静态站点，Markdown 源文件在 `docs/`，直接替换内容无需改动配置

**Tech Stack:** VitePress, Markdown

---

## 文件修改范围

| 文件 | 操作 |
|------|------|
| `docs/index.md` | 替换 Hero text/tagline + Features 为真实内容 |
| `docs/about/index.md` | 完全重写（设计方案已确认） |
| `docs/projects/index.md` | 替换假项目为真实项目（抖音文案助手后端/前端、北京仓储、perwebsite） |
| `docs/projects/perwebsite/index.md` | 更新为真实项目描述 |
| `docs/posts/index.md` | 添加真实文章链接 |
| `docs/posts/welcome/index.md` | 替换为真实欢迎文章或删除 |

---

## Task 1: 重写 docs/about/index.md

**文件:** `docs/about/index.md`

- [ ] **Step 1: 按设计方案重写全部内容**

```markdown
# 关于

> 个人技术介绍页：自我介绍、技术栈、项目经历与联系方式。

## 关于我

近10年全栈工程师，擅长**后端架构设计与AI工程化落地**。曾主导日均10亿+ Token的多模型网关建设，用分层路由策略将模型调用成本降低64.6%。目前自由职业，接长期远程合作。

## 我能帮你解决

| 痛点场景 | 对应能力 | 可量化成绩 |
|---------|---------|-----------|
| 团队缺架构决策者，方向总是踩坑 | 复杂系统架构设计与技术选型 | 统筹山东省数据治理平台，整合9种数据源，58项优化任务按时交付 |
| AI项目上线后成本失控，不知道钱花在哪 | Agent架构与成本治理 | 自研多模型网关，日均承载10亿+ Token，费用降低64.6% |
| 需要能独立交付的全栈，不只是执行层 | 前后端均独立交付 | 从0到1交付AI简历平台、支付系统、抖音文案助手等完整产品 |

## 工作经历

| 公司 | 角色 | 核心贡献 |
|------|------|---------|
| 智元数科 | 技术负责人 | AI矿产预测平台架构，10亿+ Token/日网关 |
| 杭州热点深蓝 | 技术负责人 | 16人团队，多业务线后端系统 |
| 江苏易呗科技 | 后端开发 | 支付系统，日均万级交易 |

## 技能栈

| 类别 | 技术 |
|------|------|
| 语言 | Java, Python, JavaScript/TypeScript |
| AI / LLM | LiteLLM, LangChain, Vercel AI SDK, Prompt Engineering |
| 框架 | Spring Boot, FastAPI, Next.js, Vue |
| 基础设施 | Docker, Nginx, PostgreSQL, Redis, RabbitMQ, Prometheus, Grafana |

## 内容产出

在知乎和掘金写作「辉的技术笔记」，累计15+篇技术文章：

- **Dify并发急救手册** 7篇系列（6层瓶颈诊断、Celery队列优化、Gunicorn调优）
- **Agent成本治理系列**（诊断→治理→监控完整方法论）

配套开源：[dify-config-examples](https://github.com/xxx/dify-config-examples)、[agent-cost-governance](https://github.com/xxx/agent-cost-governance)

## 联系我

如果你正在找一个能帮你拍板技术方向的人，欢迎聊聊。

**邮箱**：your@email.com
**微信**：your-wechat-id
**文章**：[辉的技术笔记](https://zhihu.com/xxx)
**项目**：[查看项目页](/projects/)
```

- [ ] **Step 2: 验证构建无死链**

Run: `npm run docs:build`
Expected: 构建成功，无死链错误

- [ ] **Step 3: 提交**

```bash
git add docs/about/index.md
git commit -m "feat(content): rewrite about page with real content

- Result-oriented hero with 10B+ tokens and 64.6% cost reduction stats
- Pain-ability-result triangle for B2B trust building
- 3 work experiences (智元数科/杭州热点深蓝/江苏易呗)
- Simplified skills table
- Content output section (辉的技术笔记 15+ articles)
- Dual-path CTA (contact + project links)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 2: 更新 docs/index.md 首页

**文件:** `docs/index.md`

**修改说明：** 保留 3-card 布局（brand/alt），替换 Hero 文字和 Features 内容

- [ ] **Step 1: 替换 Hero 和 Features 内容**

```markdown
---
layout: home

hero:
  name: 辉的技术笔记
  text: 后端架构 + AI工程化
  tagline: 近10年全栈工程师，日均承载10亿+ Token调用，模型费用降低64.6%。自由职业，可接长期远程合作。
  image:
    src: /logo.svg
    alt: perwebsite
  actions:
    - theme: brand
      text: 查看项目
      link: /projects/
    - theme: alt
      text: 关于我
      link: /about/

features:
  - icon: 🤖
    title: Agent 架构与成本治理
    details: 自主研发多模型统一网关，集成40+主流LLM API，日均承载10亿+ Token。设计Token漏斗模型+分层路由策略，模型调用费用降低64.6%。
  - icon: 🏗️
    title: 复杂系统架构设计
    details: 主导山东省数据治理平台，整合9种数据源，统筹58项优化任务，支撑省级政务数据流通。4年+技术团队管理经验。
  - icon: 💻
    title: 全栈独立交付
    details: 精通Java/Python后端+TypeScript/Vue前端。从0到1交付过AI简历平台、支付系统、抖音文案助手等完整产品。
  - icon: ✍️
    title: 技术写作与开源
    details: 知乎+掘金「辉的技术笔记」，累计15+篇技术文章。Dify并发急救手册7篇系列、Agent成本治理完整方法论。
  - icon: 🛠️
    title: 抖音文案助手
    details: 前后端完整产品：后端 VitePress Admin + 前端页面，已完成 Nginx 静态部署改造，支持快速迭代。
  - icon: 📦
    title: 北京仓储
    details: 仓储系统开发，保障日常运营稳定。
---
```

- [ ] **Step 2: 验证构建**

Run: `npm run docs:build`
Expected: 构建成功

- [ ] **Step 3: 提交**

```bash
git add docs/index.md
git commit -m "feat(content): update homepage hero and features with real content

- Hero: 辉的技术笔记, 后端架构+AI工程化 tagline
- 6 feature cards covering core capabilities
- Dual CTA: 查看项目 + 关于我

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 3: 更新 docs/projects/index.md 项目列表

**文件:** `docs/projects/index.md`

- [ ] **Step 1: 替换项目列表内容**

```markdown
# 项目

持续做一些有用的项目。以下是当前在维护或近期活跃的项目。

## 抖音文案助手

### 简介
AI 驱动的抖音文案生成工具，支持多模板管理和文案生成。前后端均独立交付，后端已完成 VitePress Admin + Nginx 静态部署改造，支持前后端部署分离。

### 技术栈
`Python` `FastAPI` `Vue` `TypeScript` `Nginx`

[查看项目详情](/projects/douyinwenan/)

## 北京仓储

### 简介
企业级仓储管理系统，保障日常运营稳定，支持多仓库、多角色权限管理。

### 技术栈
`Java` `Spring Boot` `PostgreSQL` `Vue`

## perwebsite

### 简介
个人技术介绍站点，基于 VitePress 构建，托管在 GitHub Pages。纯静态站点，Markdown 写作，零运行时数据库。

### 技术栈
`VitePress` `Vue 3` `TypeScript` `GitHub Actions`

[查看详情](/projects/perwebsite/)
```

- [ ] **Step 2: 验证构建**

Run: `npm run docs:build`
Expected: 构建成功

- [ ] **Step 3: 提交**

```bash
git add docs/projects/index.md
git commit -m "feat(content): replace projects list with real projects

- 抖音文案助手 (AI文案生成工具)
- 北京仓储 (企业级仓储系统)
- perwebsite (个人站点)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 4: 新建 docs/projects/douyinwenan/index.md

**文件:** `docs/projects/douyinwenan/index.md`

- [ ] **Step 1: 创建项目详情页**

```markdown
# 抖音文案助手

## 简介

AI 驱动的抖音文案生成工具，支持多模板管理和文案生成。前后端均独立交付，已完成 Nginx 静态部署改造，支持前后端部署分离。

## 技术栈

- **后端**: Python, FastAPI
- **前端**: Vue, TypeScript
- **部署**: Nginx 静态部署

## 核心功能

- AI 文案生成
- 多模板管理
- 前后端部署分离

## 状态

活跃维护中。
```

- [ ] **Step 2: 验证构建**

Run: `npm run docs:build`
Expected: 构建成功

- [ ] **Step 3: 提交**

```bash
git add docs/projects/douyinwenan/index.md
git commit -m "feat(content): add douyinwenan project detail page

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 5: 更新 docs/projects/perwebsite/index.md

**文件:** `docs/projects/perwebsite/index.md`

- [ ] **Step 1: 更新为真实项目描述**

```markdown
# perwebsite

## 简介

个人技术介绍站点，基于 VitePress 构建，托管在 GitHub Pages。纯 Markdown 写作，零运行时数据库，构建产物为纯静态文件。

## 技术栈

- **VitePress** — 静态站点生成器
- **Vue 3** — 主题运行时
- **TypeScript** — 配置文件类型提示
- **GitHub Actions** — CI/CD 自动部署

## 链接

- 演示: https://username.github.io/perwebsite/
```

- [ ] **Step 2: 验证构建**

Run: `npm run docs:build`
Expected: 构建成功

- [ ] **Step 3: 提交**

```bash
git add docs/projects/perwebsite/index.md
git commit -m "feat(content): update perwebsite project page with real description

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 6: 更新 docs/posts/index.md 博客列表

**文件:** `docs/posts/index.md`

- [ ] **Step 1: 添加真实文章链接**

```markdown
---
title: 博客
---

# 博客

在知乎和掘金写作「辉的技术笔记」，累计15+篇技术文章。以下为主要系列：

## Dify 并发急救手册（7篇系列）

- [6层瓶颈诊断：让你的 Dify 工作流不再卡顿](https://juejin.cn/xxx)
- [Celery 15队列优化实战](https://juejin.cn/xxx)
- [Gunicorn 调优指南](https://juejin.cn/xxx)

## Agent 成本治理系列

- [诊断篇：如何定位 Token 消耗瓶颈](https://juejin.cn/xxx)
- [治理篇：分层路由策略落地](https://juejin.cn/xxx)
- [监控篇：成本可视化与告警](https://juejin.cn/xxx)

更多文章请访问：[辉的技术笔记](https://zhihu.com/xxx)
```

- [ ] **Step 2: 验证构建**

Run: `npm run docs:build`
Expected: 构建成功

- [ ] **Step 3: 提交**

```bash
git add docs/posts/index.md
git commit -m "feat(content): add real article links to posts index

- Dify并发急救手册 7篇系列
- Agent成本治理系列
- Link to 辉的技术笔记 on 知乎

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 7: 处理 docs/posts/welcome/index.md

- [ ] **Step 1: 评估欢迎文章**

选项 A（替换）或 B（删除）。推荐 **选项 A：替换为更贴合真实定位的文章**。

```markdown
---
title: 关于这个站点
date: 2026-09-09
tags:
  - meta
---

# 关于这个站点

这里是我的个人技术介绍站，记录项目作品与技术思考。

## 我是谁

近10年全栈工程师，方向是后端架构 + AI 工程化。目前自由职业，可接长期远程合作。

## 这个站放什么

- **项目作品**：抖音文案助手、北京仓储等实际交付的项目
- **技术文章**：在知乎和掘金的「辉的技术笔记」同步更新
- **联系方式**：合作请直接联系我

## 联系方式

- 邮箱：your@email.com
- 微信：your-wechat-id
```

- [ ] **Step 2: 验证构建**

Run: `npm run docs:build`
Expected: 构建成功

- [ ] **Step 3: 提交**

```bash
git add docs/posts/welcome/index.md
git commit -m "feat(content): replace welcome post with real about-site content

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 8: 全站构建验证

- [ ] **Step 1: 运行完整构建**

Run: `npm run docs:build`
Expected: BUILD SUCCESS，无死链错误

- [ ] **Step 2: 预览确认**

Run: `npm run docs:preview`
Expected: 站点可正常访问，所有页面内容正确

- [ ] **Step 3: 最终提交（如有未提交内容）**

```bash
git status
git add -A
git commit -m "feat: populate site with real content across all pages

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## 后续待办（不在本次范围）

- GitHub Links 中的占位符 USERNAME/email 替换为真实信息
- 北京仓储项目详情页（目前只有列表入口）
- 首页 Features 中的项目卡片完善
