---
id: head-of-line-blocking
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [multiplexing, quic, latency-vs-throughput]
aliases: ["hol blocking", "hol-blocking"]
term: "Head-of-Line Blocking"
pronunciation: "HED-of-LYN BLOK-ing"
keywords: ["one slow item blocks the rest", "lost packet stalls all streams", "queue stuck behind first item", "http 1.1 problem", "tcp retransmission", "quic fixes this", "عنصر بطيء يحجب الباقي", "حزمة مفقودة توقف كل التيارات", "الطابور عالق خلف العنصر الأول", "مشكلة HTTP/1.1", "إعادة إرسال TCP", "‏QUIC يعالجها"]
---

## Definition

Head-of-line blocking happens when the first item in a queue is delayed and everything behind it has to wait, even if it is ready, such as a lost TCP packet stalling every request on the connection.

## Where you hear it

In HTTP/1.1, HTTP/2 and HTTP/3 comparisons, message queue ordering and network performance talks.

## Examples

- In HTTP/1.1 a slow response blocks the requests queued behind it.
- HTTP/3 avoids head-of-line blocking between streams.

## Common mistake

Thinking multiplexing alone removes it. TCP still delivers bytes in order, so a loss blocks every stream.

## Don't confuse with

A deadlock, where tasks wait on each other forever. Here the wait ends once the first item arrives.

## Say it at work

- That's head-of-line blocking at the TCP layer.
- Process messages per partition to limit it.
