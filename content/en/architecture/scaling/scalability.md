---
id: scalability
category: architecture
subcategory: scaling
level: intermediate
related: [load-balancer, cache, single-point-of-failure]
term: "Scalability"
pronunciation: "skay-luh-BIL-ih-tee"
keywords: ["handle more users and traffic","grow system capacity easily","scale up and scale out","horizontal and vertical scaling","system capacity planning","support high traffic load","scalabilty","skalability","prepare for traffic growth","handle increased load","قابلية التوسع","القدرة على تحمل ضغط المستخدمين","التوسع الأفقي والرأسي للنظام","زيادة قدرة النظام على التحمل","التعامل مع زيادة حجم العمل","التوسع لاستيعاب عدد أكبر","سكيلابيليتي","تحمل زيادة حركة المرور","تطوير النظام لزيادة المستخدمين"]
---
## Definition

How well a system keeps working when users, data, or traffic grow. You can scale up (stronger server) or scale out (more servers).

## Where you hear it

System design, interviews, and CVs.

## Examples

- Can this design scale to 100,000 users?
- We scaled out by adding two more servers behind a load balancer.

## Common mistake

Saying "scalable" without explaining how. Say what scales and how, for example "horizontally with stateless containers".

## Don't confuse with

Scalability is often confused with elasticity; while scalability is the ability to handle increased load by adding resources, elasticity is the ability to automatically add or remove those resources based on real-time demand.

## Say it at work

- We need to ensure our database architecture has enough scalability to handle the projected traffic spike next month.
- The current monolithic structure limits our scalability, so I suggest we migrate to a microservices approach.
