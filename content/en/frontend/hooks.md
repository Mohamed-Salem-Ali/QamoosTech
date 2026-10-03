---
id: hooks
category: frontend
level: intermediate
related: [component, state]
term: "Hooks"
pronunciation: "HUKZ"
---

## Definition

Hooks are functions that allow you to "hook into" React state and lifecycle features from function components. They enable you to use state and other React features without writing a class.

## Where you hear it

Commonly used in frontend development discussions, code reviews, and documentation for React-based frameworks.

## Examples

- I used the `useState` hook to manage the form input value.
- You should move the data fetching logic into a custom hook.

## Common mistake

Calling hooks inside loops, conditions, or nested functions, which violates the rule that hooks must always be called at the top level of your component.

## Don't confuse with

Hooks are often confused with Higher-Order Components (HOCs); while both share logic between components, Hooks are functions that hook into React state, whereas HOCs are functions that take a component and return a new enhanced component.

## Say it at work

- Can we refactor this repeated logic into a custom hook to keep our component cleaner?
- I have extracted the authentication check into a custom hook to improve code reusability across the application.
