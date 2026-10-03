---
id: snapshot-testing
category: testing
level: intermediate
related: [unit-test, regression]
term: "Snapshot Testing"
pronunciation: "SNAP-shot TES-ting"
---

## Definition

A testing practice where the rendered output of a UI component or data structure is saved to a reference file and automatically compared against future test runs to detect unexpected changes.

## Where you hear it

In frontend code reviews, during test suite setups, or when refactoring UI components.

## Examples

- We added snapshot testing to verify that the user profile component renders correctly.
- The test failed because the button's CSS class changed in the new snapshot.

## Common mistake

Treating snapshots as a replacement for real assertions, or blindly updating snapshot files without checking what actually changed in the UI.
