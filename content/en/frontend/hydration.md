---
id: hydration
category: frontend
level: intermediate
related: [rendering, nextjs]
tags: [react]
term: "Hydration"
pronunciation: "hy-DRAY-shun"
keywords: ["make static html interactive","attach javascript to server html","react hydration error fix","why buttons not working initially","hydration mismatch solution","server side rendering interactivity","binding events to static page","client side script attachment","fix page interactivity delay","nextjs hydration issues","hydrating react components","rendering mismatch troubleshooting","جعل صفحة الويب تفاعلية","ربط الجافا سكريبت بالـ html","حل مشكلة تطابق الـ hydration","تفعيل الأزرار بعد تحميل الصفحة","أخطاء العرض بين الخادم والعميل","تفعيل المكونات بعد العرض الساكن","مشاكل الهيدريشن في react","ربط الأحداث بصفحة الخادم","تطابق الحالة بين الخادم والمتصفح","شرح مصطلح الهيدريشن","أخطاء التفعيل في nextjs","جعل الموقع يستجيب للنقر"]
---
## Definition

The step where the browser attaches JavaScript to HTML that the server already sent, so the page becomes interactive.

## Where you hear it

Next.js and React errors like "hydration mismatch".

## Examples

- We got a hydration error because the server and client rendered different text.
- The page is visible quickly, then hydration makes the buttons work.

## Common mistake

Using values like `Date.now()` or random numbers while rendering. The server and browser get different results.

## Don't confuse with

Hydration is often confused with client-side rendering (CSR); while CSR builds the entire page in the browser from scratch, hydration attaches event listeners to pre-rendered HTML sent by the server.

## Say it at work

- I think we are seeing a hydration mismatch because the component is using local storage before the page finishes loading.
- Please check if the initial state is consistent across the server and client to prevent hydration issues in this module.
