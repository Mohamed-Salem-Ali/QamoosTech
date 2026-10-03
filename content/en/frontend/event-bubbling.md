---
id: event-bubbling
category: frontend
level: intermediate
related: [event-driven]
term: "Event Bubbling"
pronunciation: "i-VENT BUB-ling"
---

## Definition

Event Bubbling is a mechanism in the DOM where an event triggered on a nested element propagates upward through its parent elements. This allows a single event listener on a container to handle events triggered by its children.

## Where you hear it

Commonly discussed when managing event listeners in JavaScript, debugging unexpected event triggers, or implementing event delegation patterns.

## Examples

- Clicking a button inside a div triggers the click event on the button first, then the div.
- You can use event delegation to attach one listener to a list instead of adding listeners to every list item.

## Common mistake

Developers often forget that events bubble up by default and may accidentally trigger multiple handlers, which can be prevented using `event.stopPropagation()`.
