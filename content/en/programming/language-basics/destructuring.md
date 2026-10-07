---
id: destructuring
category: programming
subcategory: language-basics
level: beginner
related: [object, array]
tags: [javascript]
term: "Destructuring"
pronunciation: "dee-STRUK-chur-ing"
keywords: ["unpack object properties into variables","extract values from array javascript","assign array elements to variables","cleaner way to get object keys","destructing syntax in javascript","distructuring","extract data from object quickly","javascript object unpacking","python destructuring syntax","استخراج القيم من الكائنات","فك المصفوفة إلى متغيرات","أخذ خصائص الكائن في متغيرات","استخراج بيانات من المصفوفة","طريقة مختصرة لتعيين المتغيرات","تفكيك الكائنات في جافاسكريبت","ديستراكشرينج","استخراج حقول الكائن"]
---

## Definition

Destructuring is a syntax feature that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a concise way to extract data without needing multiple assignment statements.

## Where you hear it

During code reviews, when discussing modern JavaScript or Python syntax, or when refactoring data-heavy functions.

## Examples

- You can use destructuring to extract specific fields from a user object into local variables.
- Destructuring an array allows you to assign its elements to individual variables in one line.

## Common mistake

Developers often try to destructure values from `null` or `undefined` objects, which causes the program to throw a runtime error.

## Don't confuse with

Destructuring is often confused with spread syntax; while destructuring extracts values out of a collection into variables, the spread operator expands the elements of a collection into a new structure.

## Say it at work

- I'm going to use destructuring here to pull the user ID and email directly from the response object.
- Please consider using destructuring in this component to make the code cleaner and easier to read.
