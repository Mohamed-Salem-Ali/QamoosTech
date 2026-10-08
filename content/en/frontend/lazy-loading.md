---
id: lazy-loading
category: frontend
level: beginner
related: [bundle, rendering, viewport]
term: "Lazy Loading"
pronunciation: "LAY-zee LOH-ding"
keywords: ["load images only when visible","defer loading non critical resources","speed up initial page load","load components on demand","reduce initial bundle size","fetch data when needed","optimize frontend performance","delay asset loading","lazyload images","load content as user scrolls","تحميل الصور عند الحاجة","تأخير تحميل الموارد غير الضرورية","تحسين سرعة فتح الصفحة","جلب البيانات عند الوصول إليها","التحميل عند التمرير","تقليل حجم الحزمة البرمجية","تحميل المكونات عند الطلب","التحميل الكسول","ليزي لودينج","تأجيل تحميل العناصر"]
---

## Definition

A performance strategy where non-critical resources, like images or components, are loaded only when they are needed rather than upfront.

## Where you hear it

In web performance reviews, UI architecture discussions, and bundle optimization tasks.

## Examples

- We implemented lazy loading for all images below the fold to improve initial page load speed.
- The application uses lazy loading to fetch heavy dashboard components only when the user visits that specific tab.
- The gallery loads the next images only when the user scrolls near them.

## Common mistake

Thinking lazy loading solves all performance issues without considering the layout shifts it might cause when content finally loads.

## Don't confuse with

Lazy loading delays the loading of resources until they are needed, whereas eager loading loads all resources immediately upfront regardless of current need.

## Say it at work

- Can we apply lazy loading to these heavy images so they don't block the initial page render?
- Please ensure that lazy loading is configured for all route-level components to reduce the initial bundle size.
