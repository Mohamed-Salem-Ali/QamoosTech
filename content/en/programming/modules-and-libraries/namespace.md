---
id: namespace
category: programming
subcategory: modules-and-libraries
level: beginner
related: [module, package, import, wildcard-import]
term: "Namespace"
pronunciation: "NAYM-spays"
keywords: ["group names so they do not clash", "same name in two modules", "name prefix to avoid conflict", "scope of names", "namespace in python", "تجميع الأسماء لتجنب التعارض", "الاسم نفسه في وحدتين", "بادئة للاسم لتجنب التعارض", "نطاق الأسماء"]
---

## Definition

A container that groups names so that the same name can exist in different places without a clash, such as math.sqrt and numpy.sqrt, or a module that holds its own functions.

## Where you hear it

In Python imports, XML and C# code, and in naming discussions about large projects.

## Examples

- Use the namespace math.sqrt so it does not clash with another sqrt.
- Keep the logging helpers in their own namespace.
- The billing code and the shipping code both define a create function, each in its own namespace.

## Common mistake

Using wildcard imports, such as from module import *, which pull many names into your namespace and cause clashes.

## Don't confuse with

A namespace groups names in code. A module is one file that defines some of them, and a package is a folder of modules. A Linux namespace is a different idea: it isolates system resources for a process, as used by containers.
