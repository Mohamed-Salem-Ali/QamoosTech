---
id: environment-variable
category: devops
level: beginner
related: [staging-vs-production, containerization]
term: "Environment Variable"
pronunciation: "en-VY-run-ment VAIR-ee-uh-bul"
---
## Definition

A setting stored outside the code, such as a database URL or an API key, so each environment can use different values.

## Where you hear it

Deployment guides and `.env` files.

## Examples

- Put the API key in an environment variable, not in the code.
- The app crashed because `DATABASE_URL` was not set.

## Common mistake

Committing the `.env` file to Git. That leaks secrets to everyone who can see the repo.
