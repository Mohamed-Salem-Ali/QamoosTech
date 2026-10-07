---
id: development-server
category: devops
subcategory: environments-and-packaging
level: beginner
related: [deployment, staging-vs-production, reverse-proxy]
tags: [django, python]
aliases: ["dev server", "runserver", "local server"]
term: "Development Server"
pronunciation: "dih-VEL-up-ment SER-ver"
keywords: ["runserver", "local server to try the app", "not for production", "auto reload on change", "localhost 8000", "debug mode server", "أمر runserver", "خادم محلي لتجربة التطبيق", "ليس للإنتاج", "إعادة تحميل تلقائية عند التغيير", "المنفذ المحلي 8000", "خادم بوضع التصحيح"]
---

## Definition

A development server is a lightweight local server for trying your app while you build it. It reloads on changes and shows detailed errors, but it is not meant for production.

## Where you hear it

In framework tutorials (`runserver`, `next dev`, `uvicorn --reload`) and when people ask why something works locally only.

## Examples

- Start the development server and open localhost:8000.
- Never expose the development server to the internet.

## Common mistake

Deploying with it. It is slow, not hardened for attacks and shows debug pages that leak internals.

## Don't confuse with

A production server such as Gunicorn behind a reverse proxy, which is built for load and safety.

## Say it at work

- Is the dev server running?
- It reloads automatically while the dev server is on.
