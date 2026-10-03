---
id: decorator
category: programming
level: intermediate
related: [function]
term: "Decorator"
pronunciation: "DEK-uh-ray-ter"
---
## Definition

A function that wraps another function to add behavior, such as logging or permission checks, without editing the original code.

## Where you hear it

Python (`@login_required`), TypeScript frameworks like NestJS, and middleware talk.

## Examples

- Add `@login_required` so only signed-in users can open the page.
- We wrote a decorator that logs how long each call takes.

## Common mistake

In Python, forgetting `functools.wraps`, which makes the wrapped function lose its name and docstring.
