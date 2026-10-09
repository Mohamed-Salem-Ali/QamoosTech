---
id: reconciliation
category: architecture
subcategory: data-and-state
level: intermediate
related: [audit-logging, idempotency, source-of-truth]
aliases: ["reconcile", "ledger matching"]
term: "Reconciliation"
pronunciation: "REK-un-SIL-ee-AY-shun"
keywords: ["compare two sets of records", "payments vs bank statement", "find mismatches", "nightly check", "fix differences", "ledger matching", "مقارنة مجموعتي سجلات", "المدفوعات مقابل كشف البنك", "إيجاد الفروقات", "فحص ليلي", "تصحيح الاختلافات", "مطابقة دفتر الحسابات"]
---

## Definition

Reconciliation is comparing two independent sets of records, such as your database of payments and the payment provider's statement, to find mismatches and fix them.

## Where you hear it

In payment and finance systems, accounting, data pipelines and any integration where two systems should agree.

## Examples

- The nightly reconciliation flagged two payments missing from our database.
- Match the records by the provider's transaction id.
- The reconciliation found a refund the provider had processed but we had not recorded.

## Common mistake

Trusting webhooks alone. Events can be missed or duplicated, so reconcile against the provider's own records.

## Don't confuse with

An audit log, which records what happened inside your system. Reconciliation compares systems against each other.

## Say it at work

- Run reconciliation before month-end.
- Which side is the source of truth when they differ?
