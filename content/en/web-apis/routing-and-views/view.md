---
id: view
category: web-apis
subcategory: routing-and-views
level: beginner
related: [url-routing, template, request-response]
tags: [django, python]
aliases: ["view function", "controller"]
term: "View"
pronunciation: "VYOO"
keywords: ["function that handles a request", "returns a response", "django view", "controller logic", "html or json response", "request in response out", "دالة تعالج الطلب", "تُرجع استجابة", "الـ view في Django", "منطق المتحكم", "استجابة HTML أو JSON", "طلب يدخل واستجابة تخرج"]
---

## Definition

A view is the function (or class) that receives a request and returns a response. It is where you decide what data to fetch and what to send back.

## Where you hear it

In Django and Flask code, MVC and MVT discussions, and bug reports that name "the view that handles this URL".

## Examples

- The view loads the circle, then renders the page.
- Keep business rules out of the view; call a service function.

## Common mistake

Putting all the logic in the view. It becomes huge and hard to test; move rules into separate functions.

## Don't confuse with

A template, which only describes how the page looks. The view decides what data the page gets.

## Say it at work

- Which view serves this URL?
- The view returns a 404 when the circle doesn't exist.
