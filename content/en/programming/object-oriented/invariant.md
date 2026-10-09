---
id: invariant
category: programming
subcategory: object-oriented
level: intermediate
related: [class, encapsulation, constraint]
term: "Invariant"
pronunciation: "in-VAIR-ee-unt"
keywords: ["rule that must always be true", "valid object state", "class guarantees", "never allow invalid state", "validate in constructor", "design by contract", "قاعدة يجب أن تتحقق دائماً", "حالة كائن صالحة", "ضمانات الصنف", "عدم السماح بحالة غير صالحة", "التحقق في الـ constructor", "التصميم بالعقد"]
---

## Definition

An invariant is a rule that must always be true for an object to be valid, for example "a balance is never negative". A good class makes it impossible to break.

## Where you hear it

In object design, domain modelling, and code reviews about validating data at the edges of a class.

## Examples

- The constructor enforces the invariant: weeks must be a positive number.
- Breaking the invariant would leave the object in an invalid state.
- Every order must have a positive total, an invariant that the Order class checks on each change.

## Common mistake

Checking the rule only in one place while other methods can still break it. Protect it everywhere the data can change.

## Don't confuse with

A constraint in a database, which enforces a similar rule on stored rows. An invariant lives in the code of the object.

## Say it at work

- What invariant does this class guarantee?
- Let's validate in the constructor so the invariant always holds.
