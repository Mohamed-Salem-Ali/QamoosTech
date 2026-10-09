---
id: url-reversing
category: web-apis
subcategory: routing-and-views
level: intermediate
related: [url-routing, view, template]
tags: [django, python]
aliases: ["reverse url", "named routes", "reverse"]
term: "URL Reversing"
pronunciation: "YOO-ar-EL rih-VER-sing"
keywords: ["build url from its name", "reverse function", "url name instead of hardcoded path", "django reverse", "link that survives route changes", "named routes", "بناء الرابط من اسمه", "دالة reverse", "اسم الرابط بدل المسار الثابت", "دالة reverse في Django", "رابط يصمد أمام تغيير المسارات", "المسارات المسماة"]
---

## Definition

URL reversing builds a URL from the route's name (and its parameters) instead of writing the path by hand, so changing a route doesn't break every link.

## Where you hear it

In Django (`reverse()`, `{% url %}`), redirects after a form, and refactors that rename paths.

## Examples

- Redirect with `reverse('circle-detail', args=[circle.id])`.
- Name every route so you can reverse it.
- The template uses reverse to build the link to the order page from its name.

## Common mistake

Hardcoding paths in links and redirects. One path change then breaks pages across the site.

## Don't confuse with

URL routing, which goes from a path to code. Reversing goes the other way, from a name to a path.

## Say it at work

- Use the route name, not the literal path.
- Reverse the URL with the id as an argument.
