---
id: git-ignore
category: git
level: beginner
related: [repository, commit]
term: "Git Ignore"
pronunciation: "جيت إيجنور"
---

## التعريف

هي آلية تُستخدم لتحديد الملفات أو المجلدات التي يجب ألا يتتبعها نظام Git. يتم ذلك عن طريق إنشاء ملف خاص باسم `.gitignore` داخل مستودع المشروع.

## أين تسمعه؟

عند إعداد مشروع جديد، أو عند تنظيف المستودع من الملفات غير الضرورية، أو عند الرغبة في إخفاء ملفات الإعدادات الحساسة.

## أمثلة

- We added the build folder to the `.gitignore` file to keep the repository clean.
  - أضفنا مجلد البناء إلى ملف `.gitignore` للحفاظ على نظافة المستودع.
- Make sure to add your local environment variables file to `.gitignore` so you do not commit secrets.
  - تأكد من إضافة ملف متغيرات البيئة المحلي إلى `.gitignore` حتى لا تقوم برفع بيانات سرية.

## خطأ شائع

الاعتقاد بأن إضافة ملف إلى `.gitignore` سيؤدي إلى إزالته من المستودع إذا كان Git يتتبعه بالفعل؛ يجب عليك إزالته من فهرس Git أولاً باستخدام الأمر `git rm --cached`.
