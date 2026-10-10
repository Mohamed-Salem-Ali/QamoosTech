---
id: pod
category: devops
subcategory: infrastructure
level: intermediate
related: [container-orchestration, containerization, sidecar, kubernetes]
tags: [kubernetes]
term: "Pod"
pronunciation: "pod"
keywords: ["smallest unit in kubernetes", "one or more containers together", "pod restarts", "running pods", "pod shares network", "أصغر وحدة في Kubernetes", "حاوية أو أكثر معاً", "إعادة تشغيل البود", "البودات التي تعمل"]
---

## Definition

The smallest unit that an orchestrator such as Kubernetes runs. A pod holds one or more containers that share a network address and storage, and they start and stop together.

## Where you hear it

In Kubernetes manifests, cluster dashboards, and discussions about why a service is restarting.

## Examples

- The API pod restarted after it ran out of memory.
- Put the log shipper in the same pod as the application.
- The pod runs the app and a log shipper side by side, sharing the same network address.

## Common mistake

Thinking one pod is one application. A pod can hold several containers, and the orchestrator can replace pods at any time.

## Don't confuse with

A container runs one process. A pod groups containers that are scheduled together.
