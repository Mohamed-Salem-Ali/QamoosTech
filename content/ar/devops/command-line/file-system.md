---
id: file-system
category: devops
subcategory: command-line
level: beginner
related: [hard-link, symbolic-link, persistence]
aliases: ["filesystem", "ext4", "ntfs", "mount"]
term: "File System"
translation: "نظام الملفات"
pronunciation: "فايل سيستم"
keywords: ["كيف تُخزَّن الملفات وتُوجد", "‏ext4 وNTFS وAPFS", "المجلدات والمسارات", "ربط قرص", "صلاحيات الملفات", "تنظيم القرص", "how files are stored and found", "ext4 ntfs apfs", "folders and paths", "mount a disk", "permissions on files", "disk layout"]
---

## التعريف

نظام الملفات (File System) هو الطريقة التي ينظم بها نظام التشغيل البيانات على القرص في ملفات ومجلدات، ويتتبع مكان كل ملف، ويفرض الأسماء والأحجام والصلاحيات.

## أين تسمعه؟

في إدارة لينكس وويندوز، وأحجام Docker، وحوادث "القرص ممتلئ"، ومقررات نظم التشغيل.

## أمثلة

- The container's file system is wiped when it is removed.
  - يُمحى نظام ملفات الحاوية عند إزالتها.
- Mount the volume at `/data`.
  - اربط الحجم عند `/data`.
- The uploads are stored on the file system in a folder named by date.
  - تُخزَّن الملفات المرفوعة في نظام الملفات داخل مجلد باسم التاريخ.

## خطأ شائع

تخزين بيانات مهمة داخل نظام ملفات الحاوية نفسها. تختفي معها؛ استخدم حجماً (Volume).

## لا تخلطه مع

قاعدة البيانات التي تضيف الاستعلامات والفهارس والمعاملات فوق التخزين. أما نظام الملفات فيخزن ملفات مسماة فقط.

## قلها في العمل

- Which file system is this volume using?
  - أي نظام ملفات يستخدمه هذا الحجم؟
- The file system is read-only.
  - نظام الملفات للقراءة فقط.
