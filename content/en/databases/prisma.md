---
id: prisma
category: databases
level: intermediate
related: [orm, migration, schema]
term: "Prisma"
pronunciation: "PRIZ-muh"
---
## Definition

A TypeScript ORM where you describe your data in a schema file and it generates a type-safe client for your queries.

## Where you hear it

NestJS and Next.js backends.

## Examples

- We use Prisma with PostgreSQL.
- Run `prisma migrate deploy` in production, not only `generate`.

## Common mistake

Running `prisma generate` and forgetting to apply the migration. The client updates, but the database does not.
