---
id: upstream
category: git
level: intermediate
related: [branch, fork, repository]
term: "Upstream"
pronunciation: "أب-ستريم"
translation: "المستودع الرئيسي / المصدر"
keywords: ["المستودع الأصلي في جيت","ربط الفرع بالمستودع الرئيسي","الفرق بين أوريجين وأبستريم","المستودع الأساسي للمشروع","جلب التغييرات من المصدر","تحديث النسخة من المستودع الأصلي","إضافة المستودع البعيد الأصلي","أبستريم في جيت","original repository after forking","git remote upstream vs origin","track main project repository","pull from original repo","link fork to original","upstream repository in git","configure remote upstream","difference between origin and upstream"]
---

## التعريف

يشير مصطلح Upstream إلى المستودع الأصلي الذي قمت بنسخه (fork)، أو الفرع البعيد الافتراضي الذي يتابعه فرعك المحلي لجلب التغييرات وإرسالها.

## أين تسمعه؟

عند جلب أحدث التغييرات من المشروع الأساسي أو عند إعداد ربط المستودعات في جيت.

## أمثلة

- Run `git remote add upstream` to link your fork to the original repository.
  - قم بتشغيل `git remote add upstream` لربط نسختك بالمستودع الأصلي.
- Always fetch from the upstream repository before starting a new feature.
  - احرص دائماً على جلب التغييرات من المستودع الرئيسي قبل البدء في تطوير ميزة جديدة.
- I pulled the latest changes from upstream before rebasing my fork.
  - سحبتُ أحدث التغييرات من upstream قبل إعادة تأسيس نسختي المتفرّعة.

## خطأ شائع

الخلط بين upstream و origin، حيث أن origin هو المستودع البعيد الخاص بك بينما upstream هو المشروع الأساسي الأصلي.

## لا تخلطه مع

يشير مصطلح upstream إلى المستودع الأصلي للمصدر، بينما يشير مصطلح origin إلى نسختك الشخصية أو المستودع البعيد الخاص بك.

## قلها في العمل

- Did you remember to pull the latest changes from upstream before pushing your code?
  - هل تذكرت جلب أحدث التغييرات من المستودع الرئيسي قبل دفع الكود الخاص بك؟
- Please ensure your branch is up to date with the upstream repository before opening a pull request.
  - يرجى التأكد من أن فرعك محدث مع المستودع الرئيسي قبل فتح طلب سحب.
