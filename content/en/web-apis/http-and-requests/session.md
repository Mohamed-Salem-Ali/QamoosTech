---
id: session
category: web-apis
subcategory: http-and-requests
level: beginner
related: [cookie, bearer-token, stateless-vs-stateful]
term: "Session"
pronunciation: "SEH-shun"
keywords: ["keep user logged in", "server side session data", "session expired", "session id in cookie", "session storage on server", "إبقاء المستخدم مسجلاً", "بيانات الجلسة على الخادم", "انتهت الجلسة", "معرّف الجلسة في الكوكي"]
---

## Definition

The period during which a user is recognized across requests, usually kept with a session ID in a cookie and the session data stored on the server.

## Where you hear it

In login flows, web framework settings, and security reviews about expired logins.

## Examples

- The session expires after 30 minutes of inactivity.
- Store the session ID in an HttpOnly cookie.
- The session stays active while the user keeps browsing, and ends after logout.

## Common mistake

Putting sensitive data in the session identifier itself, or never expiring sessions after logout.

## Don't confuse with

A session keeps state on the server for a user. A bearer token carries the proof in each request.
