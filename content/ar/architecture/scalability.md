---
id: scalability
category: architecture
level: intermediate
related: [load-balancer, cache, single-point-of-failure]
term: "Scalability"
translation: "قابلية التوسع"
pronunciation: "سكيلابيليتي"
---
## التعريف

مدى قدرة النظام على الاستمرار في العمل عندما يزداد المستخدمون أو البيانات أو الحركة. يمكنك التوسع رأسيًا (خادم أقوى) أو أفقيًا (خوادم أكثر).

## أين تسمعه؟

تصميم الأنظمة، والمقابلات، والسير الذاتية.

## أمثلة

- Can this design scale to 100,000 users?
  - هل يستطيع هذا التصميم التوسع إلى 100 ألف مستخدم؟
- We scaled out by adding two more servers behind a load balancer.
  - توسعنا أفقيًا بإضافة خادمين خلف load balancer.

## خطأ شائع

قول «scalable» دون شرح الكيفية. وضّح ما الذي يتوسع وكيف، مثل «أفقيًا عبر حاويات بلا حالة».
