# Django

---

### ORM (Object-Relational Mapping)
- **Pronunciation**: "oh-ar-EM" · أو آر إم
- **Arabic**: ربط الكائنات بقواعد البيانات العلاقية
- **Definition**: A technique that maps database tables to programming language objects, letting you query and manipulate data using your language's syntax instead of raw SQL. Django's ORM and Prisma are popular examples.
- **Context**: Backend development, database queries, model design.
- **Usage Examples**:
  - *Formal*: "Django's ORM generates optimized SQL for complex queries, but we write raw SQL for the reporting aggregation pipeline where the ORM's abstractions add unnecessary overhead."
  - *Casual*: "Just use the ORM for this — we don't need raw SQL for a simple filter."
- **Common Mistake**: The N+1 query problem. Accessing a related object inside a loop triggers a separate query for each iteration. Use `select_related()` (Django) or `include` (Prisma) to eagerly load relationships in a single query.
- **Related Terms**: Django ORM, Prisma, SQLAlchemy, QuerySet, Migration, N+1 Problem

---

### Migration
- **Pronunciation**: "my-GRAY-shun" · مايجريشن
- **Arabic**: ترحيل (قاعدة بيانات)
- **Definition**: A version-controlled file that describes a change to the database schema (adding a table, renaming a column, creating an index). Migrations let you evolve your database incrementally and reproducibly across environments.
- **Context**: Database management, deployment, team collaboration on schemas.
- **Usage Examples**:
  - *Formal*: "After modifying the model, run `python manage.py makemigrations` to generate the migration file, then `migrate` to apply it to the database."
  - *Casual*: "Did you run the migrations? The new column isn't showing up because the migration hasn't been applied."
- **Common Mistake**: Editing migration files by hand after they've been applied to shared environments. This causes migration conflicts. If you need to fix something, create a new migration instead.
- **Related Terms**: Schema, Django `makemigrations`, Prisma `migrate`, Alembic, Rollback

