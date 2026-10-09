---
id: circular-import
category: programming
subcategory: modules-and-libraries
level: intermediate
related: [import, module, package, wildcard-import]
aliases: ["circular dependency"]
term: "Circular Import"
translation: "الاستيراد الدائري"
pronunciation: "سيركيولر إمبورت"
keywords: ["وحدتان تستورد كل منهما الأخرى", "خطأ استيراد لوحدة غير مكتملة", "حلقة استيراد بين الملفات", "اعتماد دائري بين الوحدات", "module imports each other", "cannot import name partially initialized", "import loop between files", "circular dependency between modules", "import error at startup"]
---

## التعريف

وضع تستورد فيه الوحدة A الوحدة B، وتستورد B الوحدة A، بشكل مباشر أو عبر وحدات أخرى. وقد يفشل بايثون برسالة عن وحدة غير مكتملة التهيئة.

## أين تسمعه؟

في أخطاء بدء التشغيل مثل: «لا يمكن استيراد الاسم»، وفي إعادة الهيكلة عندما تتشابك وحدتان.

## أمثلة

- The models file imports the service, and the service imports the models again, which creates a circular import.
  - يستورد ملف النماذج الخدمة، وتستورد الخدمة النماذج مرة أخرى، فيحدث استيراد دائري.
- Move the shared code into a third module to break the cycle.
  - انقل الشيفرة المشتركة إلى وحدة ثالثة لكسر الحلقة.
- The circular import error went away after the helpers moved to their own module.
  - اختفى خطأ الاستيراد الدائري بعد نقل الدوال المساعدة إلى وحدتها الخاصة.

## خطأ شائع

إصلاح الاستيراد الدائري بنقل الاستيراد إلى داخل الدوال في كل مكان. هذا يخفي مشكلة التصميم.

## لا تخلطه مع

الاستيراد الدائري هو اعتماد وحدتين على بعضهما، أما الاعتماد الدائري فهو مشكلة التصميم الأوسع التي تسببه.
