---
id: containerization
category: devops
subcategory: infrastructure
level: intermediate
related: [deployment, environment-variable, docker-image, persistent-volume]
tags: [docker]
term: "Containerization (Docker)"
pronunciation: "kun-TAY-ner-ih-ZAY-shun"
keywords: ["run app everywhere same way","package software with dependencies","docker style application deployment","avoid works on my machine","lightweight alternative to virtual machines","isolate software execution environment","deploy apps using containers","standardize application runtime environment","containerize my software project","devops packaging technology","تقنية عزل التطبيقات","تشغيل التطبيق على أي جهاز","تغليف البرمجيات مع متطلباتها","بديل خفيف للأجهزة الافتراضية","حل مشكلة يعمل على جهازي","طريقة عمل دوكر","استخدام الحاويات في البرمجة","تنظيم بيئة تشغيل التطبيق","تجهيز التطبيق للنشر السحابي","تقنية الكونتينر"]
---
## Definition

Packing an app with everything it needs into a container, so it runs the same way on any machine.

## Where you hear it

Docker, Kubernetes, and deployment talks ("it works on my machine").

## Examples

- We run the API in a Docker container.
- Containerization removed the "works on my machine" problem.
- Packaging the service in a container means the staging and production images are identical.

## Common mistake

Treating a container like a virtual machine, installing things by hand inside it. Put everything in the image instead.

## Don't confuse with

Containerization shares the host OS kernel to run lightweight packages, whereas virtualization runs a full guest operating system on top of a hypervisor.

## Say it at work

- We should move containerization to the top of our priority list for the upcoming microservices migration.
- Could you please check if the containerization setup is causing this memory leak in the staging environment?
