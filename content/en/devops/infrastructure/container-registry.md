---
id: container-registry
category: devops
subcategory: infrastructure
level: beginner
related: [containerization, pipeline, deployment]
aliases: ["docker registry", "docker hub", "image registry"]
term: "Container Registry"
pronunciation: "kun-TAY-ner REJ-is-tree"
keywords: ["store docker images", "docker hub ecr ghcr", "push and pull images", "tag the image", "private registry", "image versions", "تخزين صور Docker", "‏Docker Hub وECR وGHCR", "رفع الصور وسحبها", "وسم الصورة", "سجل خاص", "إصدارات الصور"]
---

## Definition

A container registry is a service that stores container images and lets you push new versions and pull them to run on any server. Examples: Docker Hub, GitHub Container Registry and AWS ECR.

## Where you hear it

In CI/CD pipelines, Kubernetes manifests (`image:` lines) and deployment scripts.

## Examples

- The pipeline builds the image and pushes it to the registry.
- Pin the deployment to a specific tag, not `latest`.

## Common mistake

Deploying the `latest` tag. You can't tell which version is running or roll back reliably.

## Don't confuse with

A Git repository, which stores source code. A registry stores the built images.

## Say it at work

- Which registry do we push to?
- Tag the image with the commit hash.
