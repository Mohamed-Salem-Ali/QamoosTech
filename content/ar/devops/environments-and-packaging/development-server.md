---
id: development-server
category: devops
subcategory: environments-and-packaging
level: beginner
related: [deployment, staging-vs-production, reverse-proxy]
tags: [django, python]
aliases: ["dev server", "runserver", "local server"]
term: "Development Server"
translation: "خادم التطوير"
pronunciation: "ديفيلبمنت سيرفر"
keywords: ["أمر runserver", "خادم محلي لتجربة التطبيق", "ليس للإنتاج", "إعادة تحميل تلقائية عند التغيير", "المنفذ المحلي 8000", "خادم بوضع التصحيح", "runserver", "local server to try the app", "not for production", "auto reload on change", "localhost 8000", "debug mode server"]
---

## التعريف

خادم التطوير (Development Server) خادم محلي خفيف لتجربة تطبيقك أثناء بنائه. يعيد التحميل عند التغيير ويعرض أخطاء مفصلة، لكنه غير مخصص للإنتاج.

## أين تسمعه؟

في دروس الأطر (`runserver` و`next dev` و`uvicorn --reload`) وعندما يسأل الناس لماذا يعمل شيء محلياً فقط.

## أمثلة

- Start the development server and open localhost:8000.
  - شغّل خادم التطوير وافتح localhost:8000.
- Never expose the development server to the internet.
  - لا تعرّض خادم التطوير إلى الإنترنت أبداً.

## خطأ شائع

النشر باستخدامه. هو بطيء وغير محصّن ضد الهجمات ويعرض صفحات تصحيح تكشف التفاصيل الداخلية.

## لا تخلطه مع

خادم إنتاج مثل Gunicorn خلف وكيل عكسي، وهو مصمم للحمل والأمان.

## قلها في العمل

- Is the dev server running?
  - هل يعمل خادم التطوير؟
- It reloads automatically while the dev server is on.
  - يعيد التحميل تلقائياً ما دام خادم التطوير يعمل.
