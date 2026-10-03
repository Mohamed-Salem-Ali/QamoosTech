---
id: graphql
category: web-apis
level: intermediate
related: [restful-api, endpoint]
term: "GraphQL"
pronunciation: "GRAF-ik-ew-el"
---
## Definition

An API style where the client sends one query that describes exactly which fields it wants, and the server returns only those.

## Where you hear it

Frontend-heavy teams, mobile apps, and "REST vs GraphQL" debates.

## Examples

- With GraphQL the app fetches the user and orders in one request.
- The query asks only for `name` and `email`.

## Common mistake

Thinking GraphQL is always better than REST. It adds complexity such as caching and query cost control.

## Don't confuse with

GraphQL is often mixed up with REST, but while REST uses multiple fixed endpoints for different resources, GraphQL uses a single endpoint where clients request the exact shape of the data they need.

## Say it at work

- Let's migrate this user profile view to GraphQL so we can stop fetching unused fields over the mobile network.
- Please review the new GraphQL schema changes to ensure the query complexity limits are properly configured.
