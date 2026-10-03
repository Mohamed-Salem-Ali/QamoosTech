---
id: stateless-vs-stateful
category: architecture
level: intermediate
related: [load-balancer, serverless, restful-api]
term: "Stateless vs Stateful"
pronunciation: "STAYT-les versuhs STAYT-ful"
---

## Definition

Stateless systems do not store client session data between requests, meaning every request must contain all necessary information. Stateful systems, however, remember previous interactions and store client state on the server across multiple requests.

## Where you hear it

During system design discussions, scaling planning, and when choosing how to manage user sessions and API architecture.

## Examples

- We need to design a stateless API so any instance behind the load-balancer can handle the request.
- Shopping carts are often stateful because the server must remember what items the user added across different pages.
- Migrating from a stateful architecture to a stateless one made our application much easier to scale horizontally.

## Common mistake

Assuming stateless means the application never saves data anywhere, when it actually means the server doesn't keep session memory about a specific client between independent HTTP requests.
