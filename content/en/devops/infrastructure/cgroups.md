---
id: cgroups
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, process, virtual-machine]
aliases: ["control groups", "resource limits"]
term: "cgroups"
pronunciation: "SEE-groops"
keywords: ["limit cpu and memory for a process group", "linux kernel feature", "docker memory limit", "resource limits", "kubernetes requests and limits", "oom killer", "تحديد المعالج والذاكرة لمجموعة عمليات", "ميزة في نواة لينكس", "حد ذاكرة Docker", "حدود الموارد", "الطلبات والحدود في Kubernetes", "قاتل نفاد الذاكرة"]
---

## Definition

cgroups (control groups) are a Linux kernel feature that limits and measures the CPU, memory and I/O a group of processes can use. Containers use them to enforce resource limits.

## Where you hear it

In Docker and Kubernetes (`--memory`, resource limits), OOM-kill incidents and container internals talks.

## Examples

- The container was killed for exceeding its cgroup memory limit.
- Namespaces isolate what a container sees; cgroups limit what it can use.
- The worker runs inside a cgroup that caps its memory at 512 MB.

## Common mistake

Setting no limits. One runaway container can then starve everything else on the host.

## Don't confuse with

Namespaces, which isolate what a process can see (processes, network, files). cgroups control how much it can consume.

## Say it at work

- Set CPU and memory limits through cgroups.
- It was OOM-killed at 512 MB.
