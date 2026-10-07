---
id: wsgi-asgi
category: web-apis
subcategory: routing-and-views
level: intermediate
related: [web-framework, reverse-proxy, middleware]
tags: [django, python]
aliases: ["wsgi", "asgi", "gunicorn", "uvicorn"]
term: "WSGI and ASGI"
pronunciation: "WIZ-gee and AZ-gee"
keywords: ["connect python app to a server", "gunicorn uvicorn", "sync vs async interface", "web server gateway interface", "asgi supports websockets", "server standard for python", "ربط تطبيق بايثون بالخادم", "‏Gunicorn وUvicorn", "واجهة متزامنة مقابل غير متزامنة", "واجهة بوابة خادم الويب", "ASGI تدعم websockets", "معيار الخادم لبايثون"]
---

## Definition

WSGI and ASGI are the standards that connect a Python web app to a web server. WSGI is the older, synchronous one; ASGI also supports async code and long-lived connections such as WebSockets.

## Where you hear it

In deployment guides (Gunicorn for WSGI, Uvicorn for ASGI), Django's `wsgi.py` and `asgi.py` files, and FastAPI docs.

## Examples

- Run the app with Gunicorn using the WSGI entry point.
- FastAPI is ASGI, so it needs Uvicorn rather than plain Gunicorn workers.

## Common mistake

Using the development server in production. Put a real WSGI or ASGI server (behind a reverse proxy) in front of the app.

## Don't confuse with

A web framework, which is your application code. WSGI and ASGI are only the contract between that code and the server.

## Say it at work

- Which interface does this project use, WSGI or ASGI?
- Point Gunicorn at the WSGI application object.
