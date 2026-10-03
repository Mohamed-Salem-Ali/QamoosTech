---
id: props
category: frontend
level: beginner
related: [component, state]
term: "Props"
translation: "الخصائص الممرَّرة"
pronunciation: "بروبس"
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
