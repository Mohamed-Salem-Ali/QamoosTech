---
id: architecture-decision-record
category: architecture
subcategory: patterns
level: intermediate
related: [design-doc, rfc, design-pattern]
term: "Architecture Decision Record (ADR)"
pronunciation: "ay-dee-AR"
keywords: ["record why we chose this", "short document per architecture decision", "why did we pick this database", "decision log in the repository", "superseded decision", "تسجيل سبب اختيار شيء", "وثيقة قصيرة لكل قرار معماري", "لماذا اخترنا قاعدة البيانات هذه", "سجل القرارات في المستودع"]
---

## Definition

A short record of one architecture decision: its context, the decision, and its consequences. ADRs are kept in the repository, so future readers can see why the system is built the way it is.

## Where you hear it

In code repositories, architecture reviews, and when someone asks "why did we choose this database?"

## Examples

- We wrote an ADR about choosing PostgreSQL over MongoDB.
- The ADR lists the trade-offs we accepted.
- The ADR explains why we chose an event bus over direct calls between services.

## Common mistake

Editing an old ADR to match a new decision. Write a new ADR that supersedes the old one, so the history stays clear.

## Don't confuse with

A design doc is written before building and can change. An ADR records one decision and is kept as history.
