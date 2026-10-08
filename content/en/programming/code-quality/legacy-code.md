---
id: legacy-code
category: programming
subcategory: code-quality
level: beginner
related: [refactoring, tech-debt, brownfield]
aliases: ["legacy system"]
term: "Legacy Code"
pronunciation: "LEG-see kohd"
keywords: ["old code that is hard to change", "code nobody understands", "old system still in production", "legacy codebase", "code without tests", "شيفرة قديمة يصعب تغييرها", "شيفرة لا يفهمها أحد", "نظام قديم ما زال في الإنتاج", "قاعدة شيفرة قديمة"]
---

## Definition

Existing code that is hard to change safely, often because it has no tests, its authors have left, or its design no longer fits the product. It still runs, and people depend on it.

## Where you hear it

In planning discussions about old systems, in estimates, and in tickets that say "touch this carefully".

## Examples

- The billing module is legacy code, and nobody wants to touch it.
- We added tests before refactoring the legacy code.
- The old reporting service is legacy code, so every change needs extra testing.

## Common mistake

Rewriting legacy code from scratch without understanding why it works. The old code often hides rules that the new code will miss.

## Don't confuse with

Legacy code is old code that still matters. Technical debt is the cost of shortcuts that will slow the team down.
