---
id: state
category: frontend
level: beginner
related: [props, component]
term: "State"
pronunciation: "STAYT"
keywords: ["data that changes over time","component data storage","variables that update the ui","track user input in component","react local state","manage changing app data","storing screen data","ui component memory","state","بيانات تتغير في التطبيق","تخزين بيانات المكون","متغيرات تحدث واجهة المستخدم","حفظ حالة المكون","إدارة بيانات الشاشة","البيانات المتغيرة في الصفحة","الحالة المحلية للمكون","متغيرات تفاعل المستخدم"]
---
## Definition

Data that can change while the app runs and that the screen depends on, such as what the user typed or whether a menu is open.

## Where you hear it

React and Vue lessons, and bug reports ("the state is out of sync").

## Examples

- The cart count is stored in the component state.
- The state changed, so React re-rendered the page.

## Common mistake

Keeping the same data in two places. When one copy changes and the other does not, you get bugs.

## Don't confuse with

State represents data that changes within a component over time, whereas props are read-only data passed down from a parent component.

## Say it at work

- We need to lift this state up to the parent component so the sibling can access it.
- Please ensure the local state is cleared after the form is successfully submitted.
