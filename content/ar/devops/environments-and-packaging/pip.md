---
id: pip
category: devops
subcategory: environments-and-packaging
level: beginner
related: [pypi, package-dependency, virtual-environment]
tags: [python]
term: "pip"
translation: "مثبّت حزم بايثون"
pronunciation: "بيب"
keywords: ["تثبيت حزم بايثون", "أمر pip install", "مثبّت الحزم", "التنزيل من PyPI", "إزالة حزمة", "أمر pip freeze", "install python packages", "pip install", "package installer", "download from pypi", "uninstall a package", "pip freeze"]
---

## التعريف

أداة pip هي مثبّت حزم بايثون. تنزّل الحزم، غالباً من PyPI، وتثبتها في البيئة الحالية.

## أين تسمعه؟

في كل دليل إعداد لبايثون (`pip install ...`)، وأقسام التثبيت في README، وسكريبتات CI.

## أمثلة

- Run `pip install -r requirements.txt` to get everything.
  - نفّذ `pip install -r requirements.txt` للحصول على كل شيء.
- Use `python -m pip` so you are sure which Python it belongs to.
  - استخدم `python -m pip` لتتأكد من أي بايثون هو.

## خطأ شائع

تشغيل `pip install` خارج بيئة افتراضية مما يغيّر بايثون النظام كله.

## لا تخلطه مع

موقع PyPI وهو الفهرس الذي يخزّن الحزم. أما pip فهي الأداة التي تجلب منه.

## قلها في العمل

- Upgrade pip first, then install.
  - حدّث pip أولاً ثم ثبّت.
- pip says there is a version conflict.
  - تقول pip إن هناك تعارضاً في الإصدارات.
