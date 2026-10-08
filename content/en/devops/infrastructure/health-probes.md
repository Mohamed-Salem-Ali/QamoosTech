---
id: health-probes
category: devops
subcategory: infrastructure
level: intermediate
related: [health-check, container-orchestration, heartbeat]
tags: [kubernetes]
aliases: ["liveness probe", "readiness probe", "startup probe", "liveness", "readiness"]
term: "Liveness and Readiness Probes"
pronunciation: "LYV-nis and RED-ee-nis PROHBZ"
keywords: ["kubernetes health checks", "restart if not alive", "send traffic only when ready", "startup probe", "probe path and port", "failing probe", "فحوصات الصحة في Kubernetes", "إعادة التشغيل إذا لم يكن حياً", "إرسال الحركة عند الجاهزية فقط", "فحص البدء", "مسار الفحص ومنفذه", "فحص فاشل"]
---

## Definition

In Kubernetes, a liveness probe checks whether a container is still alive (if not, it is restarted); a readiness probe checks whether it can take traffic (if not, it is taken out of the load balancer); a startup probe waits for slow starts.

## Where you hear it

In Kubernetes YAML, deployment reviews and incidents like "pods restart in a loop" or "traffic hits an unready pod".

## Examples

- The readiness probe fails until the database connection is up.
- A liveness probe that is too strict restarts healthy pods.

## Common mistake

Making the liveness probe depend on the database. A database outage then restarts every app pod and makes it worse.

## Don't confuse with

A health check endpoint, the URL a probe calls. The probe is the Kubernetes mechanism that uses it.

## Say it at work

- Add a readiness probe on `/healthz`.
- The pod keeps restarting; check the liveness probe.
