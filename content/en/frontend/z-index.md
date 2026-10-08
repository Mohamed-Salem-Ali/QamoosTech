---
id: z-index
category: frontend
level: beginner
related: [responsive-design]
tags: [css]
term: "Z-index"
pronunciation: "ZEE IN-deks"
keywords: ["layering elements on screen","css stack order property","bring element to front","how to overlap html elements","fix elements hidden behind others","css depth control property","z axis position css","control element stacking order","make modal appear on top","zindex css property","css element layering priority","ترتيب طبقات العناصر فوق بعضها","جعل العنصر يظهر في المقدمة","التحكم في عمق العناصر css","حل مشكلة تداخل العناصر","خاصية ترتيب العناصر في css","جعل القائمة تظهر فوق المحتوى","ترتيب العناصر على المحور العمقي","تحديد طبقة العنصر في الواجهة","زاي إنديكس في سي اس اس","تحريك العناصر للأمام وللخلف"]
---

## Definition

A CSS property that specifies the stack order of an element along the Z-axis, determining which elements appear in front of or behind others.

## Where you hear it

In frontend layout discussions, fixing overlapping elements, or building dropdown menus and modals.

## Examples

- We increased the `z-index` of the modal to ensure it appears above the navigation bar.
- The dropdown menu is hidden behind the hero image because its `z-index` is too low.
- The toast notification uses a high z-index, so it stays above the modal.

## Common mistake

Expecting `z-index` to work on elements with a `position` value of `static`, even though it only affects positioned elements.

## Don't confuse with

Z-index vs Stacking Context: Z-index is a property applied to a single element, while a stacking context is a conceptual layer created by specific CSS properties that groups elements together.

## Say it at work

- I'm having trouble getting the tooltip to show up, I think I need to adjust the z-index.
- Please update the z-index for the sidebar component to ensure it remains visible above the main content area.
