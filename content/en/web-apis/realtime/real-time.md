---
id: real-time
category: web-apis
subcategory: realtime
level: beginner
related: [polling, long-polling, websockets, server-sent-events, webhook]
aliases: ["live updates", "live data"]
term: "Real-time"
pronunciation: "REEL-tyme"
keywords: ["updates without refreshing the page", "live data for users", "instant updates in the app", "how fast must updates arrive", "realtime feature requirements", "push updates to the browser", "بدون تحديث الصفحة", "بيانات حية للمستخدم", "تحديثات فورية في التطبيق", "ما السرعة المطلوبة للتحديث", "متطلبات الميزة اللحظية", "دفع التحديثات إلى المتصفح"]
---

## Definition

In web apps, real time means a user sees changes made by others, or by the server, almost at once, without reloading the page. How fast is fast enough should be agreed and written down, because it decides which technology to use.

## Where you hear it

In product talks about chat, notifications, live dashboards and collaborative editing, and in debates about polling versus push.

## Examples

- The match score updates in real time, so nobody has to refresh the page.
- We need the order status in real time, but a 30-second delay is fine for the daily report.
- Agree how fast real time must be before choosing between polling and WebSockets.

## Common mistake

Promising real time without saying how fast. Ask whether the user needs the change within a second, within a minute, or only on the next visit.

## Don't confuse with

Real time is about how quickly updates reach the user. Fast is about how quickly the server answers one request. A fast API can still be slow to push changes to people.

## Say it at work

- Does this really need to be real time, or is a refresh every minute enough?
- We can show the change in real time once the WebSocket connection is in place.
