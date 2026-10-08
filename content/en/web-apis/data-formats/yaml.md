---
id: yaml
category: web-apis
subcategory: data-formats
level: beginner
related: [json, serialization, environment-variable, markdown]
term: "YAML"
pronunciation: "YAM-ul"
keywords: ["yaml configuration file", "indentation based format", "docker compose yaml", "kubernetes manifest", "yaml syntax error", "ملف إعداد YAML", "صيغة تعتمد على المسافات البادئة", "ملف docker compose", "ملف Kubernetes"]
---

## Definition

A human-friendly data format that uses indentation instead of brackets. It is common for configuration files, such as Docker Compose and Kubernetes manifests, but its indentation rules are strict and easy to get wrong.

## Where you hear it

In CI pipeline files, container configuration, and Kubernetes manifests.

## Examples

- The pipeline is defined in a YAML file in the repository.
- A tab instead of spaces breaks the whole YAML file.
- The Docker Compose file is written in YAML, so check the indentation first.

## Common mistake

Mixing tabs and spaces, or writing "no" or "on" without quotes, which YAML may read as a boolean.

## Don't confuse with

YAML is for people to write and read. JSON is stricter and is the usual format for data exchange between programs.
