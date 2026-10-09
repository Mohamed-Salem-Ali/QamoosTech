---
id: circular-import
category: programming
subcategory: modules-and-libraries
level: intermediate
related: [import, module, package, wildcard-import]
aliases: ["circular dependency"]
term: "Circular Import"
pronunciation: "SUR-kyuh-ler IM-port"
keywords: ["module imports each other", "cannot import name partially initialized", "import loop between files", "circular dependency between modules", "import error at startup", "وحدتان تستورد كل منهما الأخرى", "خطأ استيراد لوحدة غير مكتملة", "حلقة استيراد بين الملفات", "اعتماد دائري بين الوحدات"]
---

## Definition

A situation where module A imports module B, and module B imports module A, directly or through other modules. Python may fail with a partially initialized module error.

## Where you hear it

In startup errors such as "cannot import name", and in refactoring when two modules grow tangled.

## Examples

- The models file imports the service, and the service imports the models again, which creates a circular import.
- Move the shared code into a third module to break the cycle.
- The circular import error went away after the helpers moved to their own module.

## Common mistake

Fixing a circular import by moving the import inside a function everywhere. It hides the design problem.

## Don't confuse with

A circular import is two modules depending on each other. A circular dependency is the broader design problem that causes it.
