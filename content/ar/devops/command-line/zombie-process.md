---
id: zombie-process
category: devops
subcategory: command-line
level: intermediate
related: [process, unix-signal, container-orchestration]
aliases: ["defunct process", "zombie", "defunct"]
term: "Zombie Process"
translation: "العملية الزومبي"
pronunciation: "زومبي بروسس"
keywords: ["انتهت لكنها ما تزال مدرجة", "الأب لم ينتظر", "عملية ميتة", "المعرّف يبقى في الجدول", "مشكلة init في Docker", "حصاد الأبناء", "finished but still listed", "parent did not wait", "defunct", "pid stays in table", "docker init problem", "reap children"]
---

## التعريف

العملية الزومبي (Zombie Process) عملية ابن انتهت لكنها ما تزال تظهر في جدول العمليات لأن أباها لم يقرأ حالة خروجها بعد. لا تستهلك موارد تقريباً لكنها تحتفظ بمعرّف PID.

## أين تسمعه؟

في مخرجات `ps` بعلامة `Z` أو `<defunct>`، ومشكلات PID 1 في الحاويات، ونظافة الخوادم.

## أمثلة

- Thousands of zombie processes filled the process table.
  - ملأت آلاف العمليات الزومبي جدول العمليات.
- Use a tiny init such as `tini` in the container to reap zombies.
  - استخدم init صغيراً مثل `tini` في الحاوية لحصاد العمليات الزومبي.
- The parent process never reaped its children, so zombie processes piled up.
  - لم تجمع العملية الأب أبناءها أبداً، فتراكمت العمليات الزومبي.

## خطأ شائع

محاولة `kill` لعملية زومبي. هي ميتة أصلاً؛ أصلح الأب أو أعد تشغيله ليحصد أبناءه.

## لا تخلطه مع

العملية العالقة أو الجامحة التي ما زالت حية وتعمل. أما الزومبي فقد انتهى.

## قلها في العمل

- There are zombies in the process list.
  - هناك عمليات زومبي في القائمة.
- Who is the parent of this defunct process?
  - من هو أب هذه العملية الميتة؟
