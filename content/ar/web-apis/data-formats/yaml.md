---
id: yaml
category: web-apis
subcategory: data-formats
level: beginner
related: [json, serialization, environment-variable, markdown]
term: "YAML"
translation: "YAML"
pronunciation: "ياميل"
keywords: ["ملف إعداد YAML", "صيغة تعتمد على المسافات البادئة", "ملف docker compose", "ملف Kubernetes", "yaml configuration file", "indentation based format", "docker compose yaml", "kubernetes manifest", "yaml syntax error"]
---

## التعريف

صيغة بيانات سهلة القراءة للبشر، تعتمد على المسافات البادئة بدلاً من الأقواس. وهي شائعة في ملفات الإعداد، مثل Docker Compose وملفات Kubernetes، لكن قواعد المسافات صارمة وسهلة الخطأ.

## أين تسمعه؟

في ملفات خطوط CI، وإعدادات الحاويات، وملفات Kubernetes.

## أمثلة

- The pipeline is defined in a YAML file in the repository.
  - يُعرَّف خط العمل في ملف YAML داخل المستودع.
- A tab instead of spaces breaks the whole YAML file.
  - تُفسد علامة الجدولة بدلاً من المسافات ملف YAML كله.
- The Docker Compose file is written in YAML, so check the indentation first.
  - كُتب ملف Docker Compose بصيغة YAML، لذا تحقّق من المسافات البادئة أولاً.

## خطأ شائع

خلط الجداول بالمسافات، أو كتابة no أو on دون علامات تنصيص، فقد يقرأها YAML قيمة منطقية.

## لا تخلطه مع

YAML يكتبه الناس ويقرؤونه، أما JSON فأكثر صرامة وهو الصيغة المعتادة لتبادل البيانات بين البرامج.
