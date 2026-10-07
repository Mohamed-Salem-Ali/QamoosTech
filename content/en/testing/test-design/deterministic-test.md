---
id: deterministic-test
category: testing
subcategory: test-design
level: intermediate
related: [flaky-test, test-isolation, test-fixture]
tags: [python]
aliases: ["repeatable test"]
term: "Deterministic Test"
pronunciation: "dih-TER-mih-NIS-tik test"
keywords: ["same result every run", "no randomness in tests", "fixed clock and seed", "reliable test", "repeatable test", "no flakiness", "نفس النتيجة في كل تشغيل", "لا عشوائية في الاختبارات", "ساعة وبذرة ثابتتان", "اختبار موثوق", "اختبار قابل للتكرار", "بلا تذبذب"]
---

## Definition

A deterministic test gives the same result every time it runs, because nothing random, time-based or order-dependent can change the outcome.

## Where you hear it

In discussions of flaky tests, CI reliability, and when tests use dates, random numbers or the network.

## Examples

- Freeze the clock so the test is deterministic.
- Seed the random generator in the test.

## Common mistake

Using today's date or a real network call inside a test. It passes today and fails tomorrow.

## Don't confuse with

A flaky test, which is the unwanted result when a test is not deterministic.

## Say it at work

- Make it deterministic before you merge.
- The failure only happens on some runs, so it's not deterministic.
