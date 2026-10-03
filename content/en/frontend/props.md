---
id: props
category: frontend
level: beginner
related: [component, state]
term: "Props"
pronunciation: "PROPS"
keywords: ["passing data to components","react component arguments","how to use properties","read only component inputs","passing variables between components","react props explained","what are component properties","avoiding prop drilling","parent to child communication","component input parameters","تمرير البيانات للمكونات","مدخلات المكونات في رياكت","كيفية تمرير الخصائص","الفرق بين الخصائص والحالة","تمرير المتغيرات بين المكونات","شرح البروبس في رياكت","الخصائص الممررة للمكون","تجنب تمرير الخصائص المتعدد","استقبال البيانات في المكون","معاملات المكونات البرمجية"]
---
## Definition

Short for "properties": the inputs a parent passes down to a component, like a function's arguments.

## Where you hear it

React tutorials and code reviews.

## Examples

- Pass the user name to the card through props.
- Props are read-only, so do not change them inside the component.

## Common mistake

Passing props through five levels of components ("prop drilling"). Consider context or a state library.

## Don't confuse with

Props vs State: Props are data passed into a component from the outside, whereas state is data managed internally by the component itself.

## Say it at work

- I think we should pass the theme color as a prop instead of hardcoding it in the button component.
- Please update the user profile component to accept the new avatar URL as an optional prop.
