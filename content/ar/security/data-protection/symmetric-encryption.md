---
id: symmetric-encryption
category: security
subcategory: data-protection
level: intermediate
related: [asymmetric-encryption, encryption, block-cipher]
aliases: ["aes", "secret key encryption", "shared key"]
term: "Symmetric Encryption"
translation: "التشفير المتماثل"
pronunciation: "سيمتريك إنكريبشن"
keywords: ["مفتاح واحد للتشفير وفكه", "معيار AES", "تشفير سريع للبيانات الكبيرة", "سر مشترك", "تشفير الملفات والأقراص", "يجب إبقاء المفتاح سرياً", "same key encrypts and decrypts", "aes", "fast bulk encryption", "shared secret", "encrypt files and disks", "key must stay secret"]
---

## التعريف

التشفير المتماثل (Symmetric Encryption) يستخدم المفتاح السري نفسه لقفل البيانات وفتحها. وهو سريع فيحمي كميات كبيرة من البيانات، لكن يجب أن يتشارك الطرفان المفتاح بأمان.

## أين تسمعه؟

في تشفير الأقراص وقواعد البيانات (AES)، ونقل بيانات HTTPS بعد المصافحة، ومراجعات الأمان.

## أمثلة

- The backup is encrypted with AES-256, a symmetric cipher.
  - النسخة الاحتياطية مشفرة بـ AES-256 وهو تشفير متماثل.
- Anyone with the key can decrypt the data, so protect the key.
  - كل من يملك المفتاح يستطيع فك التشفير لذا احمِ المفتاح.

## خطأ شائع

تخزين المفتاح بجانب البيانات المشفرة. هذا يجعل التشفير بلا فائدة.

## لا تخلطه مع

التشفير غير المتماثل الذي يستخدم زوج مفتاح عام وخاص فلا يلزم تبادل سر مسبقاً.

## قلها في العمل

- Use AES-GCM for the data.
  - استخدم AES-GCM للبيانات.
- Where is the key stored?
  - أين يُخزَّن المفتاح؟
