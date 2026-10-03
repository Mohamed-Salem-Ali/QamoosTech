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

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Protected branch وصلاحيات المستودع، لكن الـ protected branches تقيد إجراءات محددة على فروع معينة بغض النظر عن صلاحيات الكتابة العامة للمستخدم في المستودع.

## قلها في العمل

- I can't merge my changes yet because the main branch is a protected branch and I'm still waiting for the required approvals.
  - لا أستطيع دمج تغييراتي حتى الآن لأن الفرع الرئيسي هو protected branch وما زلت أنتظر الموافقات المطلوبة.
- Please ensure that the release branch is configured as a protected branch to prevent accidental commits before the deployment.
  - يرجى التأكد من ضبط فرع الإصدار كـ protected branch لمنع أي عمليات دفع (commits) غير مقصودة قبل النشر.
