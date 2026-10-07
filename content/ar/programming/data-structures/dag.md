---
id: dag
category: programming
subcategory: data-structures
level: intermediate
related: [topological-sort, pipeline, binary-tree]
tags: [python]
aliases: ["dependency graph"]
term: "DAG (Directed Acyclic Graph)"
translation: "الرسم الموجّه غير الدوري"
pronunciation: "داج"
keywords: ["أسهم بلا حلقات", "‏DAGs في Airflow", "رسم اعتماديات البناء", "تاريخ Git", "المهام واعتمادياتها", "لا دورات", "arrows with no loops", "airflow dags", "build dependency graph", "git history", "tasks and dependencies", "no cycles"]
---

## التعريف

الرسم الموجّه غير الدوري (DAG) رسم لحوافه اتجاه ولا دورات فيه: باتباع الأسهم لا تعود أبداً إلى نقطة البداية. وهو الشكل الطبيعي للمهام واعتمادياتها.

## أين تسمعه؟

في Apache Airflow وخطوط CI، وأنظمة البناء، وتاريخ commits في Git، وأطر معالجة البيانات.

## أمثلة

- Each Airflow workflow is defined as a DAG of tasks.
  - يُعرَّف كل مسار عمل في Airflow كـ DAG من المهام.
- Git history is a DAG of commits.
  - تاريخ Git هو DAG من commits.

## خطأ شائع

إضافة اعتمادية تشير للخلف. تنشأ دورة ولا يعود الرسم DAG صالحاً.

## لا تخلطه مع

الشجرة وهي DAG لكل عقدة فيها أب واحد بالضبط. أما عقدة DAG فقد يكون لها عدة آباء.

## قلها في العمل

- Model the pipeline as a DAG.
  - نمذج خط التجهيز كـ DAG.
- Check for cycles before running.
  - افحص الدورات قبل التشغيل.
