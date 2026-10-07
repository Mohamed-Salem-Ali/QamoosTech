---
id: url-routing
category: web-apis
subcategory: routing-and-views
level: beginner
related: [view, endpoint, url-reversing]
tags: [django, python]
aliases: ["urlconf", "url conf", "routing", "routes"]
term: "URL Routing"
pronunciation: "YOO-ar-EL ROW-ting"
keywords: ["match url to code", "urlconf", "path to view mapping", "routes table", "which function handles this path", "router", "مطابقة الرابط بالكود", "ملف urls", "ربط المسار بالـ view", "جدول المسارات", "أي دالة تعالج هذا المسار", "الموجّه"]
---

## Definition

URL routing matches the path of an incoming request to the code that should handle it, using a table of patterns (in Django, the URLconf).

## Where you hear it

In every web framework's first tutorial, in API design (`/circles/12/payments`), and when a route returns 404 unexpectedly.

## Examples

- Add a route that sends `/circles/<id>/` to the detail view.
- The first matching pattern wins, so order matters.

## Common mistake

Putting a broad pattern before a specific one. It catches every request and the specific one is never reached.

## Don't confuse with

An endpoint, which is the address plus method clients call. Routing is the mechanism that connects it to code.

## Say it at work

- Check the routing table for the path.
- Nest the routes under `/api/v1/`.
