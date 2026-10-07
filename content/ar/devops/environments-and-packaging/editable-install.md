---
id: editable-install
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [pip, distribution-package, virtual-environment]
tags: [python]
aliases: ["develop mode", "pip install -e"]
term: "Editable Install"
translation: "التثبيت القابل للتحرير"
pronunciation: "إديتابل إنستول"
keywords: ["أمر التثبيت بخيار e", "التغييرات تُطبَّق دون إعادة تثبيت", "وضع التطوير", "رابط بدل نسخة", "تثبيت مشروعك محلياً", "تغييرات الكود مباشرة", "pip install -e", "changes apply without reinstalling", "develop mode", "link instead of copy", "install your own project locally", "live code changes"]
---

## التعريف

التثبيت القابل للتحرير (Editable Install) يثبّت مشروعك كرابط إلى مجلد مصدره، فتُطبَّق التعديلات فوراً دون إعادة تثبيت. ويتم بالأمر `pip install -e .`.

## أين تسمعه؟

في وثائق إعداد المطور للمكتبات وفي المشاريع ذات تخطيط `src`.

## أمثلة

- Install the project in editable mode so tests import your latest code.
  - ثبّت المشروع بوضع قابل للتحرير لتستورد الاختبارات أحدث كود لديك.
- After an editable install the new command is available in the venv.
  - بعد التثبيت القابل للتحرير يصبح الأمر الجديد متاحاً في الـ venv.

## خطأ شائع

استخدامه في الإنتاج. هو راحة للتطوير؛ والإنتاج يجب أن يثبّت حزمة مبنية فعلية.

## لا تخلطه مع

التثبيت العادي الذي ينسخ لقطة من الكود. التعديلات اللاحقة لا تغيّر المثبت.

## قلها في العمل

- Run `pip install -e .[dev]` to set up.
  - نفّذ `pip install -e .[dev]` للإعداد.
- It didn't pick up my change because it wasn't an editable install.
  - لم يلتقط تعديلي لأنه لم يكن تثبيتاً قابلاً للتحرير.
