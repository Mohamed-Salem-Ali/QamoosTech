---
id: snapshot-testing
category: testing
subcategory: test-types
level: intermediate
related: [unit-test, regression]
term: "Snapshot Testing"
pronunciation: "SNAP-shot TES-ting"
keywords: ["test ui component output","compare rendered output against reference file","detect unexpected ui changes","ui regression test","serialize component structure test","snapshot test","automatic ui comparison testing","verify component html output","snpshot testing","test component rendering changes","اختبار واجهة المستخدم بالمقارنة","اختبار السنابشوت","حفظ ناتج المكون للاختبار","مقارنة الناتج المعروض تلقائيا","اكتشاف تغييرات واجهة المستخدم","فحص شكل المكونات برمجيا","اختبارات المكونات المرئية","سناپشوت تيسْتينج","مقارنة ملفات المراجع للاختبار"]
---

## Definition

A testing practice where the rendered output of a UI component or data structure is saved to a reference file and automatically compared against future test runs to detect unexpected changes.

## Where you hear it

In frontend code reviews, during test suite setups, or when refactoring UI components.

## Examples

- We added snapshot testing to verify that the user profile component renders correctly.
- The test failed because the button's CSS class changed in the new snapshot.
- The snapshot test failed after someone changed the heading, so the team reviewed the new snapshot.

## Common mistake

Treating snapshots as a replacement for real assertions, or blindly updating snapshot files without checking what actually changed in the UI.

## Don't confuse with

Snapshot testing is often confused with visual regression testing; while snapshot testing compares serialized code or data structures, visual regression testing compares actual pixel-by-pixel screenshots of the rendered UI.

## Say it at work

- Let's add snapshot testing for this component to make sure we don't accidentally break the layout during the refactor.
- Please review the updated snapshot file in this pull request to ensure the changes to the rendered output are expected.
