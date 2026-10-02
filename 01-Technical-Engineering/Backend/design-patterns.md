# Design Patterns & Architecture

---

### Dependency Injection (DI)
- **Pronunciation**: "dih-PEN-den-see in-JEK-shun" · ديبيندينسي إنجيكشن
- **Arabic**: حقن التبعية
- **Definition**: A design pattern where a class receives its dependencies (like database services or API clients) from an external source (usually a framework container) rather than creating them itself. This makes code loosely coupled and significantly easier to test.
- **Context**: NestJS architecture, object-oriented design, unit testing.
- **Usage Examples**:
  - *Formal*: "By using dependency injection for the Prisma service, we were able to seamlessly swap in a mock database client for our unit tests."
  - *Casual*: "Don't instantiate the mailer inside the controller; use DI so the framework handles it."
- **Common Mistake**: Hardcoding dependencies using the `new` keyword inside a class, making it impossible to mock those dependencies during testing.
- **Related Terms**: Inversion of Control (IoC), Mocking, Unit Testing

---

### DTO (Data Transfer Object)
- **Pronunciation**: "dee-tee-OH" · دي تي أو
- **Arabic**: كائن نقل البيانات
- **Definition**: An object used to encapsulate data and send it from one subsystem of an application to another. In modern web frameworks (like NestJS), DTOs are used to define the exact shape of an incoming JSON request and automatically validate it before it hits the controller logic.
- **Context**: API design, request validation, NestJS pipes.
- **Usage Examples**:
  - *Formal*: "The `CreateResidentDto` enforces strict validation rules, rejecting requests that lack a properly formatted phone number before they reach the handler."
  - *Casual*: "Add the new email field to the DTO so the validation pipe picks it up."
- **Common Mistake**: Putting business logic or database queries inside a DTO. A DTO should strictly be for carrying and validating data, nothing else.
- **Related Terms**: Payload, Serialization, Validation Pipe

---

### Idempotency
- **Pronunciation**: "eye-dem-POH-ten-see" · آيدمبوتنسي
- **Arabic**: التكرار الآمن / حيادية الأثر
- **Definition**: A property of an operation where applying it multiple times yields the same result as applying it once. In APIs and background tasks, this means if a network fails and a client retries a request, the system doesn't accidentally double-charge or create duplicate records.
- **Context**: REST APIs (PUT/DELETE methods), payment gateways, Celery background workers.
- **Usage Examples**:
  - *Formal*: "We implemented an idempotency key requirement on the billing endpoint to ensure that network retries cannot result in duplicate charges."
  - *Casual*: "Make sure that background task is idempotent, because the message broker might deliver it twice."
- **Common Mistake**: Designing a "charge card" endpoint without idempotency keys. If the client's internet drops while waiting for the response, they will likely click "Pay" again, charging them twice.
- **Related Terms**: Retry Logic, Background Task, Celery

---

### N+1 Query Problem
- **Pronunciation**: "en-plus-WUN KWEER-ee prob-lum" · إن بلس وان كويري بروبلم
- **Arabic**: مشكلة الاستعلام N+1
- **Definition**: A severe performance anti-pattern that occurs when an application queries the database once for a list of $N$ items, and then executes an additional query for each individual item to fetch related data (resulting in $N+1$ total queries).
- **Context**: ORMs (Django, Prisma, TypeORM), database performance optimization.
- **Usage Examples**:
  - *Formal*: "We eliminated the N+1 query problem on the dashboard by using `select_related` to eager-load the user profile data in a single SQL JOIN."
  - *Casual*: "The page is taking 5 seconds to load because there's a massive N+1 loop fetching comments for every post."
- **Common Mistake**: Testing code only with small datasets locally, where the N+1 problem is invisible. It only causes timeouts once deployed to production with thousands of rows.
- **Related Terms**: Eager Loading, Lazy Loading, ORM, `select_related`

---

### Cursor Pagination
- **Pronunciation**: "KER-ser paj-uh-NAY-shun" · كيرسور باجينيشن
- **Arabic**: التصفح باستخدام المؤشر
- **Definition**: A method of paginating API results using a unique identifier (a cursor) from the last item of the previous page, rather than using an `OFFSET` number. This provides stable pagination (no skipping or duplicating items if new records are inserted) and is vastly more performant on massive database tables.
- **Context**: Infinite scroll feeds, high-traffic APIs, large database tables.
- **Usage Examples**:
  - *Formal*: "We migrated the transaction history endpoint from offset to cursor pagination to resolve the performance degradation observed at deep page numbers."
  - *Casual*: "Offset pagination is choking on the million-row table; we need to switch to cursor-based."
- **Common Mistake**: Using standard page numbers (`OFFSET 100000`) for infinite scrolling feeds, which forces the database to scan and discard massive amounts of data just to fetch the next 10 items.
- **Related Terms**: Offset Pagination, Infinite Scroll, API Design
