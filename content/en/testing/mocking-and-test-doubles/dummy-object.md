---
id: dummy-object
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [test-double, mocking, test-fixture]
aliases: ["dummy"]
term: "Dummy Object"
pronunciation: "DUM-ee OB-jekt"
keywords: ["placeholder argument in test", "pass none to a function", "unused parameter in unit test", "fake logger for a test", "test double that is never used", "required argument the test ignores", "كائن الحشو في الاختبار", "تمرير قيمة شكلية لدالة", "معامل لا يستخدمه الاختبار", "مسجِّل وهمي لاختبار", "بديل لا يُستدعى أبداً", "وسيط مطلوب يتجاهله الاختبار"]
---

## Definition

A test double that is passed in only to fill a parameter the function requires. The test never uses it, so it can be an empty object, None, or any other placeholder value.

## Where you hear it

In unit tests that call a function requiring a logger, a user or a connection that the test does not care about.

## Examples

- The test passes a dummy logger, because the function requires one but the test does not check the logs.
- Pass None as a dummy user when the function never reads it in this test.
- A dummy is not set up to answer anything. If the code does use it, the test should fail.

## Common mistake

Using a dummy where the code really reads its value. A test that depends on a placeholder can pass for the wrong reason.

## Don't confuse with

A stub returns set answers when it is called, and a fake is a simplified but working implementation. A dummy is never called in the test at all.

## Say it at work

- We can pass a dummy logger here, because this test does not check any log output.
- Replace the dummy with a stub if the code now needs a value back.
