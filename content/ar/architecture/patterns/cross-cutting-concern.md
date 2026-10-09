---
id: cross-cutting-concern
category: architecture
subcategory: patterns
level: intermediate
related: [separation-of-concerns, middleware, decoupling]
tags: [python]
aliases: ["crosscutting concern", "aspect"]
term: "Cross-Cutting Concern"
translation: "الاهتمام المتقاطع"
pronunciation: "كروس كتنج كونسيرن"
keywords: ["حاجة تشترك فيها أجزاء كثيرة", "التسجيل والمصادقة والتوقيت في كل مكان", "الكود نفسه مكرر في دوال كثيرة", "حل بالـ decorator أو الـ middleware", "جانب من النظام", "متطلب مشترك", "needed by many parts", "logging auth timing everywhere", "same code repeated in many functions", "decorator or middleware solution", "aspect of the system", "shared requirement"]
---

## التعريف

الاهتمام المتقاطع (Cross-Cutting Concern) حاجة تشترك فيها أجزاء كثيرة من النظام، مثل التسجيل والمصادقة والتخزين المؤقت وقياس الوقت. لا تنتمي إلى ميزة واحدة لذا تُعالج في مكان مشترك واحد.

## أين تسمعه؟

في مراجعات المعمارية، ونقاشات التصميم حول الـ decorators والـ middleware، ومراجعات الكود التي تلاحظ الأسطر نفسها في كل مكان.

## أمثلة

- Logging is a cross-cutting concern, so we add it with a decorator.
  - التسجيل اهتمام متقاطع لذا نضيفه بـ decorator.
- Authentication runs in middleware instead of inside every view.
  - تعمل المصادقة في الـ middleware بدل كل view.
- Request timing is a cross-cutting concern, so one middleware records it for every route.
  - قياس زمن الطلب اهتمام عابر للوحدات، لذلك يسجّله وسيط واحد لكل المسارات.

## خطأ شائع

نسخ كود التوقيت أو الصلاحيات نفسه إلى كل دالة. عندها يحتاج تغيير واحد إلى تعديلات في عشرات الأماكن.

## لا تخلطه مع

فصل الاهتمامات (Separation of Concerns) وهو الفكرة العامة لتقسيم المسؤوليات. أما الاهتمام المتقاطع فيقطع كل تلك التقسيمات.

## قلها في العمل

- Is this a cross-cutting concern or just one feature's job?
  - هل هذا اهتمام متقاطع أم مهمة ميزة واحدة؟
- Pull the repeated checks into one place.
  - اجمع الفحوصات المكررة في مكان واحد.
