---
id: cgroups
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, process, virtual-machine]
aliases: ["control groups", "namespace", "namespaces", "resource limits"]
term: "cgroups"
translation: "المجموعات الضابطة"
pronunciation: "سي جروبس"
keywords: ["تحديد المعالج والذاكرة لمجموعة عمليات", "ميزة في نواة لينكس", "حد ذاكرة Docker", "حدود الموارد", "الطلبات والحدود في Kubernetes", "قاتل نفاد الذاكرة", "limit cpu and memory for a process group", "linux kernel feature", "docker memory limit", "resource limits", "kubernetes requests and limits", "oom killer"]
---

## التعريف

المجموعات الضابطة (cgroups) ميزة في نواة لينكس تحدّ وتقيس ما تستخدمه مجموعة عمليات من المعالج والذاكرة والإدخال والإخراج. تستخدمها الحاويات لفرض حدود الموارد.

## أين تسمعه؟

في Docker وKubernetes (`--memory` وحدود الموارد)، وحوادث القتل بسبب نفاد الذاكرة، ونقاشات بنية الحاويات.

## أمثلة

- The container was killed for exceeding its cgroup memory limit.
  - قُتلت الحاوية لتجاوزها حد ذاكرة الـ cgroup.
- Namespaces isolate what a container sees; cgroups limit what it can use.
  - تعزل الـ namespaces ما تراه الحاوية وتحدّ الـ cgroups ما تستخدمه.

## خطأ شائع

عدم وضع حدود. فقد تجوّع حاوية جامحة كل ما عداها على المضيف.

## لا تخلطه مع

الـ namespaces التي تعزل ما تراه العملية (العمليات والشبكة والملفات). أما cgroups فتتحكم بكم تستهلك.

## قلها في العمل

- Set CPU and memory limits through cgroups.
  - حدّد حدود المعالج والذاكرة عبر cgroups.
- It was OOM-killed at 512 MB.
  - قُتل بسبب نفاد الذاكرة عند 512 ميجابايت.
