---
id: path-converter
category: web-apis
subcategory: routing-and-views
level: intermediate
related: [url-routing, view, query-parameter]
tags: [django, python]
aliases: ["path parameter", "route parameter", "url converter"]
term: "Path Converter"
pronunciation: "PATH kun-VER-ter"
keywords: ["int id in the url", "capture part of the path", "slug and uuid converters", "type of url parameter", "route parameter conversion", "path parameter", "معرّف رقمي في الرابط", "التقاط جزء من المسار", "محوّلات slug وuuid", "نوع معامل الرابط", "تحويل معامل المسار", "معامل المسار"]
---

## Definition

A path converter is the part of a URL pattern that captures a piece of the path and converts it to a type, such as `<int:id>` giving your view a real integer.

## Where you hear it

In Django URL patterns, FastAPI path parameters, and route docs such as `/circles/<int:id>/`.

## Examples

- Use `<int:id>` so a non-number gives a 404 before the view runs.
- The `slug` converter allows letters, numbers and hyphens.

## Common mistake

Using a plain string and converting in the view. The converter validates earlier and keeps views clean.

## Don't confuse with

A query parameter (`?page=2`), which comes after the path and is optional. A path converter is part of the path itself.

## Say it at work

- Which converter handles the id here?
- Add a custom converter for the date format.
