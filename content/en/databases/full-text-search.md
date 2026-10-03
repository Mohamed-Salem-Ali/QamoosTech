---
id: full-text-search
category: databases
level: intermediate
related: [database, index, query]
term: "Full-Text Search"
pronunciation: "FULL-tekst SURCH"
---

## Definition

Full-Text Search is a technique for searching documents or text-heavy columns by analyzing the linguistic content rather than performing a simple pattern match. It allows for advanced queries like searching for word variations, synonyms, or relevance-based ranking.

## Where you hear it

When discussing database performance, search functionality implementation, or choosing a search engine for an application.

## Examples

- We need to implement Full-Text Search to allow users to find articles by keywords.
- The database index for Full-Text Search is significantly larger than a standard B-tree index.

## Common mistake

Confusing it with the `LIKE` operator in SQL, which performs a character-by-character pattern match and is often too slow and limited for large text datasets.

## Don't confuse with

Full-Text Search is often confused with keyword matching via the LIKE operator, but while LIKE performs a literal character-by-character scan, Full-Text Search uses specialized indexes to provide linguistic analysis and relevance ranking.

## Say it at work

- Let's switch to Full-Text Search for the product catalog so users get better results when they make typos.
- I have updated the query to utilize Full-Text Search, which should resolve the performance issues with the search bar.
