---
id: prisma
category: databases
level: intermediate
related: [orm, migration, schema]
term: "Prisma"
translation: "بريزما"
pronunciation: "بريزما"
---
## التعريف

ORM للغة TypeScript تصف فيه بياناتك في ملف schema فيولّد لك عميلًا آمن الأنواع لاستعلاماتك.

## أين تسمعه؟

مشاريع NestJS وNext.js.

## أمثلة

- We use Prisma with PostgreSQL.
  - نستخدم Prisma مع PostgreSQL.
- Run `prisma migrate deploy` in production, not only `generate`.
  - شغّل `prisma migrate deploy` في الإنتاج، وليس `generate` فقط.

## خطأ شائع

تشغيل `prisma generate` ونسيان تطبيق الـ migration. يتحدّث العميل لكن قاعدة البيانات لا تتحدّث.
