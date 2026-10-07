---
id: structural-typing
category: programming
subcategory: types-and-typing
level: intermediate
related: [duck-typing, interface, type-hint]
tags: [python, typescript]
aliases: ["protocol", "structural subtyping"]
term: "Structural Typing"
translation: "التنميط البنيوي"
pronunciation: "ستركتشرال تايبينج"
keywords: ["النوع بالشكل لا بالاسم", "Protocol في بايثون", "duck typing مع أنواع", "واجهة دون وراثة", "الأنواع البنيوية في TypeScript", "يملك الدوال المطلوبة", "type by shape not name", "protocol in python", "typed duck typing", "interface without inheritance", "typescript structural types", "has the right methods"]
---

## التعريف

التنميط البنيوي (Structural Typing) يقرر هل يناسب الكائن نوعاً ما بالدوال والحقول التي يملكها، لا بالصنف الذي يرث منه. في بايثون يتحقق هذا عبر `Protocol`.

## أين تسمعه؟

في TypeScript، وفي نقاشات أنواع بايثون، وعند تصميم كود يجب أن يقبل أي كائن يملك الدوال المناسبة.

## أمثلة

- Any class with a `due()` method satisfies the protocol, even if it never mentions it.
  - أي صنف له دالة `due()` يطابق الـ protocol حتى لو لم يذكره أبداً.
- TypeScript types are structural, so matching shapes are interchangeable.
  - أنواع TypeScript بنيوية، لذا الأشكال المتطابقة قابلة للتبادل.

## خطأ شائع

الخلط بينه وبين الوراثة. في التنميط البنيوي لا يحتاج الصنف إلى وراثة أي شيء ليطابق النوع.

## لا تخلطه مع

التنميط الاسمي (Nominal Typing) حيث يجب أن يعلن الصنف أنه ينفّذ واجهة ما. هكذا تعمل Java.

## قلها في العمل

- Define a protocol instead of forcing everyone to inherit from a base class.
  - عرّف protocol بدلاً من إجبار الجميع على الوراثة من صنف أساسي.
- It's structural: anything with these two methods works.
  - إنه بنيوي: أي شيء له هاتان الدالتان يعمل.
