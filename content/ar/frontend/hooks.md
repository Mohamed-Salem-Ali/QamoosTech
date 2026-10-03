---
id: hooks
category: frontend
level: intermediate
related: [component, state]
term: "Hooks"
pronunciation: "هُوكس"
---

## التعريف

هي دوال برمجية تسمح لك باستخدام ميزات الحالة (state) ودورة حياة المكونات في React داخل المكونات الوظيفية (function components). تتيح لك هذه الميزات الاستفادة من إمكانيات React دون الحاجة لكتابة فئات (classes).

## أين تسمعه؟

تُستخدم بكثرة في نقاشات تطوير الواجهات الأمامية، ومراجعات الكود، وفي توثيق إطارات العمل المبنية على React.

## أمثلة

- I used the `useState` hook to manage the form input value.
  - استخدمت الـ hook المسمى `useState` لإدارة قيمة مدخلات النموذج.
- You should move the data fetching logic into a custom hook.
  - يجب عليك نقل منطق جلب البيانات إلى custom hook خاص بك.

## خطأ شائع

استدعاء الـ hooks داخل حلقات التكرار (loops) أو الشروط (conditions) أو الدوال المتداخلة، وهو ما يخالف القاعدة التي تنص على ضرورة استدعاء الـ hooks دائماً في المستوى الأعلى من المكون.
