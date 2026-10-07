---
id: package-dependency
category: devops
subcategory: environments-and-packaging
level: beginner
related: [pip, lock-file, version-pinning]
tags: [python]
aliases: ["requirements.txt", "optional dependencies", "extras", "dev dependencies", "python dependency"]
term: "Package Dependency"
translation: "اعتمادية الحزمة"
pronunciation: "باكدج ديبندنسي"
keywords: ["مكتبة يحتاجها مشروعك", "ملف requirements.txt", "حزم إضافية اختيارية", "تثبيت الاعتماديات", "اعتماديات التطوير", "الحزم المسرودة في المشروع", "library your project needs", "requirements.txt", "optional extras", "install dependencies", "dev dependencies", "packages listed in the project"]
---

## التعريف

اعتمادية الحزمة (Package Dependency) مكتبة يحتاجها مشروعك ليعمل. تسردها المشاريع في ملف مثل `requirements.txt`، وبعضها إضافات اختيارية تُثبَّت عند الطلب فقط.

## أين تسمعه؟

في أدلة الإعداد، وتنبيهات الأمان حول المكتبات المصابة بثغرات، وعند تحديث مشروع.

## أمثلة

- Add `requests` as a dependency and reinstall.
  - أضف `requests` كاعتمادية وأعد التثبيت.
- Test tools are dev dependencies, not needed in production.
  - أدوات الاختبار اعتماديات تطوير لا حاجة لها في الإنتاج.

## خطأ شائع

استخدام الكلمة بمعناها في إدارة المشاريع. هنا هي مكتبة وليست مهمة تنتظر مهمة أخرى.

## لا تخلطه مع

اعتمادية المهام في التخطيط الرشيق حيث يجب أن تنتهي مهمة قبل أن تبدأ أخرى.

## قلها في العمل

- Which dependency pulled this in?
  - أي اعتمادية جلبت هذه؟
- Keep the dependency list small.
  - أبقِ قائمة الاعتماديات صغيرة.
