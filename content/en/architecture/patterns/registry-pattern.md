---
id: registry-pattern
category: architecture
subcategory: patterns
level: intermediate
related: [design-pattern, decoupling, dependency-injection]
tags: [python]
aliases: ["registry", "plugin registry", "dispatch table"]
term: "Registry Pattern"
pronunciation: "REJ-is-tree PAT-ern"
keywords: ["lookup by name", "register functions in a dict", "plugin table", "decorator that registers", "avoid long if elif chains", "command handlers by name", "البحث بالاسم", "تسجيل الدوال في قاموس", "جدول الإضافات", "decorator يسجل", "تجنب سلاسل if elif الطويلة", "معالجات الأوامر بالاسم"]
---

## Definition

The registry pattern collects functions or classes into a lookup, usually a dictionary, so code can find the right one by name instead of using a long chain of `if` statements.

## Where you hear it

In plugin systems, CLI command handlers, serializers, and Python code with a `@register` decorator.

## Examples

- Each command registers itself, and the CLI looks it up by name.
- Adding a new exporter means adding one function; no `if` chain to edit.
- The registry maps command names to handlers, so the CLI looks each one up by name.

## Common mistake

Letting the registry become a hidden global that tests and imports change. Keep registration explicit and test it.

## Don't confuse with

Dependency injection, where you pass the needed object in. A registry is a shared lookup the code reaches into.

## Say it at work

- Use a registry so new handlers plug in without editing the core.
- Register the function with the decorator.
