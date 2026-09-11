# AI 矿产预测平台

## 简介

AI 矿产预测平台后端服务，基于 Python + FastAPI + MySQL 构建。提供 LLM 调用编排、MCP 协议支持（Function Calling）、异步任务处理和 JWT 认证。

## 技术栈

- **后端**: Python 3.12+, FastAPI (异步), SQLAlchemy 2.0 (async)
- **数据库**: MySQL 8.0
- **异步任务**: Celery + Redis
- **LLM**: OpenAI SDK → DeepSeek（Provider 抽象）
- **协议**: MCP (Model Context Protocol)，支持 stdio + HTTP 双协议
- **部署**: Docker Compose

## 核心功能

- AI 模型调用编排与路由
- MCP Function Calling 任务管理
- 异步任务队列处理
- JWT 用户认证

## 示例

![AI矿产预测-1](./screenshot1.png)
![AI矿产预测-2](./screenshot2.png)
![AI矿产预测-3](./screenshot3.png)
![AI矿产预测-4](./screenshot4.png)
