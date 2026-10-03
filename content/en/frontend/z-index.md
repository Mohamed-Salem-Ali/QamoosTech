---
id: z-index
category: frontend
level: beginner
related: [responsive-design]
term: "Z-index"
pronunciation: "ZEE IN-deks"
---

## Definition

A CSS property that specifies the stack order of an element along the Z-axis, determining which elements appear in front of or behind others.

## Where you hear it

In frontend layout discussions, fixing overlapping elements, or building dropdown menus and modals.

## Examples

- We increased the `z-index` of the modal to ensure it appears above the navigation bar.
- The dropdown menu is hidden behind the hero image because its `z-index` is too low.

## Common mistake

Expecting `z-index` to work on elements with a `position` value of `static`, even though it only affects positioned elements.

## Don't confuse with

Z-index vs Stacking Context: Z-index is a property applied to a single element, while a stacking context is a conceptual layer created by specific CSS properties that groups elements together.

## Say it at work

- I'm having trouble getting the tooltip to show up, I think I need to adjust the z-index.
- Please update the z-index for the sidebar component to ensure it remains visible above the main content area.
