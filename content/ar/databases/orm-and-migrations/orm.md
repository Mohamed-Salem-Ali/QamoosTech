---
id: orm
category: databases
subcategory: orm-and-migrations
level: intermediate
related: [query, prisma, n-plus-one]
term: "ORM"
translation: "الربط الكائني العلائقي"
pronunciation: "أو آر إم"
keywords: ["الربط الكائني العلائقي","التعامل مع قواعد البيانات بالكائنات","أداة لربط الجداول بالكائنات البرمجية","استعلام قواعد البيانات بدون اس كيو ال","كتابة استعلامات قاعدة البيانات بالكود","أو آر إم","تحويل الجداول إلى كائنات برمجية","بديل كتابة استعلامات اس كيو ال","write database queries with objects","map database tables to code","query database without writing sql","object relational mapping","prisma typeorm sequelize tool","generate sql from code objects","interact with database using classes","avoid writing raw sql queries"]
---
## التعريف

أداة تتيح لك التعامل مع جداول قاعدة البيانات عبر كائنات ودوال في لغتك بدل كتابة SQL.

## أين تسمعه؟

نقاشات Django وPrisma وTypeORM وSQLAlchemy.

## أمثلة

- The ORM generates the SQL for us.
  - يولّد الـ ORM شيفرة SQL نيابة عنا.
- For this heavy report, raw SQL is faster than the ORM.
  - في هذا التقرير الثقيل، SQL الخام أسرع من الـ ORM.

## خطأ شائع

عدم النظر أبدًا إلى SQL الذي يولّده. قد يخفي الـ ORM استعلامات بطيئة.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ ORM والـ ODM؛ فبينما يقوم الـ ORM بربط الكائنات بجداول قواعد البيانات العلائقية، صُمم الـ ODM خصيصاً لقواعد البيانات الموجهة للمستندات مثل MongoDB.

## قلها في العمل

- Let's switch to raw queries for this endpoint because the ORM is generating way too many joins.
  - دعنا ننتقل إلى استعلامات SQL الخام لهذا الـ endpoint لأن الـ ORM يقوم بإنشاء الكثير من الـ joins.
- I recommend using the ORM for these simple CRUD operations to keep the codebase clean and maintainable.
  - أوصي باستخدام الـ ORM لعمليات الـ CRUD البسيطة هذه للحفاظ على نظافة الشيفرة البرمجية وسهولة صيانتها.
