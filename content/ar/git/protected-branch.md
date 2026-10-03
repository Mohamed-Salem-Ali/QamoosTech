---
id: protected-branch
category: git
level: beginner
related: [branch, merge, pull-request, repository]
term: "Protected Branch"
pronunciation: "بُروتيكتيد برانش"
---

## التعريف

إعداد في مستودع الكود (Repository) يمنع الدفع (Push) المباشر أو حذف فروع معينة للحفاظ على استقرار الكود. يتطلب هذا الإعداد غالباً مراجعة الكود (Code Review) أو اجتياز اختبارات تلقائية قبل دمج التغييرات.

## أين تسمعه؟

في اجتماعات الفريق عند مناقشة أمن المستودع، أو عند إعداد سير عمل مراجعة الكود، أو عندما يواجه المطور رفضاً عند محاولة الدفع مباشرة إلى الفرع الرئيسي.

## أمثلة

- We set up a protected branch to ensure all code is reviewed before it reaches production.
  - قمنا بإعداد Protected Branch لضمان مراجعة كل الكود قبل وصوله إلى بيئة الإنتاج.
- You cannot push directly to the main branch because it is a protected branch.
  - لا يمكنك الدفع مباشرة إلى الفرع الرئيسي لأنه Protected Branch.

## خطأ شائع

الاعتقاد بأن الـ Protected Branch يمنع التغييرات تماماً؛ في الواقع هو يفرض عملية محددة (مثل مراجعة الكود) يجب اتباعها قبل قبول التغييرات.
