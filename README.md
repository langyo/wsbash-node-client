# WebSocket Bash

## (Node.js Client)

[中文](README.md) | [English](README_eng.md)

这是一个基于 WebSocket 协议的通讯工具库，皆在让开发者能够方便、快速地完成客户端与服务端之间的通信部分，只需关注具体的数据处理逻辑。此工具库允许以多种语言编写，不同语言凭此库编写的客户端/服务端之间可以直接对接。

其他仓库：

| 语言 | 类型 | 仓库位置 |
| :-: | :-: | :-: |
| JavaScript(HTML5) | 客户端 | [wsbash-h5-client](https://github.com/mcbbs-developer/wsbash-h5-client) |
| JavaScript(Node.js) | 服务端 | [wsbash-node-server](https://github.com/mcbbs-developer/wsbash-node-server) |
| Java | 客户端 | [wsbash-java-client](https://github.com/mcbbs-developer/wsbash-java-client) |

## 概念

客户端与服务端之间的通讯依赖于 WebSocket 协议提供的文本流通讯。如同命令行一样，客户端在与服务端建立通讯后，可以通过互相发送类似命令行的文本互相调用各自注册好的“指令”。

通讯的消息是以 JSON 文本的形式发送的。
