---
id: separation-of-concerns
category: architecture
level: intermediate
related: [design-pattern, component]
term: "Separation of Concerns"
pronunciation: "sep-uh-RAY-shun uv kun-SERNZ"
---
## Definition

Organizing code so each part has one clear job, for example data access, business rules, and display are kept apart.

## Where you hear it

Code reviews and architecture discussions.

## Examples

- This controller also sends emails. Let's separate the concerns.
- Good separation of concerns makes testing easier.

## Common mistake

Splitting code into so many tiny layers that nobody can follow it. Separate only what really changes for different reasons.
