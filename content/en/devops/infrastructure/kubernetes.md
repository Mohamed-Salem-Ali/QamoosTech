---
id: kubernetes
category: devops
subcategory: infrastructure
level: intermediate
related: [container-orchestration, pod]
term: "Kubernetes"
pronunciation: "koo-ber-NEH-teez"
aliases: ["k8s"]
keywords: ["platform that schedules containers", "run containers across many servers", "deploy and scale containers", "self-healing containers", "k8s cluster", "restart failed containers automatically", "منصة تشغيل الحاويات", "تشغيل الحاويات على عدة خوادم", "نشر الحاويات وتوسيعها", "عنقود كوبيرنيتس", "إعادة تشغيل الحاويات المتعطلة تلقائياً"]
---

## Definition

Kubernetes is an open-source system that runs containers across many machines. You describe the state you want, such as three copies of a service, and Kubernetes schedules, restarts, and scales the containers to match it.

## Where you hear it

In deployment tickets, DevOps stand-ups, and incident reviews, whenever someone asks which cluster or pod is affected.

## Examples

- We deploy the API to Kubernetes with three replicas.
- Kubernetes restarted the crashed pod within seconds.
- Check the cluster state with kubectl before you roll back.

## Common mistake

Thinking Kubernetes runs the containers itself. It schedules and manages them, while a container runtime such as containerd runs them on each node.

## Don't confuse with

Docker builds and runs one container on one machine. Kubernetes manages many containers across many machines: scheduling, restarts, scaling, and networking.

## Say it at work

- Is it running on Kubernetes or on a plain virtual machine?
- Scale the deployment to five replicas.
