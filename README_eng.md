# WebSocket Bash

## (Node.js Client)

[中文](README.md) | [English](README_eng.md)

This is a communication tool library based on the WebSocket protocol, which allows developers to easily and quickly complete the communication between the client and the server, and only pay attention to the specific data processing logic.

This tool library allows you to write in multiple languages, and the clients/servers written by this library can be directly docked between different languages.

Another libraries：

| Language | Type | Location |
| :-: | :-: | :-: |
| JavaScript(HTML5) | Client | [wsbash-h5-client](https://github.com/langyo/wsbash-h5-client) |
| JavaScript(Node.js) | Server | [wsbash-node-server](https://github.com/langyo/wsbash-node-server) |
| Java | Client | [wsbash-java-client](https://github.com/langyo/wsbash-java-client) |

## concept

The communication between the client and the server is based on the text stream communication provided by the WebSocket protocol. Just like the command line, after establishing communication with the server, the client can call each other's registered "command" by sending texts similar to the command line.

The communication message is sent as JSON text.
