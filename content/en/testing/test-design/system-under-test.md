---
id: system-under-test
category: testing
subcategory: test-design
level: intermediate
related: [unit-test, test-double, test-isolation]
tags: [python]
aliases: ["sut", "class under test", "code under test"]
term: "System Under Test"
pronunciation: "SIS-tum UN-der test"
keywords: ["the code being tested", "sut", "what the test checks", "target of the test", "class under test", "everything else is a double", "الكود الذي يجري اختباره", "اختصار SUT", "ما يفحصه الاختبار", "هدف الاختبار", "الصنف قيد الاختبار", "كل ما عداه بديل"]
---

## Definition

The system under test (SUT) is the piece of code a test is checking. Everything around it is either real support or a stand-in.

## Where you hear it

In testing books and design discussions, especially when deciding what to fake and what to keep real.

## Examples

- The SUT is the `Schedule` class; the database is a fake.
- If the SUT is too hard to set up, the design may be too coupled.

## Common mistake

Faking the thing you mean to test. Then the test checks your fake, not your code.

## Don't confuse with

A test double, which is a stand-in for something around the SUT, never the SUT itself.

## Say it at work

- What's the system under test here?
- Keep the SUT real and fake only its dependencies.
