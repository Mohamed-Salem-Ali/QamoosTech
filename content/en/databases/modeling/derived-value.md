---
id: derived-value
category: databases
subcategory: modeling
level: intermediate
related: [normalization, denormalization, source-of-truth]
aliases: ["computed value", "computed column", "calculated field", "computed property"]
term: "Derived Value"
pronunciation: "dih-RYVD VAL-yoo"
keywords: ["calculate instead of store", "computed from other columns", "avoid duplicated data", "property instead of column", "total can be calculated", "value that cannot go out of sync", "احسبها بدلاً من تخزينها", "محسوبة من أعمدة أخرى", "تجنب تكرار البيانات", "خاصية بدلاً من عمود", "المجموع يمكن حسابه", "قيمة لا يمكن أن تختلف"]
---

## Definition

A derived value is one you can calculate from other data, so you compute it when needed instead of storing it. That way it can never disagree with its source.

## Where you hear it

In data modelling, normalisation discussions, and reviews that remove columns which duplicate information.

## Examples

- The number of turns is derived from the weeks and the payouts per week.
- We derive the unpaid status instead of saving it, so it can't go stale.

## Common mistake

Storing a value you can calculate. Now two places hold the truth and one will eventually be wrong.

## Don't confuse with

A cached or denormalised column, which is stored on purpose for speed and must be kept up to date.

## Say it at work

- Make that a derived value, not a column.
- If it can be computed, derive it.
