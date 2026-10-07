---
id: exit-code
category: devops
subcategory: command-line
level: beginner
related: [cli, standard-streams, ci-cd]
tags: [python]
aliases: ["exit status", "return code"]
term: "Exit Code"
translation: "رمز الخروج"
pronunciation: "إيجزت كود"
keywords: ["رقم يعود إلى الطرفية", "الصفر يعني النجاح", "غير الصفر يعني الفشل", "دالة الخروج من البرنامج", "يفشل CI بسبب رمز الخروج", "حالة الأمر", "number returned to the shell", "0 means success", "non-zero means failure", "sys.exit", "ci fails on exit code", "status of a command"]
---

## التعريف

رمز الخروج (Exit Code) هو الرقم الذي يعيده البرنامج إلى الطرفية عند انتهائه. الصفر يعني النجاح وأي رقم آخر يعني نوعاً من الفشل.

## أين تسمعه؟

في السكريبتات (سلاسل `&&`)، وخطوط CI التي تصبح حمراء، وأدوات CLI التي تحتاج إلى الإبلاغ عن الأخطاء.

## أمثلة

- The tests failed, so the command exits with code 1 and CI stops.
  - فشلت الاختبارات فيخرج الأمر برمز 1 ويتوقف CI.
- Call `sys.exit(2)` when the arguments are invalid.
  - استدعِ `sys.exit(2)` عندما تكون المعاملات غير صالحة.

## خطأ شائع

طباعة رسالة خطأ مع الخروج برمز 0. ستظن السكريبتات وCI أن كل شيء نجح.

## لا تخلطه مع

نص المخرجات الذي يقرأه الإنسان. أما رمز الخروج فهو النتيجة المقروءة آلياً.

## قلها في العمل

- Check the exit code before continuing.
  - افحص رمز الخروج قبل المتابعة.
- Why did it exit with 137?
  - لماذا خرج برمز 137؟
