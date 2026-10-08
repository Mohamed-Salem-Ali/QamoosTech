---
id: exponential-backoff
category: architecture
subcategory: reliability
level: intermediate
related: [retry-logic, jitter, thundering-herd, reconnection]
term: "Exponential Backoff"
translation: "التراجع الأسي"
pronunciation: "إكسبوننشال باكوف"
keywords: ["الانتظار أطول بعد كل محاولة", "مضاعفة مدة الانتظار", "استراتيجية التراجع", "عدم إغراق خدمة متعطلة بالطلبات", "wait longer after each retry", "retry delay doubles", "backoff strategy", "avoid hammering a failing service", "retry with increasing wait"]
---

## التعريف

استراتيجية إعادة محاولة تكبر فيها المدة بين المحاولات بشكل أسّي، مثل 1 ثم 2 ثم 4 ثم 8 ثوان، لتعطي الخدمة المتعثرة وقتاً للتعافي.

## أين تسمعه؟

في مكتبات عملاء الواجهات البرمجية، ومستهلكي طوابير الرسائل، وإعدادات إعادة المحاولة في مجموعات تطوير السحابة.

## أمثلة

- The client waits 1, 2, then 4 seconds before it retries the payment.
  - ينتظر العميل ثانية، ثم ثانيتين، ثم 4 ثوان قبل أن يعيد محاولة الدفع.
- Add exponential backoff so all clients do not retry at the same moment.
  - أضف تراجعاً أسياً حتى لا يعيد جميع العملاء المحاولة في اللحظة نفسها.

## خطأ شائع

إعادة المحاولة فوراً وبكثرة، فتزيد الخدمة المثقلة حملاً.

## لا تخلطه مع

التراجع الأسي يحدد مدة الانتظار بين المحاولات، أما منطق إعادة المحاولة فيقرر هل نعيد المحاولة ومرات ذلك.
