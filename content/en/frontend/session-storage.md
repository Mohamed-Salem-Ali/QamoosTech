---
id: session-storage
category: frontend
level: beginner
related: [cache]
term: "Session Storage"
pronunciation: "SESH-un STOR-ij"
---

## Definition

A web storage mechanism that allows you to store key-value pairs in the browser for a single session. The data persists only as long as the browser tab or window remains open.

## Where you hear it

In frontend development discussions regarding state management, temporary user preferences, or form data persistence.

## Examples

- Use Session Storage to save the current step of a multi-page form so the user doesn't lose progress if they refresh the page.
- We store the temporary filter settings in Session Storage so they reset automatically when the user closes the tab.

## Common mistake

Confusing it with Local Storage; remember that Session Storage data is deleted as soon as the tab is closed, whereas Local Storage persists indefinitely until explicitly cleared.

## Don't confuse with

Session Storage vs Local Storage: Session Storage data is cleared when the page session ends upon closing the tab, whereas Local Storage data persists even after the browser is closed and reopened.

## Say it at work

- Let's move these temporary form inputs to Session Storage so the data clears automatically when the user leaves.
- I have implemented Session Storage to ensure the user's current filter state is maintained during page refreshes.
