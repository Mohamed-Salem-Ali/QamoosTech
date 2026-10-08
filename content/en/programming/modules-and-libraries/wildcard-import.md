---
id: wildcard-import
category: programming
subcategory: modules-and-libraries
level: intermediate
related: [import, module, namespace, circular-import]
tags: [python]
aliases: ["star import"]
term: "Wildcard Import"
pronunciation: "WIL-kard IM-port"
keywords: ["from module import star", "import everything from a module", "star import in python", "name clashes from imports", "linter warns about import star", "unclear where a name comes from", "الاستيراد بالنجمة", "استيراد كل شيء من وحدة", "استيراد بالرمز *", "تعارض أسماء الاستيراد", "المحلل يحذّر من الاستيراد الشامل", "لا يُعرف مصدر الاسم"]
---

## Definition

An import that brings every public name from a module into the current file, written as from module import *. It is quick to type, but it hides where each name comes from.

## Where you hear it

In quick scripts, older code, and linter warnings.

## Examples

- from math import * brings sqrt, pi and every other public name into the file.
- Import only the names you use: from math import sqrt, pi.
- Linters warn about it, because a later import can silently replace an earlier name.

## Common mistake

Using it in shared code. Two modules may export the same name, and the one imported last wins without any error.

## Don't confuse with

A normal import such as import math keeps names under the module name, so math.sqrt shows where sqrt comes from. A wildcard import removes that prefix.

## Say it at work

- Can we swap the star import for explicit names so the linter stays quiet?
- Star imports make review hard: which module does this sqrt come from?
