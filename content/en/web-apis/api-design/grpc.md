---
id: grpc
category: web-apis
subcategory: api-design
level: intermediate
related: [protocol-buffers, restful-api, multiplexing]
aliases: ["remote procedure call", "rpc"]
term: "gRPC"
pronunciation: "JEE-AR-PEE-SEE"
keywords: ["rpc framework by google", "protobuf messages", "fast service to service calls", "http 2 streaming", "generated client code", "microservices communication", "إطار RPC من Google", "رسائل protobuf", "نداءات سريعة بين الخدمات", "بث عبر HTTP/2", "كود عميل مولّد", "تواصل الخدمات المصغرة"]
---

## Definition

gRPC is a framework for calling functions on a remote service as if they were local. It uses Protocol Buffers for compact messages and HTTP/2 for speed and streaming.

## Where you hear it

In microservice architectures, Go and Java backends, and "REST or gRPC?" design discussions.

## Examples

- Internal services talk over gRPC; the public API stays REST.
- Generate the client from the `.proto` file.
- The billing service calls the invoice service over gRPC with a generated client.

## Common mistake

Exposing gRPC directly to browsers. Browsers need a proxy such as gRPC-Web.

## Don't confuse with

REST over JSON, which is human readable and works everywhere, but is larger and slower.

## Say it at work

- Define the service in a proto file first.
- Use gRPC streaming for the live feed.
