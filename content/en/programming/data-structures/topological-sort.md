---
id: topological-sort
category: programming
subcategory: data-structures
level: intermediate
related: [dag, depth-first-search, pipeline]
tags: [python]
aliases: ["dependency order", "build order"]
term: "Topological Sort"
pronunciation: "TOP-uh-LOJ-ih-kul SORT"
keywords: ["order tasks by dependencies", "build order", "prerequisites first", "dag only", "package install order", "detect cycles", "ترتيب المهام حسب الاعتماديات", "ترتيب البناء", "المتطلبات أولاً", "للرسوم غير الدورية فقط", "ترتيب تثبيت الحزم", "اكتشاف الدورات"]
---

## Definition

A topological sort puts the nodes of a directed graph in an order where every item comes after the things it depends on. It only works if the graph has no cycles.

## Where you hear it

In build tools, package managers, task schedulers like Airflow and course-prerequisite problems.

## Examples

- A topological sort of the tasks tells us which one to run first.
- If the sort fails, there is a circular dependency.
- The build runs the modules in topological order, so each one finds its dependencies already built.

## Common mistake

Expecting one unique answer. Many valid orders can exist when tasks are independent.

## Don't confuse with

A normal sort by value. A topological sort orders by dependency, not by size or name.

## Say it at work

- Run the jobs in topological order.
- There's a cycle, so no valid order exists.
