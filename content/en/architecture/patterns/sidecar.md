---
id: sidecar
category: architecture
subcategory: patterns
level: intermediate
related: [cross-cutting-concern, decoupling, container-orchestration]
term: "Sidecar"
pronunciation: "SIDE-kar"
keywords: ["helper container next to the app", "logging agent beside service", "service mesh proxy", "sidecar pattern", "run a helper process with the app", "حاوية مساعدة بجوار التطبيق", "وكيل السجلات بجوار الخدمة", "وكيل شبكة الخدمات", "نمط الجانبي"]
---

## Definition

A helper process or container that runs next to an application and handles a shared concern, such as logging, security, or networking, so the application code stays simpler.

## Where you hear it

In Kubernetes pods, service mesh designs, and architecture reviews about shared responsibilities.

## Examples

- A sidecar container ships the logs from the application to the central store.
- The sidecar handles TLS, so the service code does not need certificates.

## Common mistake

Putting business logic in the sidecar. It should handle infrastructure concerns, and the application should keep its own logic.

## Don't confuse with

A sidecar runs next to one application and shares its lifecycle. A cross-cutting concern is the shared need itself, such as logging.
