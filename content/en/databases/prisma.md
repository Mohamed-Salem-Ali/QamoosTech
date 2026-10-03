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

## Don't confuse with

Prisma is often confused with TypeORM; while both are ORMs for TypeScript, Prisma uses a custom schema definition language to generate a type-safe client, whereas TypeORM relies heavily on decorators and classes.

## Say it at work

- I'm having some trouble with the Prisma client, could you take a look at my schema file?
- Please ensure that you run the migration command after updating the Prisma schema to keep the database in sync.
