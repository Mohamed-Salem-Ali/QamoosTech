---
id: reconnection
category: web-apis
subcategory: realtime
level: intermediate
related: [websockets, server-sent-events, heartbeat, exponential-backoff, jitter]
aliases: ["reconnect", "auto reconnect"]
term: "Reconnection"
pronunciation: "ree-kuh-NEK-shun"
keywords: ["socket dropped reconnect", "reconnect with backoff", "connection lost banner", "resume after network change", "avoid thundering herd on restart", "catch up missed messages", "إعادة الاتصال", "الاتصال من جديد بعد الانقطاع", "تأخير متزايد بين المحاولات", "شريط انقطاع الاتصال", "استئناف بعد تغيّر الشبكة", "استعادة الرسائل الفائتة"]
---

## Definition

Opening a live connection again after it drops, for example when the network changes or the server restarts. A good client waits longer after each failed try, adds some randomness, and resumes from the last message it received.

## Where you hear it

In chat apps, live dashboards, and mobile apps that switch between Wi-Fi and mobile data.

## Examples

- The client reconnects with exponential backoff after the socket closes.
- After reconnecting, it asks only for events newer than the last one it saw.
- Show a "reconnecting" banner, so users know the data may be stale.

## Common mistake

Retrying in a tight loop with no delay. When a server restarts, every client retries at once, and that can keep it down.

## Don't confuse with

Retry logic for one failed request, which repeats the same call. Reconnection re-creates a long-lived connection, and it must also catch up on what it missed.

## Say it at work

- After the deploy, every client reconnects at once; can we add jitter?
- Make sure the app resumes from the last message instead of reloading everything.
