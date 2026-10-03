---
id: query-parameter
category: web-apis
level: beginner
related: [endpoint, pagination]
term: "Query Parameter"
translation: "معامل الاستعلام"
pronunciation: "كويري باراميتر"
---
## التعريف

قيمة تُضاف في نهاية الرابط بعد `?` لتصفية النتائج أو ترتيبها أو تقسيمها، مثل `/users?role=admin`.

## أين تسمعه؟

تصميم الـ API، وصفحات البحث، وروابط التحليلات.

## أمثلة

- Filter the list with the `status` query parameter.
  - صفِّ القائمة باستخدام معامل الاستعلام `status`.
- Never put passwords in a query parameter.
  - لا تضع كلمات المرور أبدًا في معامل استعلام.

## خطأ شائع

وضع أسرار في الرابط. تظهر الروابط في السجلات وسجل المتصفح والروابط المشتركة.

## لا تخلطه مع

غالبًا ما يتم الخلط بين معاملات الاستعلام ومعاملات المسار؛ معاملات الاستعلام هي أزواج اختيارية من المفتاح والقيمة تُستخدم للتصفية أو الترتيب، بينما تُعد معاملات المسار أجزاءً أساسية من هيكل الرابط لتحديد مورد معين.

## قلها في العمل

- Can we add a query parameter to the endpoint so we can filter the products by category?
  - هل يمكننا إضافة معامل استعلام إلى الـ endpoint لنتمكن من تصفية المنتجات حسب التصنيف؟
- Please ensure that the API documentation includes all supported query parameters for the search functionality.
  - يرجى التأكد من أن وثائق الـ API تتضمن جميع معاملات الاستعلام المدعومة لوظيفة البحث.
