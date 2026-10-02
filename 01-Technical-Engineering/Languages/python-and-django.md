# Python & Django Idioms

---

### Pythonic
- **Pronunciation**: "pie-THON-ik" · بايثونيك
- **Arabic**: بأسلوب بايثوني
- **Definition**: Code that follows Python's design philosophy — clean, readable, and using the language's built-in features idiomatically. A Pythonic solution uses list comprehensions, context managers, generators, and duck typing rather than porting patterns from other languages.
- **Context**: Code reviews, pair programming, Python style discussions.
- **Usage Examples**:
  - *Formal*: "We refactored the data-processing module to be more Pythonic, replacing explicit loops with list comprehensions and generator expressions."
  - *Casual*: "That nested for-loop with an if-check? There's a much more Pythonic way to write it."
- **Common Mistake**: Overusing comprehensions to the point of unreadability. A one-liner list comprehension with three nested conditions is not "Pythonic" — it's clever but unreadable. If it doesn't fit on one line clearly, use a regular loop.
- **Related Terms**: PEP 8, Duck Typing, List Comprehension, Generator

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

### Decorator
- **Pronunciation**: "DEK-oh-ray-ter" · ديكوريتر
- **Arabic**: مُزخرف (دالة تُغلِّف دالة أخرى)
- **Definition**: A function that wraps another function to extend its behavior without modifying its code. In Python, applied with the `@` syntax. In Django, used extensively for permissions, caching, and request handling.
- **Context**: Python/Django backend code, middleware design, DRY patterns.
- **Usage Examples**:
  - *Formal*: "We use custom decorators to enforce role-based permissions on Django views — `@require_role('admin')` checks the JWT claims before the view executes."
  - *Casual*: "Just slap a `@login_required` on that view — Django handles the redirect automatically."
- **Common Mistake**: Forgetting `@functools.wraps(fn)` inside your custom decorator. Without it, the wrapped function loses its original name and docstring, which breaks debugging and documentation tools.
- **Related Terms**: Higher-order Function, Middleware, `@property`, `@staticmethod`

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
