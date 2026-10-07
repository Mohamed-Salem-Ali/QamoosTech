---
id: mtv
category: architecture
subcategory: patterns
level: beginner
related: [view, template, separation-of-concerns]
tags: [django, python]
aliases: ["mvt"]
term: "MTV (Model-Template-View)"
translation: "نمط النموذج والقالب والعرض"
pronunciation: "إم تي في"
keywords: ["نمط معمارية Django", "النموذج والقالب والعرض", "نسخة Django من MVC", "الـ view هو المتحكم", "فصل البيانات والـ HTML والمنطق", "كيف ينظم Django الكود", "django architecture pattern", "model template view", "django version of mvc", "view is the controller", "data html logic split", "how django organises code"]
---

## التعريف

نمط MTV هو طريقة Django لتنظيم التطبيق في ثلاثة أجزاء: النموذج Model (البيانات وقاعدة البيانات) والقالب Template (الـ HTML المعروض للمستخدم) والعرض View (المنطق الذي يربطهما). وهو يقابل MVC حيث يعمل الـ View في Django كالمتحكم.

## أين تسمعه؟

في دروس Django، وأسئلة المقابلات ("ما الفرق بين MTV وMVC؟")، ومخططات المعمارية.

## أمثلة

- In MTV the model holds data, the template shows it, the view decides what to show.
  - في MTV يحمل النموذج البيانات ويعرضها القالب وتقرر الـ view ما يُعرض.
- Django's views are what other frameworks call controllers.
  - الـ views في Django هي ما تسميه أطر أخرى متحكمات.

## خطأ شائع

الظن بأن الـ View في Django هو الـ View في MVC. في Django القالب هو جزء العرض والـ view هو المنطق.

## لا تخلطه مع

نمط MVC الأقدم بالأدوار الثلاثة نفسها لكن بأسماء مختلفة.

## قلها في العمل

- Explain MTV in one sentence.
  - اشرح MTV في جملة واحدة.
- Where does this code go in MTV?
  - أين يوضع هذا الكود في MTV؟
