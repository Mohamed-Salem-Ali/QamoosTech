---
id: dnssec
category: security
subcategory: application-security
level: intermediate
related: [dns, digital-signature, digital-certificate]
aliases: ["dns security extensions", "dns spoofing", "dns poisoning"]
term: "DNSSEC"
translation: "ملحقات أمان DNS"
pronunciation: "دي إن إس سيك"
keywords: ["توقيع سجلات DNS", "منع انتحال DNS", "سلسلة ثقة من الجذر", "سجل DS", "التحقق من إجابات DNS", "الحماية من تسميم الذاكرة المؤقتة", "sign dns records", "prevent dns spoofing", "chain of trust from root", "ds record", "validate dns answers", "cache poisoning protection"]
---

## التعريف

‏DNSSEC يضيف توقيعات رقمية إلى سجلات DNS ليتحقق المحلِّل من أن الإجابة جاءت فعلاً من مالك النطاق ولم تُزوَّر في الطريق.

## أين تسمعه؟

في إعدادات أمان النطاقات عند المسجّلين، ولوحات مزودي DNS، ونقاشات انتحال DNS.

## أمثلة

- Turn on DNSSEC and add the DS record at the registrar.
  - فعّل DNSSEC وأضف سجل DS عند المسجّل.
- DNSSEC proves the answer is authentic, but doesn't encrypt it.
  - يثبت DNSSEC أصالة الإجابة لكنه لا يشفّرها.
- The resolver rejected the answer because its DNSSEC signature did not validate.
  - رفض المحلّل الجواب لأن توقيع DNSSEC الخاص به لم يجتز التحقق.

## خطأ شائع

تفعيله ثم تغيير مزود DNS دون تحديث سجل DS. يتوقف النطاق عن الحلّ.

## لا تخلطه مع

‏DNS عبر HTTPS الذي يشفّر البحث للخصوصية. أما DNSSEC فيحمي الأصالة لا السرية.

## قلها في العمل

- Is DNSSEC enabled for this domain?
  - هل DNSSEC مفعّل لهذا النطاق؟
- Remove the DS record before migrating.
  - أزل سجل DS قبل الترحيل.
