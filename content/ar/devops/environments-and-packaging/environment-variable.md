---
id: environment-variable
category: devops
subcategory: environments-and-packaging
level: beginner
related: [staging-vs-production, containerization, yaml]
term: "Environment Variable"
translation: "متغير بيئة"
pronunciation: "إنفايرونمنت فيريابل"
keywords: ["حفظ الإعدادات خارج الكود","تخزين مفاتيح الربط بأمان","متغيرات بيئة العمل","إعدادات قاعدة البيانات الخارجية","ملف المتغيرات البيئية","متغير بيئة","إنفايرونمنت فيريابل","إعدادات التشغيل الخارجية","store secrets outside code","database url in config","env file configuration","api key storage setting","runtime system variables","pass configuration to app","hidden settings for deployment","environment variables","env var","dotenv file"]
---
## التعريف

إعداد يُخزَّن خارج الشيفرة، مثل رابط قاعدة البيانات أو مفتاح API، لتستخدم كل بيئة قيمًا مختلفة.

## أين تسمعه؟

أدلة النشر وملفات `.env`.

## أمثلة

- Put the API key in an environment variable, not in the code.
  - ضع مفتاح الـ API في متغير بيئة لا في الشيفرة.
- The app crashed because `DATABASE_URL` was not set.
  - انهار التطبيق لأن `DATABASE_URL` لم يكن مضبوطًا.
- Each server reads the database URL from an environment variable set on its own host.
  - يقرأ كل خادم عنوان قاعدة البيانات من متغيّر بيئة مُعدّ على الجهاز نفسه.

## خطأ شائع

رفع ملف `.env` إلى Git. هذا يسرّب الأسرار لكل من يستطيع رؤية المستودع.

## لا تخلطه مع

غالبًا ما يتم الخلط بين متغيرات البيئة وملفات الإعدادات، لكن متغيرات البيئة يتم حقنها في وقت التشغيل بواسطة النظام، بينما ملفات الإعدادات هي ملفات ثابتة يتم تضمينها مع التطبيق.

## قلها في العمل

- Make sure you update the environment variable for the new API endpoint before you restart the service.
  - تأكد من تحديث متغير البيئة لنقطة نهاية الـ API الجديدة قبل إعادة تشغيل الخدمة.
- I have updated the deployment configuration to include the required environment variable for the staging server.
  - لقد قمت بتحديث إعدادات النشر لتتضمن متغير البيئة المطلوب لخادم الاختبار.
