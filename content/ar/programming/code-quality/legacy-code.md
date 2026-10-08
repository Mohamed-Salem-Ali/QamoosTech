---
id: legacy-code
category: programming
subcategory: code-quality
level: beginner
related: [refactoring, tech-debt, brownfield]
aliases: ["legacy system"]
term: "Legacy Code"
translation: "الشيفرة القديمة"
pronunciation: "ليغاسي كود"
keywords: ["شيفرة قديمة يصعب تغييرها", "شيفرة لا يفهمها أحد", "نظام قديم ما زال في الإنتاج", "قاعدة شيفرة قديمة", "old code that is hard to change", "code nobody understands", "old system still in production", "legacy codebase", "code without tests"]
---

## التعريف

شيفرة موجودة يصعب تغييرها بأمان، غالباً لأنها بلا اختبارات، أو لأن كاتبيها غادروا، أو لأن تصميمها لم يعد يناسب المنتج. ما زالت تعمل، ويعتمد عليها الناس.

## أين تسمعه؟

في نقاشات التخطيط عن الأنظمة القديمة، وفي التقديرات، وفي التذاكر التي تقول: «تعامل مع هذا بحذر».

## أمثلة

- The billing module is legacy code, and nobody wants to touch it.
  - وحدة الفوترة شيفرة قديمة، ولا يرغب أحد في لمسها.
- We added tests before refactoring the legacy code.
  - أضفنا اختبارات قبل إعادة هيكلة الشيفرة القديمة.
- The old reporting service is legacy code, so every change needs extra testing.
  - خدمة التقارير القديمة شيفرة موروثة (legacy)، لذلك يحتاج كل تغيير إلى اختبار إضافي.

## خطأ شائع

إعادة كتابة الشيفرة القديمة من الصفر دون فهم سبب عملها. الشيفرة القديمة كثيراً ما تخفي قواعد سيغفلها الكود الجديد.

## لا تخلطه مع

الشيفرة القديمة شيفرة قديمة ما زالت مهمة، أما الدَّين التقني فهو كلفة الاختصارات التي ستبطئ الفريق.
