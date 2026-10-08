---
id: docker-image
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, container-registry, multi-stage-build]
tags: [docker]
term: "Docker Image"
pronunciation: "DOK-er IM-ij"
keywords: ["read-only template for a container", "build a docker image", "image tag", "docker build output", "image size reduction", "قالب للحاوية للقراءة فقط", "بناء صورة Docker", "وسم الصورة", "تقليل حجم الصورة"]
---

## Definition

A read-only template that contains an application and everything it needs to run, such as the code, libraries, and settings. A container is a running copy of an image.

## Where you hear it

In build pipelines, container registries, and deployment files.

## Examples

- The docker image is 1.2 GB, so we need a smaller base image.
- Tag the image with the commit hash before you push it.

## Common mistake

Building an image with secrets inside. Anyone who can pull the image can read those secrets.

## Don't confuse with

An image is the template. A container is the running instance that is started from it.
