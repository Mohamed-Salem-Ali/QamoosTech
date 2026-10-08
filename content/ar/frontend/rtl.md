---
id: rtl
category: frontend
level: beginner
related: [accessibility, responsive-design]
term: "RTL (Right-to-Left)"
translation: "من اليمين إلى اليسار"
pronunciation: "آر تي إل"
keywords: ["دعم اللغة العربية في التصميم","عكس اتجاه الواجهة البرمجية","تخطيط من اليمين لليسار","دعم اللغات العربية والعبرية","ضبط اتجاه عناصر الموقع","تصميم واجهات تدعم العربية","انعكاس الواجهة في المواقع","طريقة تحويل الموقع للعربية","ضبط اتجاه النص والواجهة","تنسيق المواقع للغة العربية","right to left layout","mirrored interface design","arabic language web support","flip layout for localization","css direction property","arabic text alignment","mirroring ui components","left to right vs right to left","internationalization layout support","web design for arabic users"]
---
## التعريف

اتجاه للتخطيط في لغات مثل العربية والعبرية، يسير فيه النص والواجهة كلها من اليمين إلى اليسار.

## أين تسمعه؟

أعمال التعريب والمنتجات التي تبدأ بالعربية.

## أمثلة

- The app supports RTL, so the menu is on the right side.
  - يدعم التطبيق RTL، لذلك تكون القائمة على اليمين.
- Use logical CSS properties like `margin-inline-start` instead of `margin-left`.
  - استخدم خصائص CSS المنطقية مثل `margin-inline-start` بدل `margin-left`.
- In an RTL layout, the back arrow points to the right side of the screen.
  - في تخطيط RTL يشير سهم الرجوع إلى الجهة اليمنى من الشاشة.

## خطأ شائع

الاكتفاء بتغيير `text-align: right`. الدعم الحقيقي لـ RTL يعكس التخطيط كله لا النص فقط.

## لا تخلطه مع

غالباً ما يتم الخلط بين RTL و i18n؛ فبينما يشير RTL تحديداً إلى اتجاه تخطيط الواجهة، فإن i18n هو العملية الأوسع لتهيئة البرمجيات للغات ومناطق متعددة.

## قلها في العمل

- We need to make sure the navigation bar flips correctly when we switch the app to RTL mode.
  - نحتاج للتأكد من أن شريط التنقل ينعكس بشكل صحيح عند تحويل التطبيق إلى وضع RTL.
- Please ensure that all icons and layout components are properly mirrored to support RTL for our Arabic-speaking users.
  - يرجى التأكد من عكس جميع الأيقونات وعناصر التخطيط بشكل مناسب لدعم RTL لمستخدمينا الناطقين بالعربية.
