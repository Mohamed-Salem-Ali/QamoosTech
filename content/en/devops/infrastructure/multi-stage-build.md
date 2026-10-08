---
id: multi-stage-build
category: devops
subcategory: infrastructure
level: intermediate
related: [containerization, container-registry, pipeline]
tags: [docker]
aliases: ["multistage build", "multi-stage dockerfile"]
term: "Multi-Stage Build"
pronunciation: "MUL-tee-STAYJ BILD"
keywords: ["smaller docker image", "build in one stage run in another", "copy only the output", "no compilers in production", "from build as builder", "slim final image", "صورة Docker أصغر", "البناء في مرحلة والتشغيل في أخرى", "نسخ الناتج فقط", "بلا مترجمات في الإنتاج", "‏FROM build AS builder", "صورة نهائية رشيقة"]
---

## Definition

A multi-stage build uses several `FROM` steps in one Dockerfile: heavy tools build the app in the first stage, and only the finished output is copied into a small final image.

## Where you hear it

In Dockerfiles for Node, Go and Python apps, image-size reviews and security hardening.

## Examples

- The multi-stage build shrank the image from 1.2 GB to 150 MB.
- Only copy the compiled binary into the final stage.

## Common mistake

Copying the whole source tree into the final stage. That brings back the size and the secrets you wanted to leave behind.

## Don't confuse with

A single-stage Dockerfile, where build tools stay in the image you ship.

## Say it at work

- Split this into build and runtime stages.
- Why is the image so big?
