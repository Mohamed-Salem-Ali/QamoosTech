---
id: edge-case
category: testing
subcategory: test-design
level: intermediate
related: [unit-test, bug, happy-path]
term: "Edge Case"
pronunciation: "EJ KAYS"
keywords: ["extreme input values testing","handling boundary conditions","unexpected data scenarios","testing outside happy path","corner case vs edge case","uncommon system states","input validation limits","testing empty or null inputs","edge cases in software","boundary value analysis","rare execution paths","اختبار القيم المتطرفة","معالجة الحالات الحدية","سيناريوهات غير متوقعة","اختبار حدود المدخلات","تغطية حالات المدخلات الفارغة","ما هي الحالات الحدية","الفرق بين الحالات الحدية والزاوية","سيناريوهات الاستخدام النادرة","فحص القيم عند الحدود","إيدج كيس في البرمجة"]
---
## Definition

An unusual situation at the limits of normal use, such as an empty list, a very long name, or a negative number.

## Where you hear it

Code reviews and test planning.

## Examples

- What happens in the edge case where the cart is empty?
- The function crashes on an edge case with zero items.
- The edge case with a discount above 100 percent was not covered by any test.

## Common mistake

Testing only the happy path. Many production bugs come from edge cases.

## Don't confuse with

An edge case tests extreme values within design limits, while a corner case happens when multiple extreme conditions occur simultaneously.

## Say it at work

- Let us add a test to cover this edge case before we merge the pull request.
- Could you please ensure that all edge cases for negative inputs are handled properly in the validation logic?
