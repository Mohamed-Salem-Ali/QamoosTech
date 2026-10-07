---
id: strong-consistency
category: architecture
subcategory: data-and-state
level: intermediate
related: [eventual-consistency, acid, isolation-level]
aliases: ["linearizability", "strongly consistent"]
term: "Strong Consistency"
translation: "الاتساق القوي"
pronunciation: "سترونج كونسستنسي"
keywords: ["كل قراءة ترى آخر كتابة", "لا قراءات قديمة", "قابل للتسلسل الخطي", "مصدر وحيد للحقيقة", "أبطأ لكنه صحيح", "رصيد البنك", "every read sees the latest write", "no stale reads", "linearizable", "single source of truth", "slower but correct", "bank balance"]
---

## التعريف

الاتساق القوي (Strong Consistency) يضمن أن كل قراءة ترى نتيجة آخر كتابة مكتملة، مهما كانت النسخة التي تسألها.

## أين تسمعه؟

في أنظمة البنوك والحجز، واختيارات قواعد البيانات الموزعة، ونقاشات نظرية CAP.

## أمثلة

- Account balances need strong consistency.
  - أرصدة الحسابات تحتاج اتساقاً قوياً.
- Strong consistency across regions adds latency.
  - الاتساق القوي عبر المناطق يضيف زمن استجابة.

## خطأ شائع

اختياره في كل مكان. يكلف سرعة وتوفراً؛ استخدمه فقط حيث تسبب البيانات القديمة ضرراً حقيقياً.

## لا تخلطه مع

الاتساق النهائي الذي يسمح بخلاف مؤقت بين النسخ مقابل السرعة والتوفر.

## قلها في العمل

- Do we need strong consistency here?
  - هل نحتاج اتساقاً قوياً هنا؟
- Read from the primary to get the latest value.
  - اقرأ من الأساسية للحصول على آخر قيمة.
