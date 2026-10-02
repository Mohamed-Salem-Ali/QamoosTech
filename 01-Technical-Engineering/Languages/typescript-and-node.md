# TypeScript & Node.js Idioms

---

### Type Narrowing
- **Pronunciation**: "type NAR-oh-ing" · تايب ناروينج
- **Arabic**: تضييق النوع
- **Definition**: The process by which TypeScript automatically refines a variable's type based on control-flow checks (like `if`, `typeof`, `instanceof`, or custom type guards). This lets you safely access type-specific properties without explicit casting.
- **Context**: TypeScript development, code reviews, type safety discussions.
- **Usage Examples**:
  - *Formal*: "We use discriminated unions with type narrowing to handle API responses — the `status` field determines whether the response body contains `data` or `error`."
  - *Casual*: "Add a type guard here — TypeScript doesn't know it's a string at this point."
- **Common Mistake**: Using `as` type assertions instead of proper type guards. `as` tells the compiler "trust me" but provides no runtime safety. A type guard (`if ('field' in obj)`) gives you both compile-time and runtime safety.
- **Related Terms**: Type Guard, Discriminated Union, `typeof`, `instanceof`, Type Assertion

---

### Middleware (NestJS / Express)
- **Pronunciation**: "MID-ul-wair" · ميدلوير
- **Arabic**: البرمجيات الوسيطة
- **Definition**: Functions that execute in the request-response pipeline, between receiving a request and sending a response. Each middleware can inspect, modify, or reject the request before passing it to the next handler. Used for logging, authentication, CORS, rate limiting, and more.
- **Context**: Backend API architecture, NestJS guards/interceptors, Express middleware.
- **Usage Examples**:
  - *Formal*: "We implemented audit-logging middleware that captures the authenticated user, HTTP method, and response status on every request, writing to an append-only audit table."
  - *Casual*: "Just add it as middleware — every request will go through it automatically."
- **Common Mistake**: Not calling `next()` in Express middleware, which silently hangs the request. In NestJS, the equivalent mistake is forgetting to return from a guard or interceptor, causing the request to time out with no error message.
- **Related Terms**: Guard, Interceptor, Pipe, Filter, Request Pipeline

---

### Prisma
- **Pronunciation**: "PRIZ-muh" · بريزما
- **Arabic**: أداة Prisma لإدارة قواعد البيانات
- **Definition**: A modern TypeScript-first ORM for Node.js. It uses a declarative schema file (`schema.prisma`) to define your data model, then generates a fully type-safe client. Queries return typed objects, and the schema is the single source of truth for both the database and the TypeScript types.
- **Context**: NestJS backends, TypeScript projects, database schema design.
- **Usage Examples**:
  - *Formal*: "We use Prisma with PostgreSQL in our NestJS backend — the generated client provides compile-time type safety on every query, catching schema mismatches before runtime."
  - *Casual*: "Prisma's auto-complete is amazing — it knows every column and relation in your schema."
- **Common Mistake**: Running `prisma generate` but forgetting `prisma migrate deploy` in production. The generated client reflects the schema file, but the database itself needs the migration to actually have the new columns.
- **Related Terms**: ORM, Schema, TypeScript, PostgreSQL, Type Safety
