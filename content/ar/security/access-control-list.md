---
id: access-control-list
category: security
level: intermediate
related: [authentication-vs-authorization, rbac]
term: "Access Control List (ACL)"
translation: "قائمة تحكم في الوصول"
pronunciation: "أكسيس كونترول ليست"
keywords: ["قائمة صلاحيات الوصول للملفات","تحديد من يمكنه الوصول للمورد","قائمة التحكم في الوصول","صلاحيات مساحات التخزين السحابية","اكسيس كونترول ليست","قائمة الصلاحيات المرتبطة بالمورد","منع المستخدمين من الوصول للملفات","قائمة أمان الملفات والصلاحيات","اعدادات جدار الحماية والصلاحيات","list of permissions for resource","control who can access file","cloud storage bucket permissions","network firewall rules list","acl permissions list","user access rights list","restrict file access permissions","access control list","resource permission rules","manage user permissions list"]
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

## لا تخلطه مع

الخلط بين قوائم ACL ونظام RBAC؛ حيث تحدد قوائم ACL الصلاحيات على مستوى المورد لمستخدمين محددين، بينما يدير نظام RBAC الوصول عبر تعيين الصلاحيات لأدوار تُمنح لاحقاً للمستخدمين.

## قلها في العمل

- Can you check the ACL on that bucket to see why the service account is getting a 403 error?
  - هل يمكنك التحقق من قائمة ACL الخاصة بذلك المجلد لمعرفة سبب حصول حساب الخدمة على خطأ 403؟
- I have updated the ACL for the production directory to restrict write access to the deployment user only.
  - لقد قمت بتحديث قائمة التحكم في الوصول (ACL) الخاصة بمجلد الإنتاج لتقييد صلاحية الكتابة لمستخدم النشر فقط.
