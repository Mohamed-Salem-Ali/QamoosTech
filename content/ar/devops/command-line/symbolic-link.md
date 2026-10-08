---
id: symbolic-link
category: devops
subcategory: command-line
level: beginner
related: [hard-link, file-system, path-converter]
aliases: ["symlink", "soft link", "shortcut"]
term: "Symbolic Link"
translation: "الرابط الرمزي"
pronunciation: "سيمبوليك لينك"
keywords: ["اختصار لملف أو مجلد", "الأمر ln -s", "يشير إلى مسار", "رابط مكسور عند غياب الهدف", "مجلد الإصدار الحالي", "اسم مختصر", "symlink", "shortcut to a file or folder", "ln -s", "points to a path", "broken link when target is gone", "current release folder"]
---

## التعريف

الرابط الرمزي (Symbolic Link أو Symlink) ملف خاص يشير إلى ملف أو مجلد آخر بمساره، كالاختصار. وإن حُذف الهدف أو نُقل انكسر الرابط.

## أين تسمعه؟

في طرفيات لينكس وماك (`ln -s`)، وإعدادات النشر (`current` يشير إلى آخر إصدار)، وnode_modules وملفات الإعداد.

## أمثلة

- `current` is a symlink to the newest release folder.
  - ‏`current` رابط رمزي إلى مجلد أحدث إصدار.
- The symlink is broken because the target moved.
  - الرابط الرمزي مكسور لأن الهدف انتقل.
- The symlink lets the web server find the current release without changing its config.
  - يتيح الرابط الرمزي لخادم الويب العثور على الإصدار الحالي دون تغيير إعداداته.

## خطأ شائع

استخدام هدف نسبي لا يعمل إلا من مجلد واحد. فضّل المسار المطلق أو جرّبه من مكان آخر.

## لا تخلطه مع

الرابط الصلب وهو اسم آخر للبيانات نفسها ويبقى صالحاً حتى لو حُذف الاسم الأول.

## قلها في العمل

- Switch the symlink to roll back.
  - بدّل الرابط الرمزي للتراجع.
- `ls -l` shows where the symlink points.
  - يعرض `ls -l` إلى أين يشير الرابط الرمزي.
