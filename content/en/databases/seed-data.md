---
id: seed-data
category: databases
level: beginner
related: [database, migration, schema]
term: "Seed Data"
pronunciation: "SEED DAY-tuh"
---

## Definition

Seed data refers to the initial set of records loaded into a database when it is first set up or reset. It often includes essential configuration, default roles, or sample entries needed for the application to function correctly.

## Where you hear it

- During local development setup
- In automated testing and database migrations
- When deploying a new environment

## Examples

- Run the database seeder command to populate the roles table with default values.
- The test suite automatically clears the database and loads seed data before every run.

## Common mistake

Treating seed data as production data, or forgetting that seed scripts should be idempotent so running them multiple times does not create unwanted duplicates.
