---
id: url-routing
category: web-apis
subcategory: routing-and-views
level: beginner
related: [view, endpoint, url-reversing]
tags: [django, python]
aliases: ["urlconf", "url conf", "routing"]
term: "URL Routing"
translation: "توجيه الروابط"
pronunciation: "يو آر إل راوتينج"
keywords: ["مطابقة الرابط بالكود", "ملف urls", "ربط المسار بالـ view", "جدول المسارات", "أي دالة تعالج هذا المسار", "الموجّه", "match url to code", "urlconf", "path to view mapping", "routes table", "which function handles this path", "router"]
---

## التعريف

توجيه الروابط (URL Routing) يطابق مسار الطلب الوارد بالكود الذي يجب أن يعالجه، باستخدام جدول أنماط (في Django هو الـ URLconf).

## أين تسمعه؟

في أول دليل لأي إطار ويب، وفي تصميم الـ API (`/circles/12/payments`)، وعندما يعيد مسار الخطأ 404 بشكل غير متوقع.

## أمثلة

- Add a route that sends `/circles/<id>/` to the detail view.
  - أضف مساراً يرسل `/circles/<id>/` إلى view التفاصيل.
- The first matching pattern wins, so order matters.
  - أول نمط مطابق هو الفائز لذا يهم الترتيب.
- The request to /orders/15/ is routed to the order detail view.
  - يُوجَّه الطلب إلى /orders/15/ نحو عرض تفاصيل الطلب.

## خطأ شائع

وضع نمط عام قبل نمط محدد. يلتقط كل الطلبات ولا يُوصل أبداً إلى المحدد.

## لا تخلطه مع

نقطة النهاية (Endpoint) وهي العنوان مع الطريقة التي يستدعيها العملاء. أما التوجيه فهو الآلية التي تربطها بالكود.

## قلها في العمل

- Check the routing table for the path.
  - افحص جدول التوجيه للمسار.
- Nest the routes under `/api/v1/`.
  - ضع المسارات تحت `/api/v1/`.
