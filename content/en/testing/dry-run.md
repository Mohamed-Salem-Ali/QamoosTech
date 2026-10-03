---
id: dry-run
category: testing
level: beginner
related: [ci-cd, staging-vs-production]
term: "Dry Run"
pronunciation: "DRAI RUHN"
---

## Definition

A dry run is the execution of a script, command, or deployment to test how it works without making any permanent changes to the database or production environment.

## Where you hear it

During CI/CD pipeline setups, database migrations, and release planning meetings.

## Examples

- Let's do a dry run of the migration script on the staging database before touching production.
- The deployment tool supports a dry run flag so we can preview the changes.

## Common mistake

Assuming a dry run is completely risk-free; it can still consume resources or cause temporary locks even if it does not write data.
