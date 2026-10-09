---
id: pointer
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [reference, variable, virtual-memory]
aliases: ["dereference", "null pointer", "pointer arithmetic"]
term: "Pointer"
pronunciation: "POYN-ter"
keywords: ["address of a value", "holds a memory address", "c and go pointers", "dereference with star", "null pointer", "pass by address", "عنوان قيمة", "يحمل عنوان ذاكرة", "المؤشرات في C وGo", "فك الإشارة", "المؤشر الفارغ", "التمرير بالعنوان"]
---

## Definition

A pointer is a variable that holds the memory address of another value, rather than the value itself. Following the pointer to reach the value is called dereferencing.

## Where you hear it

In C, C++, Go and Rust code, systems programming, and when comparing with Python or Java references.

## Examples

- In Go, pass a pointer to the struct so the function can change it.
- Dereferencing a null pointer crashes the program.
- The function receives a pointer to the struct, so it updates the original and not a copy.

## Common mistake

Mixing it up with a value copy. Without a pointer the function gets a copy, so changes don't reach the caller.

## Don't confuse with

A reference in Python or Java, which hides the address and can't be used for arithmetic. Pointers expose it.

## Say it at work

- Should this parameter be a pointer?
- Check for nil before dereferencing.
