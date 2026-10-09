---
id: priority-queue
category: programming
subcategory: data-structures
level: intermediate
related: [binary-tree, hash-function, topological-sort]
tags: [python]
aliases: ["heap", "min heap", "heapq"]
term: "Priority Queue"
pronunciation: "pry-OR-ih-tee KYOO"
keywords: ["highest priority first", "heapq", "dijkstra", "scheduler", "min heap", "pop the smallest", "الأعلى أولوية أولاً", "وحدة heapq", "خوارزمية ديكسترا", "المجدول", "كومة صغرى", "أخرج الأصغر"]
---

## Definition

A priority queue is a collection where each item has a priority, and the next item you take out is always the one with the highest priority (or lowest value), not the oldest one.

## Where you hear it

In schedulers, shortest-path algorithms (Dijkstra), job systems and Python's `heapq`.

## Examples

- Urgent jobs jump ahead of normal ones in the priority queue.
- `heapq.heappop` returns the smallest item.
- The support queue serves the urgent tickets first, then the rest in arrival order.

## Common mistake

Using a sorted list and re-sorting after every insert. A heap-based priority queue is far faster.

## Don't confuse with

A normal queue (FIFO), which serves items strictly in arrival order.

## Say it at work

- Put the tasks in a priority queue.
- Break ties by insertion order.
