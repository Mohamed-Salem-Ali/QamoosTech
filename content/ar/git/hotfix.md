---
id: hotfix
category: git
level: intermediate
related: [feature-branch, rollback, ci-cd]
term: "Hotfix"
translation: "إصلاح عاجل"
pronunciation: "هوت فيكس"
keywords: ["إصلاح عاجل في الإنتاج", "إصلاح خطأ في الإنتاج", "تصحيح طارئ", "إصلاح دون انتظار الإصدار", "urgent fix in production", "production bug fix", "fix branch from main", "emergency patch", "fix without waiting for release"]
---

## التعريف

إصلاح عاجل يُطبَّق مباشرةً على فرع الإنتاج، خارج دورة الإصدار المعتادة، لمعالجة مشكلة خطيرة بسرعة.

## أين تسمعه؟

في قنوات الحوادث وملاحظات الإصدار، حين يتعطّل الإنتاج ولا يحتمل الانتظار للإصدار التالي.

## أمثلة

- We pushed a hotfix for the login error at midnight.
  - دفعنا إصلاحاً عاجلاً لخطأ تسجيل الدخول عند منتصف الليل.
- After the hotfix, merge it back into the development branch.
  - بعد الإصلاح العاجل، ادمجه مرة أخرى في فرع التطوير.
- The hotfix went out within an hour, and the login errors stopped.
  - خرج الإصلاح العاجل خلال ساعة، وتوقفت أخطاء تسجيل الدخول.

## خطأ شائع

نسيان دمج الإصلاح العاجل مرة أخرى في فرع التطوير، فيعود الخطأ في الإصدار التالي.

## لا تخلطه مع

الإصلاح العاجل تعديل صغير وعاجل، أما التراجع (Rollback) فيعيد الإصدار إلى نسخة سابقة.
