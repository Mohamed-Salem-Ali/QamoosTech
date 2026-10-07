---
id: scalability
category: architecture
subcategory: scaling
level: intermediate
related: [load-balancer, cache, single-point-of-failure]
term: "Scalability"
translation: "قابلية التوسع"
pronunciation: "سكيلابيليتي"
keywords: ["قابلية التوسع","القدرة على تحمل ضغط المستخدمين","التوسع الأفقي والرأسي للنظام","زيادة قدرة النظام على التحمل","التعامل مع زيادة حجم العمل","التوسع لاستيعاب عدد أكبر","سكيلابيليتي","تحمل زيادة حركة المرور","تطوير النظام لزيادة المستخدمين","handle more users and traffic","grow system capacity easily","scale up and scale out","horizontal and vertical scaling","system capacity planning","support high traffic load","scalabilty","skalability","prepare for traffic growth","handle increased load"]
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

## لا تخلطه مع

غالبًا ما يتم الخلط بين قابلية التوسع (Scalability) والمرونة (Elasticity)؛ فبينما تعني قابلية التوسع القدرة على التعامل مع زيادة الحمل بإضافة موارد، تعني المرونة القدرة على إضافة أو إزالة هذه الموارد تلقائيًا بناءً على الطلب الفعلي.

## قلها في العمل

- We need to ensure our database architecture has enough scalability to handle the projected traffic spike next month.
  - نحتاج إلى التأكد من أن بنية قاعدة البيانات لدينا تمتلك قابلية التوسع الكافية للتعامل مع ذروة الحركة المتوقعة الشهر المقبل.
- The current monolithic structure limits our scalability, so I suggest we migrate to a microservices approach.
  - الهيكلية الأحادية (monolithic) الحالية للنظام تحد من قابلية التوسع لدينا، لذا أقترح أن ننتقل إلى نهج الخدمات المصغرة.
