---
id: streaming
category: web-apis
subcategory: realtime
level: intermediate
related: [server-sent-events, websockets, long-polling]
aliases: ["http streaming", "chunked response"]
term: "Streaming"
pronunciation: "STREEM-ing"
keywords: ["send data in chunks", "read response as it arrives", "stream tokens to the chat", "chunked http response", "stream a large export", "response buffered by proxy", "إرسال البيانات على دفعات", "قراءة الرد أثناء وصوله", "بث الكلمات إلى الدردشة", "استجابة HTTP مجزّأة", "بث تصدير كبير", "وكيل يحجز الاستجابة"]
---

## Definition

Sending data in pieces as each piece is ready, over one open response, instead of waiting for the whole result. The client reads the pieces one by one, so text or events can show as they arrive.

## Where you hear it

In AI chat answers that appear word by word, in live log views, and in large file downloads.

## Examples

- The chat endpoint streams tokens, so the answer appears while it is being generated.
- Read the response body as a stream and render each chunk as it arrives.
- A big export streams rows, so the server never holds the whole file in memory.

## Common mistake

Buffering the whole response in a proxy or in the app, so the user sees nothing until the end. Check that every layer passes the chunks on.

## Don't confuse with

Server-sent events and WebSockets are protocols for live messages. Streaming is the wider idea of sending in pieces, and an ordinary HTTP response can stream without any special protocol.

## Say it at work

- The answer shows up late; is the proxy buffering the stream?
- Let's stream the export so the download starts right away.
