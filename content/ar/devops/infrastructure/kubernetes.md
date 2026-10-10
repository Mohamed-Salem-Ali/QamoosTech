---
id: kubernetes
category: devops
subcategory: infrastructure
level: intermediate
related: [container-orchestration, pod]
term: "Kubernetes"
translation: "كوبيرنيتس"
pronunciation: "كوبرنيتس"
aliases: ["k8s"]
keywords: ["إعادة تشغيل الحاويات المتعطلة تلقائياً", "عنقود كوبيرنيتس", "نشر الحاويات وتوسيعها", "تشغيل الحاويات على عدة خوادم", "منصة تشغيل الحاويات", "platform that schedules containers", "run containers across many servers", "deploy and scale containers", "self-healing containers", "k8s cluster", "restart failed containers automatically"]
---

## التعريف

كوبيرنيتس (Kubernetes) نظام مفتوح المصدر يشغّل الحاويات عبر أجهزة كثيرة. تصف الحالة التي تريدها، مثل ثلاث نسخ من خدمة ما، فيجدول الحاويات ويعيد تشغيلها ويوسّعها لتطابقها.

## أين تسمعه؟

في تذاكر النشر، واجتماعات فرق DevOps، ومراجعات الحوادث، كلما سأل أحدهم أي عنقود أو بود يتأثر.

## أمثلة

- We deploy the API to Kubernetes with three replicas.
  - ننشر الواجهة البرمجية على Kubernetes بثلاث نسخ.
- Kubernetes restarted the crashed pod within seconds.
  - أعاد Kubernetes تشغيل الـ pod المتعطل خلال ثوانٍ.
- Check the cluster state with kubectl before you roll back.
  - تحقق من حالة العنقود بأمر kubectl قبل التراجع.

## خطأ شائع

أن تظن أن كوبيرنيتس يشغّل الحاويات بنفسه. هو يجدولها ويديرها، بينما يشغّلها محرك حاويات مثل containerd على كل عقدة.

## لا تخلطه مع

Docker يبني حاوية واحدة ويشغّلها على جهاز واحد. أما Kubernetes فيدير حاويات كثيرة عبر أجهزة كثيرة: الجدولة وإعادة التشغيل والتوسيع والشبكات.

## قلها في العمل

- Is it running on Kubernetes or on a plain virtual machine?
  - هل يعمل على Kubernetes أم على خادم افتراضي عادي؟
- Scale the deployment to five replicas.
  - وسّع النشر إلى خمس نسخ.
