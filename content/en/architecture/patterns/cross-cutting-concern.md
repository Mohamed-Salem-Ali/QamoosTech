---
id: cross-cutting-concern
category: architecture
subcategory: patterns
level: intermediate
related: [separation-of-concerns, middleware, decoupling]
tags: [python]
aliases: ["crosscutting concern", "aspect"]
term: "Cross-Cutting Concern"
pronunciation: "KROS-KUT-ing kun-SERN"
keywords: ["needed by many parts", "logging auth timing everywhere", "same code repeated in many functions", "decorator or middleware solution", "aspect of the system", "shared requirement", "حاجة تشترك فيها أجزاء كثيرة", "التسجيل والمصادقة والتوقيت في كل مكان", "الكود نفسه مكرر في دوال كثيرة", "حل بالـ decorator أو الـ middleware", "جانب من النظام", "متطلب مشترك"]
---

## Definition

A cross-cutting concern is a need that many parts of a system share, such as logging, authentication, caching or timing. It does not belong to one feature, so it is handled in one shared place.

## Where you hear it

In architecture reviews, design discussions about decorators and middleware, and code reviews that spot the same few lines everywhere.

## Examples

- Logging is a cross-cutting concern, so we add it with a decorator.
- Authentication runs in middleware instead of inside every view.
- Request timing is a cross-cutting concern, so one middleware records it for every route.

## Common mistake

Copy-pasting the same timing or permission code into each function. One change then needs edits in dozens of places.

## Don't confuse with

Separation of concerns, which is the general idea of splitting responsibilities. A cross-cutting concern is one that cuts across all the splits.

## Say it at work

- Is this a cross-cutting concern or just one feature's job?
- Pull the repeated checks into one place.
