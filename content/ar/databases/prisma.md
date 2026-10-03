---
id: prisma
category: databases
level: intermediate
related: [orm, migration, schema]
term: "Prisma"
translation: "بريزما"
pronunciation: "بريزما"
keywords: ["أورم لتيسكريبت لقواعد البيانات","بريزما لقواعد البيانات","أداة ربط قواعد البيانات تيسكريبت","توليد كود قاعدة البيانات تلقائيا","أورم يعتمد على ملف مخطط","إدارة قاعدة البيانات في نكست جي إس","الفرق بين بريزما وتايب أورم","تشغيل هجرة قاعدة البيانات بريزما","typescript orm for databases","generate type safe db client","node js schema based orm","prisma vs typeorm","prisma migration tool","schema file database mapper","nextjs typescript database orm","run prisma generate command"]
---
## التعريف

ORM للغة TypeScript تصف فيه بياناتك في ملف schema فيولّد لك عميلًا آمن الأنواع لاستعلاماتك.

## أين تسمعه؟

مشاريع NestJS وNext.js.

## أمثلة

- We use Prisma with PostgreSQL.
  - نستخدم Prisma مع PostgreSQL.
- Run `prisma migrate deploy` in production, not only `generate`.
  - شغّل `prisma migrate deploy` في بيئة الإنتاج، وليس `generate` فقط.

## خطأ شائع

تشغيل `prisma generate` ونسيان تطبيق الـ migration. يتحدّث العميل لكن قاعدة البيانات لا تتحدّث.

## لا تخلطه مع

يتم الخلط غالبًا بين Prisma وTypeORM؛ فبينما كلاهما ORM للغة TypeScript، يستخدم Prisma لغة تعريف schema خاصة لتوليد عميل آمن الأنواع، بينما يعتمد TypeORM بشكل أساسي على الـ decorators والكلاسات.

## قلها في العمل

- I'm having some trouble with the Prisma client, could you take a look at my schema file?
  - أواجه بعض المشاكل مع عميل Prisma، هل يمكنك إلقاء نظرة على ملف الـ schema الخاص بي؟
- Please ensure that you run the migration command after updating the Prisma schema to keep the database in sync.
  - يرجى التأكد من تشغيل أمر الـ migration بعد تحديث ملف الـ schema الخاص بـ Prisma للحفاظ على تزامن قاعدة البيانات.
