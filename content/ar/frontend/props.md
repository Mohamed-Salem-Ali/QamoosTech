---
id: props
category: frontend
level: beginner
related: [component, state]
tags: [react]
term: "Props"
translation: "الخصائص الممرَّرة"
pronunciation: "بروبس"
keywords: ["تمرير البيانات للمكونات","مدخلات المكونات في رياكت","كيفية تمرير الخصائص","الفرق بين الخصائص والحالة","تمرير المتغيرات بين المكونات","شرح البروبس في رياكت","الخصائص الممررة للمكون","تجنب تمرير الخصائص المتعدد","استقبال البيانات في المكون","معاملات المكونات البرمجية","passing data to components","react component arguments","how to use properties","read only component inputs","passing variables between components","react props explained","what are component properties","avoiding prop drilling","parent to child communication","component input parameters"]
---
## التعريف

اختصار «properties»: المدخلات التي يمرّرها المكوّن الأب إلى المكوّن، مثل وسائط الدالة.

## أين تسمعه؟

دروس React ومراجعات الشيفرة.

## أمثلة

- Pass the user name to the card through props.
  - مرّر اسم المستخدم إلى البطاقة عبر props.
- Props are read-only, so do not change them inside the component.
  - الـ props للقراءة فقط، فلا تغيّرها داخل المكوّن.

## خطأ شائع

تمرير الـ props عبر خمسة مستويات من المكوّنات («prop drilling»). فكّر في context أو مكتبة لإدارة الحالة.

## لا تخلطه مع

الفرق بين Props و State هو أن الـ props هي بيانات يتم تمريرها للمكوّن من الخارج، بينما الـ state هي بيانات يديرها المكوّن داخلياً بنفسه.

## قلها في العمل

- I think we should pass the theme color as a prop instead of hardcoding it in the button component.
  - أعتقد أنه يجب علينا تمرير لون السمة كـ prop بدلاً من كتابته بشكل ثابت داخل مكوّن الزر.
- Please update the user profile component to accept the new avatar URL as an optional prop.
  - يرجى تحديث مكوّن ملف تعريف المستخدم ليقبل رابط الصورة الرمزية الجديد كـ prop اختياري.
