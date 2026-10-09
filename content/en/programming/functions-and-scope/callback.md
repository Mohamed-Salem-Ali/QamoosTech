---
id: callback
category: programming
subcategory: functions-and-scope
level: intermediate
related: [async-await, function]
term: "Callback"
pronunciation: "KAWL-bak"
keywords: ["function passed as argument","run function after task finishes","handle asynchronous response function","javascript event handler function","callback hell problem","nested functions in nodejs","pass function to another function","execute code later asynchronously","call back function","colback","دالة تمرر لدالة أخرى","تنفيذ دالة بعد انتهاء المهمة","دالة استدعاء لاحق","جحيم الـ callbacks في البرمجة","معالجة غير متزامنة بالدورات","تمرير دالة كمتغير","استدعاء دالة عند انتهاء الطلب","دالة كولباك","كول باك"]
---
## Definition

A function you pass to another function so it can be called later, often when a task finishes.

## Where you hear it

JavaScript and Node.js, event handlers, and older asynchronous code.

## Examples

- Pass a callback that runs after the file is read.
- Nested callbacks became hard to read, so we moved to `async/await`.
- The button passes a callback that runs when the request finishes.

## Common mistake

Nesting callbacks inside callbacks until the code becomes unreadable ("callback hell").

## Don't confuse with

Callback vs Promise: A callback is a function passed as an argument to be executed later, whereas a Promise is an object representing the eventual completion or failure of an asynchronous operation.

## Say it at work

- Could you pass a callback to this function so we can handle the response once the API call finishes?
- I have refactored the module to use a callback function for processing the data stream instead of the previous synchronous approach.
