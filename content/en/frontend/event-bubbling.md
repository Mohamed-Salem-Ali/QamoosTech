---
id: event-bubbling
category: frontend
level: intermediate
related: [event-driven]
term: "Event Bubbling"
pronunciation: "i-VENT BUB-ling"
keywords: ["event propagation up dom tree","stop child click triggering parent","how to handle nested events","event delegation pattern explanation","events moving to parent elements","js event bubbling behavior","preventing event propagation in js","event bubbling vs capturing","click event propagates to container","event listener hierarchy in dom","انتقال الحدث للأعلى في dom","توقف الحدث عند العناصر الأب","تفعيل الحدث في العناصر المتداخلة","آلية تصاعد الأحداث في جافا سكريبت","منع وصول الحدث للعنصر الأب","شرح تفويض الأحداث في البرمجة","كيفية إيقاف تصاعد الأحداث","انتقال الحدث من الابن للأب","الفرق بين bubbling و capturing","تداخل مستمعي الأحداث في المتصفح"]
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

## Don't confuse with

Event Bubbling goes upward from the target to the parents, while Event Capturing goes downward from the root to the target element.

## Say it at work

- Make sure to call event.stopPropagation here, otherwise event bubbling will trigger the parent container as well.
- We can refactor this component to rely on event bubbling instead of attaching separate listeners to every single child.
