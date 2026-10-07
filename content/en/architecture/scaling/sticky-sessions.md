---
id: sticky-sessions
category: architecture
subcategory: scaling
level: intermediate
related: [load-balancer, stateless-vs-stateful, horizontal-scaling]
aliases: ["session affinity", "sticky session"]
term: "Sticky Sessions"
pronunciation: "STIK-ee SESH-unz"
keywords: ["same user same server", "session affinity", "load balancer remembers the server", "cookie based routing", "state kept on one machine", "breaks when the server dies", "نفس المستخدم على نفس الخادم", "ارتباط الجلسة بالخادم", "موزّع الأحمال يتذكر الخادم", "توجيه بالكوكيز", "الحالة محفوظة على جهاز واحد", "تنكسر عند موت الخادم"]
---

## Definition

Sticky sessions make a load balancer send all requests from the same user to the same server, usually using a cookie, so the server's in-memory session keeps working.

## Where you hear it

In load balancer settings, scaling reviews, and discussions about why logins disappear after a deploy.

## Examples

- Enable sticky sessions until we move sessions to Redis.
- Users lose their cart when the sticky server restarts.

## Common mistake

Relying on them for good. Load becomes uneven and a server failure logs users out. Keep state in a shared store.

## Don't confuse with

A stateless design, where any server can handle any request because nothing is kept locally.

## Say it at work

- Do we need sticky sessions here?
- Move the session to a shared store and drop stickiness.
