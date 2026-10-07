---
id: monorepo
category: git
level: intermediate
related: [branch, ci-cd, package-dependency]
tags: [typescript]
aliases: ["mono repo", "polyrepo", "turborepo", "workspaces"]
term: "Monorepo"
translation: "المستودع الموحد"
pronunciation: "مونوريبو"
keywords: ["مشاريع كثيرة في مستودع واحد", "كود مشترك بين التطبيقات", "‏Turborepo وNx", "commit واحد يغيّر عدة حزم", "مقابل مستودعات كثيرة", "مصدر واحد", "many projects in one repository", "shared code between apps", "turborepo nx", "one commit changes several packages", "versus many repos", "single source"]
---

## التعريف

المستودع الموحد (Monorepo) مستودع Git واحد يحمل كود مشاريع أو حزم كثيرة، فتتشارك الأدوات ويمكن تغييرها معاً في commit واحد.

## أين تسمعه؟

في الفرق التي لديها تطبيق ويب وAPI ومكتبات مشتركة، وأدوات مثل Turborepo وNx وpnpm workspaces، ونقاشات "مستودع موحد أم متعدد؟".

## أمثلة

- The web app and the API live in one monorepo and share types.
  - يعيش تطبيق الويب والـ API في مستودع موحد ويتشاركان الأنواع.
- CI only builds the packages affected by the change.
  - يبني CI الحزم المتأثرة بالتغيير فقط.

## خطأ شائع

رمي كل شيء بلا أدوات. بدون تخزين مؤقت وبناء للمتأثر فقط ينفجر زمن CI.

## لا تخلطه مع

المونوليث وهو تطبيق واحد يُنشر كوحدة. أما المستودع الموحد فعن مكان تخزين الكود ويمكنه حمل تطبيقات كثيرة تُنشر منفصلة.

## قلها في العمل

- Should this be a separate repo or in the monorepo?
  - هل يكون هذا مستودعاً منفصلاً أم ضمن الموحد؟
- Use workspaces to link the packages.
  - استخدم workspaces لربط الحزم.
