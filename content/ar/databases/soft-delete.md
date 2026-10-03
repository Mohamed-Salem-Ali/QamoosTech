---
id: soft-delete
category: databases
level: beginner
related: [database, table-row-column]
term: "Soft Delete"
pronunciation: "سوفت ديليت"
---

## التعريف

هي تقنية لإدارة البيانات يتم فيها وضع علامة على السجل (Record) تشير إلى حذفه بدلاً من مسحه نهائياً من قاعدة البيانات. يتم ذلك عادةً باستخدام عمود خاص يحمل قيمة زمنية أو حالة (Flag)، مما يتيح إمكانية استعادة البيانات لاحقاً.

## أين تسمعه؟

عند تصميم هيكلية قاعدة البيانات (Schema)، أو أثناء تطوير واجهات البرمجة (API)، أو عند مناقشة سياسات الاحتفاظ بالبيانات.

## أمثلة

- We implemented a `deleted_at` column to perform soft deletes on user accounts.
  - قمنا بإضافة عمود `deleted_at` لتنفيذ الحذف المنطقي (Soft Delete) لحسابات المستخدمين.
- The system filters out records where the `is_active` flag is false instead of running a delete query.
  - يقوم النظام باستبعاد السجلات التي تحمل علامة `is_active` بقيمة خطأ بدلاً من تنفيذ أمر الحذف الفعلي.

## خطأ شائع

نسيان تحديث جميع استعلامات قاعدة البيانات في التطبيق لاستبعاد السجلات المحذوفة منطقياً، مما يؤدي إلى ظهور بيانات "محذوفة" للمستخدم في واجهة التطبيق.

## لا تخلطه مع

غالباً ما يتم الخلط بين الحذف المنطقي (Soft delete) والحذف الفعلي (Hard delete)؛ فالحذف المنطقي يخفي السجل بتحديث علامة معينة، بينما يقوم الحذف الفعلي بإزالة البيانات نهائياً من قاعدة البيانات باستخدام أمر SQL DELETE.

## قلها في العمل

- Let's use a soft delete for these orders so we can easily restore them if the customer changes their mind.
  - دعنا نستخدم الحذف المنطقي (Soft delete) لهذه الطلبات حتى نتمكن من استعادتها بسهولة إذا غير العميل رأيه.
- Please ensure that the API endpoint filters out any records marked with a soft delete before returning the list to the client.
  - يرجى التأكد من أن نقطة نهاية الـ API تقوم باستبعاد أي سجلات تم وضع علامة حذف منطقي عليها قبل إرجاع القائمة إلى العميل.
