---
id: deep-link
category: frontend
level: beginner
related: [url-routing, pwa, query-parameter]
aliases: ["universal link", "app link", "deeplink"]
term: "Deep Link"
pronunciation: "DEEP link"
keywords: ["link to a specific screen", "open the app at a page", "universal links", "share a product page", "state in the url", "mobile app links", "رابط إلى شاشة محددة", "فتح التطبيق على صفحة", "الروابط العالمية", "مشاركة صفحة منتج", "الحالة في الرابط", "روابط تطبيقات الجوال"]
---

## Definition

A deep link is a link that opens a specific page or screen inside a website or mobile app, not just its home page, such as the exact product or a filtered list.

## Where you hear it

In mobile app development (React Native, universal links), marketing emails and shareable URLs.

## Examples

- The email button deep-links to the unpaid payment, not the dashboard.
- Keep the filter in the URL so the page can be deep-linked.

## Common mistake

Forgetting the logged-out case. A deep link should send people to sign in and then back to the same page.

## Don't confuse with

A normal link to the home page, which leaves the user to find the content themselves.

## Say it at work

- Does this deep link work on both iOS and Android?
- Make the state shareable with a deep link.
