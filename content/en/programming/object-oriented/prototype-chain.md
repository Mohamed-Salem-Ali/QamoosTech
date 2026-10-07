---
id: prototype-chain
category: programming
subcategory: object-oriented
level: intermediate
related: [inheritance, object, class]
tags: [javascript]
aliases: ["prototype", "prototypal inheritance"]
term: "Prototype Chain"
pronunciation: "PROH-tuh-type CHAYN"
keywords: ["javascript inheritance", "object looks up its parent", "__proto__", "property lookup walks up", "class is sugar over prototypes", "object.create", "الوراثة في جافاسكربت", "الكائن يبحث في أبيه", "الخاصية proto", "البحث عن الخاصية يصعد", "الـ class غلاف فوق النماذج الأولية", "الدالة Object.create"]
---

## Definition

In JavaScript every object can link to another object, its prototype. When you read a property that the object doesn't have, JavaScript follows these links up the prototype chain until it finds it or reaches the end.

## Where you hear it

In JavaScript interviews, explanations of `class` and `extends`, and debugging "why does this object have that method?".

## Examples

- `arr.map` isn't on the array itself; it's found on `Array.prototype` up the chain.
- A JavaScript `class` is syntax over prototype links.

## Common mistake

Modifying built-in prototypes such as `Array.prototype`. It affects every array in the program and breaks libraries.

## Don't confuse with

Class-based inheritance in Python or Java, where objects come from a class blueprint. JavaScript objects link directly to other objects.

## Say it at work

- Look at the prototype chain to see where it's defined.
- `hasOwnProperty` ignores the chain.
