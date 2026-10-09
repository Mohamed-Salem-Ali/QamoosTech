---
id: containerization
category: devops
subcategory: infrastructure
level: intermediate
related: [deployment, environment-variable, docker-image, persistent-volume]
tags: [docker]
term: "Containerization (Docker)"
translation: "تقنية الحاويات"
pronunciation: "كونتينرايزيشن"
keywords: ["تقنية عزل التطبيقات","تشغيل التطبيق على أي جهاز","تغليف البرمجيات مع متطلباتها","بديل خفيف للأجهزة الافتراضية","حل مشكلة يعمل على جهازي","طريقة عمل دوكر","استخدام الحاويات في البرمجة","تنظيم بيئة تشغيل التطبيق","تجهيز التطبيق للنشر السحابي","تقنية الكونتينر","run app everywhere same way","package software with dependencies","docker style application deployment","avoid works on my machine","lightweight alternative to virtual machines","isolate software execution environment","deploy apps using containers","standardize application runtime environment","containerize my software project","devops packaging technology"]
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
- Packaging the service in a container means the staging and production images are identical.
  - تغليف الخدمة في حاوية يعني أن صورتي الاختبار والإنتاج متطابقتان.

## خطأ شائع

التعامل مع الحاوية كأنها جهاز افتراضي وتثبيت الأشياء يدويًا بداخلها. ضع كل شيء في الـ image بدلًا من ذلك.

## لا تخلطه مع

تتشارك تقنية الحاويات نواة نظام التشغيل المضيف لتشغيل حزم خفيفة، بينما تشغيل الأنظمة الافتراضية يتطلب نظام تشغيل ضيفاً كاملاً فوق مدير الأجهزة الافتراضية.

## قلها في العمل

- We should move containerization to the top of our priority list for the upcoming microservices migration.
  - يجب أن نضع تقنية الحاويات على رأس قائمة أولوياتنا لعملية الانتقال القادمة للخدمات المصغرة.
- Could you please check if the containerization setup is causing this memory leak in the staging environment?
  - هل يمكنك من فضلك التحقق مما إذا كان إعداد الحاويات هو سبب تسرب الذاكرة هذا في بيئة التجربة والاختبار؟
