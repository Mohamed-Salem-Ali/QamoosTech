---
id: persistent-volume
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, persistence, file-system]
aliases: ["docker volume", "volume", "pvc", "bind mount"]
term: "Persistent Volume"
pronunciation: "per-SIS-tent VOL-yoom"
keywords: ["storage that outlives the container", "docker volume", "kubernetes pv and pvc", "database data survives restart", "mount a disk", "bind mount", "تخزين يعيش أطول من الحاوية", "حجم Docker", "‏PV وPVC في Kubernetes", "بيانات قاعدة البيانات تنجو من إعادة التشغيل", "ربط قرص", "الربط المباشر"]
---

## Definition

A persistent volume is storage attached to a container whose data survives when the container is stopped, replaced or rescheduled, unlike the container's own temporary file system.

## Where you hear it

In Docker `-v` flags, Kubernetes PV/PVC objects, and running databases in containers.

## Examples

- Mount a volume at `/var/lib/postgresql/data` so the data survives restarts.
- Without a persistent volume the upload folder is wiped on redeploy.
- The database pod uses a persistent volume, so the data survives a restart.

## Common mistake

Writing user uploads to the container's own disk. They vanish at the next deploy; use a volume or object storage.

## Don't confuse with

Ephemeral storage, which is wiped when the container goes away.

## Say it at work

- Does this need a persistent volume?
- Back up the volume regularly.
