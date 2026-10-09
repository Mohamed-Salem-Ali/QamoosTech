---
id: breadth-first-search
category: programming
subcategory: data-structures
level: intermediate
related: [depth-first-search, priority-queue, binary-tree]
tags: [python]
aliases: ["bfs"]
term: "Breadth-First Search"
pronunciation: "BREDTH-first SERCH"
keywords: ["level by level", "bfs", "uses a queue", "shortest path unweighted", "nearest first", "social network degrees", "مستوى بمستوى", "اختصار BFS", "يستخدم طابوراً", "أقصر مسار بلا أوزان", "الأقرب أولاً", "درجات الشبكة الاجتماعية"]
---

## Definition

Breadth-first search (BFS) explores a graph or tree level by level: first the starting node, then its neighbours, then their neighbours, using a queue. It finds the shortest path when all steps cost the same.

## Where you hear it

In algorithm interviews (shortest path in a maze or grid), social graph features and web crawlers.

## Examples

- BFS finds the fewest hops between two users.
- Push neighbours onto the queue and mark them visited.
- BFS visits all friends at distance one before it looks at any friend of a friend.

## Common mistake

Using BFS for weighted paths. Edges with different costs need Dijkstra's algorithm.

## Don't confuse with

Depth-first search, which goes deep first and uses less memory on wide graphs but doesn't find shortest paths.

## Say it at work

- Use BFS to find the shortest route.
- The queue grows with the width of the graph.
