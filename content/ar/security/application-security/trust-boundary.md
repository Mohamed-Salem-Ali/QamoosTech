---
id: trust-boundary
category: security
subcategory: application-security
level: intermediate
related: [input-validation, least-privilege, api-gateway]
aliases: ["threat model", "threat modeling", "attack surface"]
term: "Trust Boundary"
translation: "حدّ الثقة"
pronunciation: "ترست باوندري"
keywords: ["حيث يتغير مستوى الثقة", "تحقق من البيانات العابرة له", "من الإنترنت إلى الخادم", "من خدمة إلى خدمة", "الجانب غير الموثوق", "مخطط نموذج التهديد", "where trust level changes", "validate data crossing it", "internet to server", "service to service", "untrusted side", "threat model diagram"]
---

## التعريف

حدّ الثقة (Trust Boundary) خط في النظام تنتقل عنده البيانات من جزء أقل ثقة إلى جزء أكثر ثقة، مثل الانتقال من الإنترنت إلى خادمك. ويجب فحص البيانات العابرة له.

## أين تسمعه؟

في جلسات نمذجة التهديدات، ومخططات المعمارية، ومراجعات الأمان لأماكن التحقق من المدخلات.

## أمثلة

- Everything coming from the browser crosses a trust boundary.
  - كل ما يأتي من المتصفح يعبر حد ثقة.
- Don't assume internal services are safe; mark that as a boundary too.
  - لا تفترض أن الخدمات الداخلية آمنة؛ ضع هناك حداً أيضاً.

## خطأ شائع

اعتبار داخل الشبكة موثوقاً. فتتجول خدمة واحدة مخترقة في كل شيء.

## لا تخلطه مع

الجدار الناري الذي يفرض بعض القواعد عند حد ما. الحد هو المفهوم وتوضع عليه الضوابط.

## قلها في العمل

- Draw the trust boundaries on the diagram.
  - ارسم حدود الثقة على المخطط.
- Validate at every boundary.
  - تحقق عند كل حد.
