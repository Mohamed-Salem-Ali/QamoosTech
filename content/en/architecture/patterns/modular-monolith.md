---
id: modular-monolith
category: architecture
subcategory: patterns
level: intermediate
related: [monolith-vs-microservices, distributed-monolith, separation-of-concerns]
aliases: ["modulith"]
term: "Modular Monolith"
pronunciation: "MOJ-yoo-ler MON-oh-lith"
keywords: ["one deployable clean modules", "boundaries inside one app", "start here before microservices", "enforce module rules", "no network between modules", "easy to split later", "وحدة نشر واحدة بوحدات نظيفة", "حدود داخل تطبيق واحد", "ابدأ هنا قبل الخدمات المصغرة", "فرض قواعد الوحدات", "لا شبكة بين الوحدات", "سهل التقسيم لاحقاً"]
---

## Definition

A modular monolith is a single application, deployed as one unit, whose code is organised into well-separated modules with clear boundaries and limited ways to call each other.

## Where you hear it

In architecture discussions about starting simple, "monolith first" advice and migration planning.

## Examples

- We run a modular monolith: billing and members are separate modules in one app.
- Modules only talk through public interfaces.

## Common mistake

Letting modules reach into each other's tables or internals. That turns it into a tangled big ball of mud.

## Don't confuse with

Microservices, where each module is deployed and scaled separately over a network.

## Say it at work

- Keep it a modular monolith until we need to scale parts separately.
- Enforce the module boundaries in CI.
