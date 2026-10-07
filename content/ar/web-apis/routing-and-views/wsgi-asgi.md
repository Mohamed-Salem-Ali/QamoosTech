---
id: wsgi-asgi
category: web-apis
subcategory: routing-and-views
level: intermediate
related: [web-framework, reverse-proxy, middleware]
tags: [django, python]
aliases: ["wsgi", "asgi", "gunicorn", "uvicorn"]
term: "WSGI and ASGI"
translation: "واجهتا WSGI وASGI"
pronunciation: "ويزجي وأزجي"
keywords: ["ربط تطبيق بايثون بالخادم", "‏Gunicorn وUvicorn", "واجهة متزامنة مقابل غير متزامنة", "واجهة بوابة خادم الويب", "ASGI تدعم websockets", "معيار الخادم لبايثون", "connect python app to a server", "gunicorn uvicorn", "sync vs async interface", "web server gateway interface", "asgi supports websockets", "server standard for python"]
---

## التعريف

‏WSGI وASGI معياران يربطان تطبيق ويب بايثون بخادم الويب. WSGI الأقدم ومتزامن؛ أما ASGI فتدعم أيضاً الكود غير المتزامن والاتصالات الطويلة مثل WebSockets.

## أين تسمعه؟

في أدلة النشر (Gunicorn لـ WSGI وUvicorn لـ ASGI)، وملفي `wsgi.py` و`asgi.py` في Django، ووثائق FastAPI.

## أمثلة

- Run the app with Gunicorn using the WSGI entry point.
  - شغّل التطبيق بـ Gunicorn عبر نقطة دخول WSGI.
- FastAPI is ASGI, so it needs Uvicorn rather than plain Gunicorn workers.
  - ‏FastAPI تعمل بـ ASGI لذا تحتاج Uvicorn وليس عمال Gunicorn العاديين.

## خطأ شائع

استخدام خادم التطوير في الإنتاج. ضع خادم WSGI أو ASGI حقيقياً (خلف وكيل عكسي) أمام التطبيق.

## لا تخلطه مع

إطار الويب وهو كود تطبيقك. أما WSGI وASGI فمجرد العقد بين ذلك الكود والخادم.

## قلها في العمل

- Which interface does this project use, WSGI or ASGI?
  - أي واجهة يستخدم هذا المشروع، WSGI أم ASGI؟
- Point Gunicorn at the WSGI application object.
  - وجّه Gunicorn إلى كائن تطبيق WSGI.
