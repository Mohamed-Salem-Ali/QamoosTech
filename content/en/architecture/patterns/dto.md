---
id: dto
category: architecture
subcategory: patterns
level: intermediate
related: [payload, dependency-injection]
term: "DTO (Data Transfer Object)"
pronunciation: "dee-tee-OH"
keywords: ["object to carry data","define api request shape","validate incoming json payload","separate database from api","data transfer object","simple data container class","transfer data between layers","dto vs entity","model for api response","define request body structure","data transfer pattern","كائن لنقل البيانات","تعريف شكل البيانات الواردة","حاوية لنقل المعلومات","فصل قاعدة البيانات عن الواجهة","التحقق من بيانات الطلب","هيكل بيانات للـ api","الفرق بين الكيان والـ dto","نموذج نقل البيانات","كائن لتمرير المعطيات","تحديد حقول الطلب","دي تي أو"]
---
## Definition

A simple object that describes the exact shape of data moving between parts of an app, often used to validate incoming requests.

## Where you hear it

NestJS, API design, and validation.

## Examples

- The `CreateUserDto` rejects requests without a valid email.
- Do not return the database entity directly. Use a response DTO.
- The API accepts a CreateOrderDto, so invalid fields are rejected before they reach the service.

## Common mistake

Putting business logic inside a DTO. A DTO only carries and validates data.

## Don't confuse with

DTO is often confused with Entity; while an Entity represents the database schema and business state, a DTO is strictly a data container used for transferring information between application layers.

## Say it at work

- Can you check if the new DTO includes all the fields required by the frontend?
- I have updated the DTO to include an optional phone number field for the user registration endpoint.
