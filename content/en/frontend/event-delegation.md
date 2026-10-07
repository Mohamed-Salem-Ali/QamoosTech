---
id: event-delegation
category: frontend
level: intermediate
related: [event-bubbling, dom, component]
tags: [javascript]
aliases: ["delegated events", "event target"]
term: "Event Delegation"
pronunciation: "ih-VENT del-ih-GAY-shun"
keywords: ["one listener on the parent", "handle clicks for many children", "works for dynamic elements", "event target", "less memory", "bubbling makes it work", "مستمع واحد على الأب", "معالجة نقرات عناصر كثيرة", "يعمل مع العناصر الديناميكية", "هدف الحدث", "ذاكرة أقل", "الفقاعة تجعله ممكناً"]
---

## Definition

Event delegation means attaching one event listener to a parent element instead of one to every child, and using the event's `target` to find which child was clicked. It relies on event bubbling.

## Where you hear it

In vanilla JavaScript code, performance reviews of long lists and interview questions about the DOM.

## Examples

- Attach the click listener to the `<ul>` and check `event.target` for the `<li>`.
- Items added later work automatically with delegation.

## Common mistake

Using it for events that don't bubble (like `focus`). Use `focusin` or attach directly.

## Don't confuse with

Event bubbling, the behaviour that makes events travel upward. Delegation is the technique that uses it.

## Say it at work

- Delegate the click handling to the container.
- Check `event.target.closest('button')`.
