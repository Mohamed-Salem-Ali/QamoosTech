---
id: auto-escaping
category: security
subcategory: application-security
level: intermediate
related: [xss, input-validation, content-security-policy]
tags: [django, python]
aliases: ["autoescape", "html escaping", "output escaping"]
term: "Auto-Escaping"
pronunciation: "AW-toh es-KAY-ping"
keywords: ["template escapes html automatically", "neutralise angle brackets", "prevent xss in templates", "safe filter danger", "variables are escaped", "mark_safe risk", "القالب يهرّب الـ HTML تلقائياً", "تعطيل رموز الأقواس الزاوية", "منع XSS في القوالب", "خطورة الفلتر safe", "المتغيرات تُهرَّب", "مخاطر mark_safe"]
---

## Definition

Auto-escaping is a template feature that automatically converts special characters like `<` and `>` in variables into harmless text, so user input can't inject HTML or scripts.

## Where you hear it

In Django and Jinja templates, XSS prevention guides, and security reviews of `|safe` and `mark_safe`.

## Examples

- Django escapes variables automatically, so a `<script>` tag shows as plain text.
- Don't turn auto-escaping off for user content.

## Common mistake

Marking user text as safe to "fix" a display problem. That removes the protection and opens an XSS hole.

## Don't confuse with

Input validation, which checks data when it comes in. Escaping protects the output when it is shown.

## Say it at work

- Is auto-escaping on in this template?
- Why is there a `|safe` on user input?
