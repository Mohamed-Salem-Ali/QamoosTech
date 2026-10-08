---
id: import
category: programming
subcategory: modules-and-libraries
level: beginner
related: [module, package, standard-library, circular-import, wildcard-import]
tags: [python, javascript]
aliases: ["import statement", "relative import", "absolute import"]
term: "Import"
pronunciation: "IM-port"
keywords: ["use code from another file", "import statement", "from x import y", "circular import error", "importerror", "bring in a library", "استخدام كود من ملف آخر", "جملة import", "‏from x import y", "خطأ الاستيراد الدائري", "جلب مكتبة"]
---

## Definition

Import is how you bring code from another module or package into the current file, so you can use its functions and classes.

## Where you hear it

At the top of nearly every Python or JavaScript file, and in errors such as `ImportError` or circular imports.

## Examples

- Import only the names you need from the module.
- A circular import happens when two modules import each other.
- The report script imports the date helpers from the utils module.

## Common mistake

Using `from module import *`. It hides where names come from and can overwrite your own.

## Don't confuse with

Include or copy-paste, which duplicates code. Import refers to the original and loads it once.

## Say it at work

- Move that import inside the function to break the cycle.
- Group the imports: standard library first, then third-party, then ours.
