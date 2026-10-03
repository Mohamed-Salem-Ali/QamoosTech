---
id: git-ignore
category: git
level: beginner
related: [repository, commit]
term: "Git Ignore"
pronunciation: "جيت إيجنور"
keywords: ["استبعاد ملفات من جيت","منع تتبع الملفات في جيت","تجاهل ملفات معينة في المستودع","اخفاء ملفات الاعدادات عن جيت","ملف التجاهل في جيت","عدم تتبع مجلد البناء","تخطي الملفات غير المرغوبة","حجب كلمات المرور من الرفع","exclude files from git","stop tracking files in git","ignore unwanted files in repo","hide config files from git","git ignore file","dont track build folder git","gitignore configuration","exclude sensitive files git","ignore logs in git"]
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

## قلها في العمل

- Can someone check my git ignore rules because these log files keep showing up in the status?
  - هل يمكن لأحد مراجعة قواعد git ignore الخاصة بي لأن ملفات السجلات هذه تظهر باستمرار في الحالة؟
- Please update the git ignore file to exclude the new IDE configuration directory before merging this pull request.
  - يرجى تحديث ملف git ignore لاستبعاد مجلد إعدادات بيئة التطوير الجديد قبل دمج طلب السحب هذا.
