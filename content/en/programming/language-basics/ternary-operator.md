---
id: ternary-operator
category: programming
subcategory: language-basics
level: intermediate
related: [conditional-statement, control-flow]
tags: [python, javascript]
aliases: ["conditional expression", "ternary"]
term: "Ternary Operator"
pronunciation: "TER-nuh-ree OP-er-ay-ter"
keywords: ["one line if else", "condition ? a : b", "x if cond else y", "inline conditional", "short if expression", "conditional expression", "if else في سطر واحد", "الصيغة condition ? a : b", "شرط مضمّن", "تعبير شرطي قصير", "التعبير الشرطي"]
---

## Definition

The ternary operator is a one-line conditional that picks between two values depending on a condition.

## Where you hear it

In JavaScript and Python code reviews, when someone shortens a small `if / else` into one expression.

## Examples

- In Python it reads `label = "adult" if age >= 18 else "minor"`.
- Use a ternary for a simple choice, but not for nested logic.
- The status label is a ternary: paid if the invoice is settled, otherwise due.

## Common mistake

Nesting ternaries inside each other. It becomes unreadable fast; use a normal `if` instead.

## Don't confuse with

A full `if / else` statement, which runs blocks of code. A ternary is an expression that produces a value.

## Say it at work

- A ternary is fine here, but keep it on one line.
- That nested ternary is hard to read; please expand it.
