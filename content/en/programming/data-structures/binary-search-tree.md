---
id: binary-search-tree
category: programming
subcategory: data-structures
level: intermediate
related: [binary-tree, index, recursion]
tags: [python]
aliases: ["bst"]
term: "Binary Search Tree"
pronunciation: "BY-nuh-ree SERCH TREE"
keywords: ["left smaller right larger", "fast lookup", "ordered data", "balanced tree", "log n search", "inorder gives sorted", "الأيسر أصغر والأيمن أكبر", "بحث سريع", "بيانات مرتبة", "شجرة متوازنة", "بحث لوغاريتمي", "المرور الداخلي يعطي الترتيب"]
---

## Definition

A binary search tree (BST) is a binary tree where everything in a node's left subtree is smaller and everything in its right subtree is larger, so you can search by choosing left or right at each step.

## Where you hear it

In algorithms interviews, database index explanations (B-trees) and ordered-map implementations.

## Examples

- Searching a balanced BST takes about log n steps.
- Inserting sorted data into a plain BST makes it a chain.
- Looking up a key in the BST skips half of the remaining tree at each step.

## Common mistake

Forgetting that an unbalanced BST can degrade to O(n). Self-balancing trees (AVL, red-black) avoid it.

## Don't confuse with

A hash table, which gives fast lookup but no ordering.

## Say it at work

- Implement insert and search on a BST.
- Is the tree balanced?
