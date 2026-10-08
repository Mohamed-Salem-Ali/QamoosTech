---
id: cdn
category: devops
subcategory: infrastructure
level: beginner
related: [cache-hit-and-miss, ttl, reverse-proxy]
aliases: ["edge location", "edge", "point of presence", "pop"]
term: "CDN (Content Delivery Network)"
pronunciation: "SEE-DEE-EN"
keywords: ["servers close to users", "cache images and scripts worldwide", "cloudflare cloudfront", "edge location", "faster page loads", "static files delivery", "خوادم قريبة من المستخدمين", "تخزين الصور والسكربتات عالمياً", "‏Cloudflare وCloudFront", "موقع الحافة", "تحميل صفحات أسرع", "توصيل الملفات الثابتة"]
---

## Definition

A CDN is a network of servers around the world that keep copies of your content (images, scripts, pages) and serve each visitor from the nearest one, so pages load faster and your origin server gets less traffic.

## Where you hear it

In Cloudflare, AWS CloudFront and Vercel settings, performance audits and cache-related bugs ("I still see the old version").

## Examples

- Put the images behind a CDN so Cairo users get them from a nearby edge.
- Purge the CDN cache after deploying.
- Product images load faster in Cairo once they are served from the CDN.

## Common mistake

Forgetting that edges cache. After an update users may see old files until the cache is purged or expires.

## Don't confuse with

A reverse proxy, which sits in front of your server. A CDN is a global set of cache-heavy proxies.

## Say it at work

- Is it served from the CDN?
- Cache static assets at the edge for a year.
