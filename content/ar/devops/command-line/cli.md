---
id: cli
category: devops
subcategory: command-line
level: beginner
related: [exit-code, standard-streams, entry-point]
tags: [python]
aliases: ["command line interface", "command-line tool", "subcommand", "command line"]
term: "CLI"
translation: "واجهة سطر الأوامر"
pronunciation: "سي إل آي"
keywords: ["واجهة سطر الأوامر", "برنامج تشغله بالكتابة", "أداة في الطرفية", "أوامر فرعية وخيارات", "أوامر بأسلوب git commit", "المعاملات والخيارات", "command line interface", "program you run by typing", "terminal tool", "subcommands and flags", "git commit style commands", "arguments and options"]
---

## التعريف

الـ CLI (واجهة سطر الأوامر) برنامج تستخدمه بكتابة أوامر في الطرفية. وكثير منها له أوامر فرعية مثل `git commit` مع معاملات وخيارات.

## أين تسمعه؟

في أدوات المطورين، وسكريبتات الأتمتة، وعمل DevOps، وعند بناء أدوات صغيرة لك أو لفريقك.

## أمثلة

- I built a CLI to add tasks from the terminal.
  - بنيت CLI لإضافة المهام من الطرفية.
- Each subcommand does one job: `add`, `list`, `done`.
  - كل أمر فرعي يؤدي مهمة واحدة: `add` و`list` و`done`.

## خطأ شائع

طباعة كل شيء في مجرى واحد وإرجاع النجاح دائماً. الـ CLI الجيد يستخدم رموز الخروج ويفصل النتائج عن الأخطاء.

## لا تخلطه مع

الواجهة الرسومية (GUI) التي تستخدمها بالنوافذ والنقرات. أما الـ CLI فنص يدخل ونص يخرج لذا يسهل أتمتته.

## قلها في العمل

- Give the CLI a `--help` option.
  - امنح الـ CLI خيار `--help`.
- We can script this because it's a CLI.
  - نستطيع كتابة سكريبت لهذا لأنه CLI.
