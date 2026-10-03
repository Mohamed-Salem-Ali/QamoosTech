---
id: state
category: frontend
level: beginner
related: [props, component]
term: "State"
translation: "الحالة"
pronunciation: "ستيت"
keywords: ["بيانات تتغير في التطبيق","تخزين بيانات المكون","متغيرات تحدث واجهة المستخدم","حفظ حالة المكون","إدارة بيانات الشاشة","البيانات المتغيرة في الصفحة","الحالة المحلية للمكون","متغيرات تفاعل المستخدم","data that changes over time","component data storage","variables that update the ui","track user input in component","react local state","manage changing app data","storing screen data","ui component memory","state"]
---
## التعريف

بيانات تتغيّر أثناء عمل التطبيق وتعتمد عليها الشاشة، مثل ما كتبه المستخدم أو هل القائمة مفتوحة.

## أين تسمعه؟

دروس React وVue، وتقارير الأخطاء («الـ state غير متزامنة»).

## أمثلة

- The cart count is stored in the component state.
  - عدد عناصر السلة مخزّن في state المكوّن.
- The state changed, so React re-rendered the page.
  - تغيّرت الـ state فأعاد React رسم الصفحة.

## خطأ شائع

تخزين البيانات نفسها في مكانين. عندما تتغيّر نسخة ولا تتغيّر الأخرى تظهر الأخطاء.

## لا تخلطه مع

الـ State تُمثّل بيانات تتغيّر داخل المكوّن مع مرور الوقت، بينما الـ Props هي بيانات للقراءة فقط يتم تمريرها من مكوّن أب.

## قلها في العمل

- We need to lift this state up to the parent component so the sibling can access it.
  - نحتاج إلى نقل هذه الـ state إلى المكوّن الأب لكي يتمكن المكوّن المجاور من الوصول إليها.
- Please ensure the local state is cleared after the form is successfully submitted.
  - يُرجى التأكد من مسح الـ state المحلية بعد إرسال النموذج بنجاح.
