---
id: depth-first-search
category: programming
subcategory: data-structures
level: intermediate
related: [breadth-first-search, recursion, binary-tree]
tags: [python]
aliases: ["dfs"]
term: "Depth-First Search"
pronunciation: "DEPTH-first SERCH"
keywords: ["go as deep as possible first", "dfs", "stack or recursion", "explore a graph", "maze solving", "backtracking", "اذهب لأعمق مدى أولاً", "اختصار DFS", "مكدس أو استدعاء ذاتي", "استكشاف رسم بياني", "حل المتاهات", "التراجع"]
---

## Definition

Depth-first search (DFS) explores a tree or graph by following one path as far as it goes, then backing up and trying the next branch. It uses a stack or recursion.

## Where you hear it

In algorithm courses and interviews, file-tree walking, dependency resolution and puzzle solving.

## Examples

- DFS visits every file in a folder tree by going into each subfolder first.
- Mark visited nodes so DFS doesn't loop in a graph with cycles.
- DFS detects the cycle by noticing a node that is already on the current path.

## Common mistake

Forgetting a visited set in a graph. With cycles the search never ends.

## Don't confuse with

Breadth-first search, which explores level by level and finds the shortest path in an unweighted graph.

## Say it at work

- Use DFS to explore all reachable nodes.
- The recursion goes too deep; use an explicit stack.
