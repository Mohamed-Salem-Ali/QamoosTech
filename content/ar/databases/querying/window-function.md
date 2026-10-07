---
id: window-function
category: databases
subcategory: querying
level: intermediate
related: [aggregation, group-by, subquery]
tags: [sql, postgresql]
aliases: ["over clause", "row_number", "running total", "partition by"]
term: "Window Function"
translation: "الدالة النافذة"
pronunciation: "ويندو فنكشن"
keywords: ["مجموع تراكمي", "الترتيب ضمن مجموعة", "عبارة OVER وPARTITION BY", "رقم الصف", "المقارنة بالصف السابق", "الحساب دون دمج الصفوف", "running total", "rank within a group", "over partition by", "row number", "compare to previous row", "calculate without collapsing rows"]
---

## التعريف

الدالة النافذة (Window Function) تحسب قيمة عبر مجموعة صفوف مرتبطة، كمجموع تراكمي أو ترتيب ضمن مجموعة، مع إبقاء كل الصفوف. وتستخدم `OVER (...)`.

## أين تسمعه؟

في SQL للتقارير والتحليلات، وأسئلة المقابلات ("أعلى 3 لكل مجموعة")، وتعبيرات `Window()` في Django.

## أمثلة

- Use `ROW_NUMBER() OVER (PARTITION BY member ORDER BY paid_at)` to get each member's first payment.
  - استخدم `ROW_NUMBER() OVER (PARTITION BY member ORDER BY paid_at)` لجلب أول دفعة لكل عضو.
- A running total is a window function over the ordered rows.
  - المجموع التراكمي دالة نافذة على الصفوف المرتبة.

## خطأ شائع

توقع أنها تدمج الصفوف مثل `GROUP BY`. الدالة النافذة تُبقي كل الصفوف وتضيف عموداً.

## لا تخلطه مع

‏`GROUP BY` الذي يحول كل مجموعة إلى صف واحد.

## قلها في العمل

- Rank them with a window function.
  - رتّبهم بدالة نافذة.
- Partition by team, order by score.
  - قسّم حسب الفريق ورتّب حسب النتيجة.
