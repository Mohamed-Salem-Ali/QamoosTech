---
id: function
category: programming
subcategory: functions-and-scope
level: beginner
related: [parameter-vs-argument, callback, docstring]
term: "Function"
translation: "دالة"
pronunciation: "فانكشن"
keywords: ["كتلة برمجية قابلة لإعادة الاستخدام","دالة برمجية","تابع أو دالة","كتابة دالة جديدة","استدعاء الدالة","دالة مساعدة","دالة نقية","الفرق بين الدالة والتابع","فانكشن","reusable block of code","block of code that returns a result","method vs function","helper function","pure function","define a function","call a function","code block for a specific task","function","functin"]
---
## التعريف

كتلة شيفرة قابلة لإعادة الاستخدام تؤدي مهمة واحدة. تعطيها مدخلات، وقد تعيد لك نتيجة.

## أين تسمعه؟

في كل مكان: «استدعِ الدالة»، «انقل هذا الجزء إلى دالة»، «دالة نقية».

## أمثلة

- Extract the validation logic into its own function.
  - انقل منطق التحقق إلى دالة مستقلة.
- This function returns `null` when the user is not found.
  - هذه الدالة تعيد `null` عندما لا يوجد المستخدم.
- The function takes a price and a tax rate, and returns the total.
  - تأخذ الدالة السعر ونسبة الضريبة، وتعيد المجموع.

## خطأ شائع

كتابة دالة ضخمة تفعل أشياء كثيرة. يجب أن تؤدي الدالة مهمة واحدة، وأن يسهل تسميتها.

## لا تخلطه مع

الدالة (Function) مقابل التابع (Method): الدالة هي كتلة برمجية مستقلة، بينما التابع هو دالة مرتبطة بكائن أو صنف معين.

## قلها في العمل

- I think we should break this logic down into a smaller helper function to make the code cleaner.
  - أعتقد أنه يجب علينا تقسيم هذا المنطق إلى دالة مساعدة أصغر لنجعل الكود أكثر ترتيباً.
- Please ensure that this function includes proper error handling before we merge the pull request.
  - يرجى التأكد من أن هذه الدالة تتضمن معالجة مناسبة للأخطاء قبل أن نقوم بدمج طلب السحب.
