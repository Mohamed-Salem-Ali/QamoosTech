---
id: ci-cd
category: devops
subcategory: ci-cd-and-delivery
level: intermediate
related: [deployment, unit-test, rollback, ephemeral-environment]
term: "CI/CD"
translation: "التكامل والنشر المستمر"
pronunciation: "سي آي سي دي"
keywords: ["أتمتة بناء ونشر البرمجيات","خط أنابيب النشر التلقائي","كيفية أتمتة اختبار الكود","التكامل والنشر المستمر","أدوات النشر التلقائي للبرمجيات","أتمتة دورة حياة التطوير","شرح مفهوم سي آي سي دي","أتمتة رفع التحديثات للخادم","مسار العمل التلقائي للبرمجة","أتمتة عمليات النشر والدمج","تطوير البرمجيات بشكل مستمر","أتمتة الاختبارات عند الدمج","automate code testing and deployment","continuous integration and delivery","pipeline for software releases","automatic build and deploy process","devops automation workflow","how to automate code deployment","continuous deployment tools","ci cd pipeline explanation","software delivery automation","automate testing on merge","ci cd meaning","continuous integration explained"]
---
## التعريف

أتمتة تختبر كل تغيير في الشيفرة (CI) ثم توصله إلى الخادم (CD)، فتصبح الإصدارات سريعة ومتكررة بنفس الطريقة.

## أين تسمعه؟

إعلانات الوظائف، ونقاشات DevOps، وفحوصات الـ pull requests.

## أمثلة

- Our CI/CD pipeline runs the tests and deploys on every merge to `main`.
  - يشغّل خط CI/CD الاختبارات وينشر عند كل دمج في `main`.
- The CI failed, so the code cannot be merged.
  - فشل الـ CI، لذلك لا يمكن دمج الشيفرة.

## خطأ شائع

الخلط بين Continuous Delivery وContinuous Deployment. الأولى تعني «جاهز للنشر» والثانية «يُنشر تلقائيًا».

## قلها في العمل

- Can you check why the CI/CD pipeline is failing on the master branch?
  - هل يمكنك التحقق من سبب فشل خط أنابيب CI/CD على فرع master؟
- We need to update our CI/CD workflow to run security scans before deploying to production.
  - يحتاج إلى تحديث مسار عمل CI/CD الخاص بنا لتشغيل فحوصات الأمان قبل النشر إلى الإنتاج.
