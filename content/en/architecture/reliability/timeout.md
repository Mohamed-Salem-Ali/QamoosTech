---
id: timeout
category: architecture
subcategory: reliability
level: beginner
related: [retry-logic, circuit-breaker, fail-fast]
term: "Timeout"
pronunciation: "TIME-owt"
keywords: ["how long to wait for a response", "request timed out", "set a timeout on the http client", "connection timeout", "stop waiting after seconds", "كم ننتظر الرد", "انتهت مهلة الطلب", "ضبط مهلة عميل HTTP", "مهلة الاتصال", "التوقف عن الانتظار بعد ثوان"]
---

## Definition

The maximum time you wait for an operation, such as a network call or a database query, before you stop waiting and treat it as failed.

## Where you hear it

In HTTP client settings, database connection settings, and incident reports that say "requests timed out".

## Examples

- The payment call has a timeout of five seconds.
- Without a timeout, one slow dependency can hold every thread.
- The request has a timeout of three seconds, after which the app shows a retry button.

## Common mistake

Using no timeout at all, or a timeout longer than the user is willing to wait. Requests then pile up while the user has already left.

## Don't confuse with

A timeout is the limit on waiting. A retry is trying again after a failure.
