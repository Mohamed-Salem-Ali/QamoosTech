---
id: template
category: web-apis
subcategory: routing-and-views
level: beginner
related: [view, web-framework, url-reversing]
tags: [django, python]
aliases: ["html template", "template engine", "template inheritance"]
term: "Template"
pronunciation: "TEM-playt"
keywords: ["html with placeholders", "server fills in the data", "jinja or django templates", "loops and conditions in html", "render a page", "base layout and blocks", "‏HTML بمواضع فارغة", "الخادم يملأ البيانات", "قوالب Jinja وDjango", "حلقات وشروط في HTML", "عرض صفحة", "تخطيط أساسي وكتل"]
---

## Definition

A template is an HTML file with placeholders and simple logic (loops, conditions) that the server fills with data to produce the final page.

## Where you hear it

In server-rendered apps (Django, Flask, Rails), email generation, and when pages share a base layout.

## Examples

- The template loops over the payments and prints a row for each.
- Every page extends the base template and fills in its block.

## Common mistake

Putting heavy logic or database queries in the template. Prepare the data in the view and keep the template about display.

## Don't confuse with

A React component, which runs in the browser. A template is filled on the server before the page is sent.

## Say it at work

- Pass the list to the template as context.
- Escape user text in the template to avoid XSS.
