---
id: virtual-dom
category: frontend
level: intermediate
related: [component, rendering, state]
term: "Virtual DOM"
pronunciation: "VER-choo-uhl dahm"
---

## Definition

A programming concept where a lightweight copy of the UI is kept in memory and synced with the real DOM to improve performance.

## Where you hear it

In frontend framework discussions, performance optimization meetings, and architecture overviews.

## Examples

- The framework updates the Virtual DOM first before touching the browser's actual DOM.
- Using a Virtual DOM helps minimize expensive direct manipulations of the webpage elements.

## Common mistake

Believing that the Virtual DOM is always faster than the real DOM, when it is actually used to make updates predictable and efficient rather than a pure speed booster.

## Don't confuse with

Virtual DOM vs Shadow DOM: The Virtual DOM is a performance-oriented abstraction kept in memory, while the Shadow DOM is a browser-native standard used for scoping CSS and DOM elements.

## Say it at work

- We should check if the Virtual DOM is causing unnecessary re-renders in this specific component.
- I have optimized the state management to ensure the Virtual DOM diffing process remains efficient.
