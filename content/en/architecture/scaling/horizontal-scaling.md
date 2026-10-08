---
id: horizontal-scaling
category: architecture
subcategory: scaling
level: beginner
related: [vertical-scaling, load-balancer, scalability]
aliases: ["scale out", "scaling out"]
term: "Horizontal Scaling"
pronunciation: "hor-ih-ZON-tul SKAY-ling"
keywords: ["add more machines", "scale out", "many small servers", "behind a load balancer", "handle more traffic", "stateless servers", "إضافة المزيد من الأجهزة", "التوسع بالعدد", "خوادم صغيرة كثيرة", "خلف موزّع أحمال", "استيعاب زيارات أكثر", "خوادم بلا حالة"]
---

## Definition

Horizontal scaling means handling more load by adding more machines or instances, instead of making one machine bigger.

## Where you hear it

In capacity planning, cloud auto-scaling settings, and interviews about growing a system.

## Examples

- We scaled out from 2 to 10 servers during the sale.
- Horizontal scaling only works if the servers keep no local state.
- We added two more app servers behind the load balancer during the holiday traffic.

## Common mistake

Adding servers while sessions or files live on one machine. The new servers can't see that data.

## Don't confuse with

Vertical scaling, which makes one machine bigger (more CPU or memory).

## Say it at work

- Can we scale this horizontally?
- Put a load balancer in front and add instances.
