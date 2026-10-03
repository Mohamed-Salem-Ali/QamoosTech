---
id: dto
category: architecture
level: intermediate
related: [payload, dependency-injection]
term: "DTO (Data Transfer Object)"
pronunciation: "dee-tee-OH"
---
## Definition

A simple object that describes the exact shape of data moving between parts of an app, often used to validate incoming requests.

## Where you hear it

NestJS, API design, and validation.

## Examples

- The `CreateUserDto` rejects requests without a valid email.
- Do not return the database entity directly. Use a response DTO.

## Common mistake

Putting business logic inside a DTO. A DTO only carries and validates data.

## Don't confuse with

DTO is often confused with Entity; while an Entity represents the database schema and business state, a DTO is strictly a data container used for transferring information between application layers.

## Say it at work

- Can you check if the new DTO includes all the fields required by the frontend?
- I have updated the DTO to include an optional phone number field for the user registration endpoint.
