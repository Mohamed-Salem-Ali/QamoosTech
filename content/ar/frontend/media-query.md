---
id: media-query
category: frontend
level: beginner
related: [responsive-design, viewport]
term: "Media Query"
pronunciation: "ميديا كويري"
translation: "استعلام الوسائط"
keywords: ["تنسيق الموقع حسب حجم الشاشة","جعل التصميم متجاوب مع الجوال","تغيير شكل الموقع في الموبايل","استعلامات الوسائط في سي اس اس","تعديل التنسيق حسب عرض الشاشة","برمجة المواقع المتجاوبة","ميديا كويري","تغيير ستايل الموقع عند التصغير","تنسيق العناصر بناء على الجهاز","استعلامات الشاشة في css","responsive css breakpoints","make website fit mobile","css for different screen sizes","adjust layout for tablets","detect screen resolution in css","media queries syntax","mobile friendly css rules","responsive design code technique","css width based styling","adapt design to device size"]
---

## التعريف

تقنية في CSS تُستخدم لتطبيق تنسيقات مختلفة بناءً على خصائص الجهاز مثل عرض الشاشة أو ارتفاعها أو دقتها.

## أين تسمعه؟

في اجتماعات تطوير الواجهات الأمامية، وجلسات تنسيق CSS، ومراجعات التصميم المتجاوب.

## أمثلة

- We use a media query to change the navigation menu layout on mobile screens.
  - نستخدم استعلام الوسائط لتغيير تخطيط قائمة التنقل على شاشات الهواتف المحمولة.
- This media query detects if the user has enabled dark mode in their system preferences.
  - يكتشف استعلام الوسائط هذا ما إذا كان المستخدم قد قام بتفعيل الوضع الليلي في تفضيلات نظامه.
- Below 768 pixels, the media query switches the grid to one column.
  - دون 768 بكسل، يحوّل استعلام الوسائط (media query) الشبكة إلى عمود واحد.

## خطأ شائع

الاعتقاد بأن استعلامات الوسائط يمكنها التحقق من عرض الشاشة فقط، بينما يمكنها أيضاً استهداف اتجاه الجهاز، كثافة البكسل، وأساليب الإدخال مثل اللمس مقابل الفأرة.

## لا تخلطه مع

غالباً ما يتم الخلط بين استعلامات الوسائط (media queries) واستعلامات الحاويات (container queries)؛ فبينما تستجيب استعلامات الوسائط لحجم إطار العرض بالكامل، تستجيب استعلامات الحاويات لحجم عنصر أب معين.

## قلها في العمل

- Can you add a media query to fix the layout shift we're seeing on tablets?
  - هل يمكنك إضافة استعلام وسائط لإصلاح خلل التخطيط الذي نراه على الأجهزة اللوحية؟
- I have updated the CSS file with a new media query to ensure the dashboard remains readable on smaller screens.
  - لقد قمت بتحديث ملف CSS باستعلام وسائط جديد لضمان بقاء لوحة التحكم قابلة للقراءة على الشاشات الأصغر.
