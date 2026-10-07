---
id: over-fetching
category: web-apis
subcategory: api-design
level: intermediate
related: [graphql, payload, pagination]
tags: [javascript]
aliases: ["under-fetching", "overfetching", "underfetching"]
term: "Over-Fetching and Under-Fetching"
pronunciation: "OH-ver-FECH-ing"
keywords: ["api returns too much data", "extra fields you do not need", "multiple requests to get enough", "graphql solves it", "n requests for one screen", "bigger payloads", "الـ API تعيد بيانات أكثر من اللازم", "حقول زائدة لا تحتاجها", "طلبات متعددة للحصول على الكفاية", "‏GraphQL يحلها", "عدة طلبات لشاشة واحدة", "حمولات أكبر"]
---

## Definition

Over-fetching is when an API returns more data than the client needs. Under-fetching is the opposite: one endpoint doesn't return enough, so the client must make extra requests.

## Where you hear it

In REST vs GraphQL comparisons, mobile performance reviews and API design discussions.

## Examples

- The list endpoint returns full profiles when we only need names; that's over-fetching.
- The screen needs three requests to render; that's under-fetching.

## Common mistake

Fixing it by adding a new endpoint per screen. Field selection or a well-designed query layer scales better.

## Don't confuse with

The N+1 query problem, which is about a server making too many database queries, not too much data over the network.

## Say it at work

- Let the client pick the fields it needs.
- We're over-fetching on mobile.
