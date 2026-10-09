---
id: monkeypatching
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [mocking, test-double, test-isolation]
tags: [python]
aliases: ["monkey patch", "monkeypatch"]
term: "Monkeypatching"
pronunciation: "MUNG-kee-PATCH-ing"
keywords: ["replace a function temporarily", "patch during a test", "monkeypatch fixture", "swap a value for the test", "override at runtime", "fake the clock or env var", "استبدال دالة مؤقتاً", "ترقيع أثناء الاختبار", "أداة monkeypatch", "تبديل قيمة للاختبار", "التعديل أثناء التشغيل", "تزييف الساعة أو متغير البيئة"]
---

## Definition

Monkeypatching temporarily replaces a function, attribute or value while a test runs, and puts the original back afterwards.

## Where you hear it

In Python testing guides (pytest's `monkeypatch`), and when a test must avoid the network, the clock or real environment variables.

## Examples

- Monkeypatch `time.time` so the test controls the clock.
- Use monkeypatch to set the env var only for this test.
- The test monkeypatches the clock, so the expiry check runs at a fixed time.

## Common mistake

Patching the wrong place. Patch the name where the code under test looks it up, not where it was defined.

## Don't confuse with

Mocking, which usually builds a fake object that records calls. Monkeypatching is the act of swapping something in place.

## Say it at work

- Just monkeypatch it instead of changing the code.
- Monkeypatches are undone after each test.
