---
id: mtv
category: architecture
subcategory: patterns
level: beginner
related: [view, template, separation-of-concerns]
tags: [django, python]
aliases: ["mvt"]
term: "MTV (Model-Template-View)"
pronunciation: "EM-TEE-VEE"
keywords: ["django architecture pattern", "model template view", "django version of mvc", "view is the controller", "data html logic split", "how django organises code", "نمط معمارية Django", "النموذج والقالب والعرض", "نسخة Django من MVC", "الـ view هو المتحكم", "فصل البيانات والـ HTML والمنطق", "كيف ينظم Django الكود"]
---

## Definition

MTV is Django's way of organising an app into three parts: the Model (data and database), the Template (the HTML shown to the user) and the View (the logic that connects them). It matches MVC, with Django's View acting as the controller.

## Where you hear it

In Django tutorials, interview questions ("how is MTV different from MVC?"), and architecture diagrams.

## Examples

- In MTV the model holds data, the template shows it, the view decides what to show.
- Django's views are what other frameworks call controllers.

## Common mistake

Assuming Django's View equals MVC's View. In Django the template is the display part and the view is the logic.

## Don't confuse with

MVC, the older pattern with the same three roles under different names.

## Say it at work

- Explain MTV in one sentence.
- Where does this code go in MTV?
