---
id: multiplexing
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [head-of-line-blocking, grpc, websockets]
aliases: ["http/2", "http2"]
term: "Multiplexing"
pronunciation: "MUL-tih-plek-sing"
keywords: ["many requests on one connection", "http 2 feature", "no extra connections", "interleaved streams", "faster page load", "one tcp connection", "طلبات كثيرة على اتصال واحد", "ميزة في HTTP/2", "بلا اتصالات إضافية", "تيارات متداخلة", "تحميل صفحة أسرع", "اتصال TCP واحد"]
---

## Definition

Multiplexing means sending many independent requests and responses at the same time over a single connection, instead of opening a new connection for each, as HTTP/2 does.

## Where you hear it

In HTTP/2 and HTTP/3 explanations, gRPC, and performance talks about removing the need to bundle files.

## Examples

- HTTP/2 multiplexes dozens of requests over one TCP connection.
- With multiplexing we no longer need domain sharding.
- The browser loads the images and scripts over one connection, thanks to multiplexing.

## Common mistake

Assuming it fixes everything. On HTTP/2 over TCP, one lost packet can still stall all the streams.

## Don't confuse with

Connection pooling, which reuses several connections. Multiplexing shares one connection among many requests.

## Say it at work

- Is the server on HTTP/2 with multiplexing?
- Fewer connections means less overhead.
