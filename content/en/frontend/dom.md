---
id: dom
category: frontend
level: beginner
related: [rendering, state]
term: "DOM"
pronunciation: "dee-oh-em"
keywords: ["html tree structure","browser document interface","how javascript changes html","manipulating web page elements","document object model","web page node structure","update ui elements dynamically","accessing html via javascript","virtual vs real dom","browser api for html","هيكل صفحة الويب","واجهة برمجة مستندات اتش تي ام ال","تعديل عناصر الصفحة برمجيا","تمثيل المستند كشجرة","كيف يتعامل المتصفح مع العناصر","نموذج كائنات المستند","تحديث واجهة المستخدم برمجيا","التعامل مع عناصر الصفحة","الفرق بين دوم والافتراضي","تغيير محتوى الصفحة ديناميكيا"]
---

## Definition

The Document Object Model is a programming interface that represents an HTML or XML document as a tree structure of nodes, allowing scripts to update content, style, and structure.

## Where you hear it

- In frontend code when selecting elements or listening for clicks.
- During performance discussions about layout shifts and repaints.
- When frameworks talk about virtual representations versus real elements.

## Examples

- JavaScript can access elements using `document.getElementById` to change their text.
- Updating the DOM directly too many times can slow down web page rendering.
- Clicking the button adds a new list item to the DOM without reloading the page.

## Common mistake

Thinking the DOM is part of the JavaScript language itself, when it is actually a browser API provided to interact with web pages.

## Don't confuse with

DOM vs Virtual DOM: The DOM is the browser's live representation of the document, while the Virtual DOM is a lightweight JavaScript copy used by frameworks to optimize updates before syncing with the real DOM.

## Say it at work

- We should minimize direct DOM manipulations in this component to keep the UI performance smooth.
- Please ensure that the new elements are correctly injected into the DOM after the API call completes.
