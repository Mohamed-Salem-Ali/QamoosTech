---
id: idempotency-key
category: architecture
subcategory: reliability
level: intermediate
related: [idempotency, retry-logic, race-condition]
aliases: ["idempotency token", "idempotent request key"]
term: "Idempotency Key"
translation: "مفتاح عدم التكرار"
pronunciation: "أيديمبوتنسي كي"
keywords: ["معرّف فريد لكل طلب", "إعادة المحاولة بأمان", "تجنب الخصم المزدوج", "ترويسة عدم التكرار في Stripe", "الخادم يتذكر المفتاح", "نفس المفتاح نفس النتيجة", "unique id per request", "retry safely", "avoid double charge", "stripe idempotency header", "server remembers the key", "same key same result"]
---

## التعريف

مفتاح عدم التكرار (Idempotency Key) قيمة فريدة يرسلها العميل مع الطلب ليتعرف الخادم على إعادة المحاولة ويعيد النتيجة الأصلية بدل تنفيذ الإجراء مرتين.

## أين تسمعه؟

في واجهات الدفع (Stripe وPayPal)، ونقاط إنشاء الطلبات، وأي API قد تسبب فيها مهلة إعادة محاولة.

## أمثلة

- Send an `Idempotency-Key` header so a retry doesn't charge the card twice.
  - أرسل ترويسة `Idempotency-Key` حتى لا تخصم إعادة المحاولة من البطاقة مرتين.
- The server stores the key and the response for 24 hours.
  - يخزن الخادم المفتاح والاستجابة لمدة 24 ساعة.

## خطأ شائع

توليد مفتاح جديد عند كل محاولة. فيرى الخادم طلبات منفصلة ويكرر الإجراء.

## لا تخلطه مع

عدم التكرار (Idempotency) كخاصية عامة. والمفتاح أسلوب لتحقيقها في إجراءات غير idempotent مثل POST.

## قلها في العمل

- Does this endpoint support idempotency keys?
  - هل تدعم هذه النقطة مفاتيح عدم التكرار؟
- Reuse the same key when retrying.
  - أعد استخدام المفتاح نفسه عند إعادة المحاولة.
