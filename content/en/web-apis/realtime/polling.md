---
id: polling
category: web-apis
subcategory: realtime
level: beginner
related: [long-polling, websockets, webhook, real-time]
tags: [javascript]
aliases: ["short polling", "polling interval"]
term: "Polling"
pronunciation: "POH-ling"
keywords: ["ask again and again", "check for updates every few seconds", "simple but wasteful", "setinterval request", "status check loop", "instead of push", "اسأل مراراً", "افحص التحديثات كل بضع ثوانٍ", "بسيط لكنه مهدر", "طلب في setInterval", "حلقة فحص الحالة", "بدل الدفع"]
---

## Definition

Polling means a client repeatedly asks the server "anything new?" at regular intervals, instead of the server notifying it. It is simple, but wastes requests when nothing has changed.

## Where you hear it

In job-status pages, simple real-time features and discussions of polling vs WebSockets vs webhooks.

## Examples

- The page polls the job status every 5 seconds until it finishes.
- Use polling for something simple; switch to WebSockets if it needs to be instant.
- The dashboard polls the server every ten seconds to refresh the order count.

## Common mistake

Polling too often or forever. It adds load; back off the interval and stop when the job is done.

## Don't confuse with

Long polling, where the server holds the request open until there is news. Plain polling answers immediately, even with nothing new.

## Say it at work

- Can we just poll for now?
- Poll every 10 seconds with a timeout.
