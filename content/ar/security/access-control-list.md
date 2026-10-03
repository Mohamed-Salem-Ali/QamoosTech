---
id: access-control-list
category: security
level: intermediate
related: [authentication-vs-authorization, rbac]
term: "Access Control List (ACL)"
translation: "قائمة تحكم في الوصول"
pronunciation: "أكسيس كونترول ليست"
---

## التعريف

قائمة التحكم في الوصول (ACL) هي قائمة صلاحيات مرتبطة بمورد معين، وتحدد المستخدمين أو العمليات التي تمتلك حق الوصول إلى هذا المورد.

## أين تسمعه؟

- عند ضبط إعدادات مساحات التخزين السحابية (Buckets)
- أثناء إعداد جدران الحماية (Firewalls) في الشبكات
- عندما تدير صلاحيات ملفات نظام التشغيل على الخادم

## أمثلة

- The cloud storage bucket uses an ACL to grant public read access to specific image files.
  - تستخدم مساحة التخزين السحابية قائمة ACL لمنح صلاحية القراءة العامة لملفات صور معينة.
- We updated the network ACL to block incoming traffic from suspicious IP addresses.
  - قمنا بتحديث قائمة التحكم في الوصول للشبكة لحظر حركة المرور الواردة من عناوين IP مشبوهة.

## خطأ شائع

الخلط بين قوائم ACL ونظام التحكم في الوصول بناءً على الأدوار (RBAC)؛ حيث تربط قوائم ACL الصلاحيات بالموارد مباشرة للمستخدمين، بينما يمنح نظام RBAC الصلاحيات للأدوار أولاً ثم يربط المستخدمين بتلك الأدوار.
