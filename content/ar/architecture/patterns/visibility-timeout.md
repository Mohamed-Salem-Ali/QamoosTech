---
id: visibility-timeout
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue, at-least-once-delivery, dead-letter-queue]
aliases: ["sqs visibility timeout"]
term: "Visibility Timeout"
translation: "مهلة الإخفاء"
pronunciation: "فيزيبيليتي تايم أوت"
keywords: ["الرسالة مخفية أثناء المعالجة", "خدمة SQS", "تعود إن لم تُحذف", "العامل انهار", "اضبطها أطول من وقت المعالجة", "تجنب المعالجة المزدوجة", "message hidden while processing", "sqs", "reappears if not deleted", "worker crashed", "set longer than processing time", "avoid double processing"]
---

## التعريف

في الطوابير مثل AWS SQS، مهلة الإخفاء (Visibility Timeout) هي المدة التي تبقى فيها الرسالة مخفية عن المستهلكين الآخرين بعد أن يأخذها عامل. وإن لم يحذفها العامل في الوقت ظهرت من جديد وأُعيدت المحاولة.

## أين تسمعه؟

في إعدادات SQS وطوابير أخرى، وحوادث تُعالج فيها الرسائل مرتين.

## أمثلة

- The job takes 90 seconds but the timeout is 30, so it runs twice.
  - تستغرق المهمة 90 ثانية بينما المهلة 30 فتعمل مرتين.
- Extend the visibility timeout for long jobs.
  - مدّد مهلة الإخفاء للمهام الطويلة.

## خطأ شائع

ضبطها أقصر من المهمة. فتعود الرسالة بينما العامل الأول ما زال مشغولاً.

## لا تخلطه مع

طابور الرسائل الميتة الذي يجمع الرسائل التي تظل تفشل بعد عدة محاولات.

## قلها في العمل

- Raise the visibility timeout above the max job time.
  - ارفع مهلة الإخفاء فوق أقصى وقت للمهمة.
- Delete the message only after success.
  - احذف الرسالة بعد النجاح فقط.
