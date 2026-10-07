---
id: hard-link
category: devops
subcategory: command-line
level: intermediate
related: [symbolic-link, file-system, process]
aliases: ["inode", "link count"]
term: "Hard Link"
translation: "الرابط الصلب"
pronunciation: "هارد لينك"
keywords: ["اسم آخر للملف نفسه", "نفس الـ inode", "الملف يبقى حتى تُحذف كل الروابط", "الأمر ln", "لا يعبر أنظمة الملفات", "عدد الروابط", "another name for the same file", "same inode", "file stays until all links removed", "ln command", "cannot cross filesystems", "link count"]
---

## التعريف

الرابط الصلب (Hard Link) اسم إضافي لبيانات الملف نفسها على القرص. كل الأسماء متساوية ولا تُحرَّر البيانات إلا عند حذف آخر اسم.

## أين تسمعه؟

في إدارة لينكس (`ln file link`)، وأدوات النسخ الاحتياطي التي توفر المساحة، ومقررات أنظمة الملفات.

## أمثلة

- Both names point to the same inode; deleting one keeps the data.
  - كلا الاسمين يشيران إلى inode واحد؛ وحذف أحدهما يُبقي البيانات.
- `ls -l` shows the link count.
  - يعرض `ls -l` عدد الروابط.

## خطأ شائع

الظن بأنه نسخة. عدّل اسماً واحداً فتعدّل الكل لأن الملف واحد فقط.

## لا تخلطه مع

الرابط الرمزي وهو ملف صغير يخزن مسار ملف آخر فقط وينكسر إن انتقل الهدف.

## قلها في العمل

- Use a hard link to avoid duplicating the file.
  - استخدم رابطاً صلباً لتجنب تكرار الملف.
- The link count is 2.
  - عدد الروابط 2.
