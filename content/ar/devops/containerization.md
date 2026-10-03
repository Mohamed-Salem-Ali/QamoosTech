---
id: containerization
category: devops
level: intermediate
related: [deployment, environment-variable]
term: "Containerization (Docker)"
translation: "الحاويات"
pronunciation: "كونتينرايزيشن"
---
## التعريف

تغليف التطبيق مع كل ما يحتاجه داخل حاوية (container)، فيعمل بالطريقة نفسها على أي جهاز.

## أين تسمعه؟

Docker وKubernetes ونقاشات النشر («يعمل على جهازي»).

## أمثلة

- We run the API in a Docker container.
  - نشغّل الـ API داخل حاوية Docker.
- Containerization removed the "works on my machine" problem.
  - أزالت الحاويات مشكلة «يعمل على جهازي».

## خطأ شائع

التعامل مع الحاوية كأنها جهاز افتراضي وتثبيت الأشياء يدويًا بداخلها. ضع كل شيء في الـ image بدلًا من ذلك.
