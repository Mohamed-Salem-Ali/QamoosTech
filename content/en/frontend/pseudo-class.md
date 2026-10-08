---
id: pseudo-class
category: frontend
level: intermediate
related: [state]
tags: [css]
term: "Pseudo-class"
pronunciation: "SOO-doh-klas"
keywords: ["css state selector","style based on interaction","hover active focus styles","css colon selectors","pseudo class vs element","dynamic css styling","styling element states","css keyword for state","pseudo selector syntax","change style on mouseover","تنسيق عناصر حسب الحالة","محددات الحالة في سي اس اس","تغيير شكل الزر عند الضغط","الفرق بين سودو كلاس وسودو المنت","تنسيق العناصر التفاعلية","كلمات مفتاحية لتنسيق العناصر","سودو كلاس في سي اس اس","تحديد حالة العنصر برمجيا","تنسيق العناصر عند التمرير","محددات سي اس اس المتقدمة"]
---

## Definition

A pseudo-class is a keyword added to a CSS selector that specifies a special state of the selected element. It allows you to style elements based on user interaction or their position in the document tree.

## Where you hear it

In CSS styling tasks, during frontend code reviews, or when implementing interactive UI components.

## Examples

- Use the `:hover` pseudo-class to change the button color when the user moves the mouse over it.
- The `:focus` pseudo-class is essential for accessibility to highlight elements when they are selected via keyboard navigation.

## Common mistake

Confusing pseudo-classes with pseudo-elements; remember that pseudo-classes target a state of an existing element, while pseudo-elements target specific parts of an element, like `::before` or `::after`.

## Don't confuse with

Pseudo-class vs. pseudo-element: A pseudo-class targets an existing element in a specific state, whereas a pseudo-element creates or targets a specific sub-part of an element that does not exist as a separate node in the DOM.

## Say it at work

- I think we should add a hover pseudo-class to these cards so the user knows they are clickable.
- Please ensure that the focus pseudo-class is properly defined for all input fields to maintain accessibility standards.
