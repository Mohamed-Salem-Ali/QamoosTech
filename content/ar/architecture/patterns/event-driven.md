---
id: event-driven
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue, immutable]
term: "Event-driven"
translation: "مبني على الأحداث"
pronunciation: "إيفنت دريفن"
keywords: ["تصميم مبني على الأحداث","معمارية مدفوعة بالأحداث","الأنظمة المتفاعلة مع الأحداث","ربط الخدمات عبر الأحداث","إيفنت دريفن","تصميم الخدمات غير المترابطة","معمارية الميكروسيرفس المتفاعلة","التصميم غير المتزامن للأحداث","systems that react to events","loosely coupled microservices design","architecture based on triggers","asynchronous state change pattern","event driven architecture","eda pattern","reactive system design","services reacting to actions","decoupled backend architecture"]
---
## التعريف

تصميم تتفاعل فيه أجزاء النظام مع الأحداث («تم إنشاء طلب») بدل أن يستدعي بعضها بعضًا مباشرة.

## أين تسمعه؟

معمارية الـ backend الحديثة والأنظمة السحابية.

## أمثلة

- When an order is created, an event triggers the email and invoice services.
  - عند إنشاء طلب، يشغّل حدث خدمتي البريد والفواتير.
- An event-driven design keeps services loosely coupled.
  - التصميم المبني على الأحداث يبقي الخدمات غير مترابطة بإحكام.

## خطأ شائع

وصف النظام بأنه event-driven لمجرد استخدام queue. يجب أن يكون سير العمل مدفوعًا بالأحداث فعلًا.

## لا تخلطه مع

المعمارية المبنية على الأحداث تتفاعل مع تغييرات الحالة بشكل غير متزامن، بينما المعمارية المبنية على الرسائل تركز على توجيه رسائل معينة إلى مستلمين محددين.

## قلها في العمل

- Let's make sure our new microservice is event-driven so it doesn't block the checkout flow.
  - دعونا نتأكد من أن الخدمة المصغرة الجديدة مبنية على الأحداث لكي لا تعطل تدفق الدفع.
- We should adopt an event-driven approach for this workflow to improve service decoupling.
  - يجب أن نعتمد نهجاً مبنياً على الأحداث لتدفق العمل هذا لتحسين فك الارتباط بين الخدمات.
