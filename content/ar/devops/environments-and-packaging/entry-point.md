---
id: entry-point
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [pyproject-toml, cli, distribution-package]
tags: [python]
aliases: ["console script", "console scripts"]
term: "Entry Point"
translation: "نقطة الدخول"
pronunciation: "إنتري بوينت"
keywords: ["أمر يُنشأ عند التثبيت", "سكريبت الطرفية", "الدالة الرئيسية كأمر", "قسم scripts", "تشغيل أداتي باسمها", "بداية البرنامج", "command created by installing", "console script", "main function as a command", "scripts section", "run my tool by name", "start of the program"]
---

## التعريف

نقطة الدخول (Entry Point) هي المكان الذي يبدأ منه البرنامج. وفي التغليف تجعل نقطة دخول من نوع console script تثبيتَ الحزمة ينشئ أمراً يستدعي دالة اخترتها.

## أين تسمعه؟

في `pyproject.toml` تحت `[project.scripts]`، وفي دروس الـ CLI، ووثائق الأطر عن مكان بدء التنفيذ.

## أمثلة

- Declare `tracker = "tracker.cli:main"` as the entry point.
  - عرّف `tracker = "tracker.cli:main"` كنقطة دخول.
- After installing, the tracker command exists thanks to the entry point.
  - بعد التثبيت يصبح أمر tracker موجوداً بفضل نقطة الدخول.
- The entry point main() parses the arguments and starts the app.
  - تحلّل نقطة الدخول main() المعاملات وتشغّل التطبيق.

## خطأ شائع

توجيهها إلى سكريبت على مستوى الوحدة يعمل عند الاستيراد. وجّهها إلى دالة لا تعمل إلا عند استدعائها.

## لا تخلطه مع

الـ CLI وهو نوع البرامج التي تبدؤها نقطة الدخول غالباً. نقطة الدخول هي الرابط بين الأمر والكود.

## قلها في العمل

- What's the entry point of this service?
  - ما نقطة دخول هذه الخدمة؟
- Rename the function and update the entry point.
  - غيّر اسم الدالة وحدّث نقطة الدخول.
