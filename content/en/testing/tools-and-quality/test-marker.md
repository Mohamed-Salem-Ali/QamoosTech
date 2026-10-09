---
id: test-marker
category: testing
subcategory: tools-and-quality
level: intermediate
related: [pytest, test-suite, flaky-test]
tags: [python]
aliases: ["skip", "xfail", "pytest mark"]
term: "Test Marker"
pronunciation: "test MAR-ker"
keywords: ["skip a test", "xfail expected failure", "label tests slow or integration", "run only marked tests", "pytest mark", "conditional skip", "تخطي اختبار", "فشل متوقع", "وسم الاختبارات بالبطيء أو التكامل", "تشغيل الاختبارات الموسومة فقط", "وسوم pytest", "تخطٍّ مشروط"]
---

## Definition

A test marker is a label on a test that changes how it runs: `skip` leaves it out, `xfail` expects it to fail, and custom markers like `slow` let you select groups.

## Where you hear it

In pytest suites, CI configuration that runs fast tests first, and known-bug workarounds.

## Examples

- Mark the test `xfail` until the bug is fixed.
- Run `pytest -m "not slow"` for the quick feedback loop.
- The slow integration tests are marked, so the quick run skips them.

## Common mistake

Using `skip` to hide a failing test and forgetting it. Add a reason and a ticket, and review skipped tests.

## Don't confuse with

Deleting the test. A marker keeps it visible while saying it is known to fail or be slow.

## Say it at work

- Add a reason to the skip marker.
- Tag the slow tests so CI can run them nightly.
