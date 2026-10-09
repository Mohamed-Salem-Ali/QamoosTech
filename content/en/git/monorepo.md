---
id: monorepo
category: git
level: intermediate
related: [branch, ci-cd, package-dependency]
tags: [typescript]
aliases: ["mono repo", "polyrepo", "turborepo", "workspaces"]
term: "Monorepo"
pronunciation: "MON-oh-REE-poh"
keywords: ["many projects in one repository", "shared code between apps", "turborepo nx", "one commit changes several packages", "versus many repos", "single source", "مشاريع كثيرة في مستودع واحد", "كود مشترك بين التطبيقات", "‏Turborepo وNx", "commit واحد يغيّر عدة حزم", "مقابل مستودعات كثيرة", "مصدر واحد"]
---

## Definition

A monorepo is a single Git repository that holds the code of many projects or packages, so they share tooling and can change together in one commit.

## Where you hear it

In teams with a web app, an API and shared libraries, tools like Turborepo, Nx and pnpm workspaces, and "monorepo or polyrepo?" debates.

## Examples

- The web app and the API live in one monorepo and share types.
- CI only builds the packages affected by the change.
- A change to the shared types updates the web app and the API in one commit.

## Common mistake

Dropping everything in with no tooling. Without caching and affected-only builds, CI times explode.

## Don't confuse with

A monolith, which is one application deployed as a unit. A monorepo is about where the code is stored, and can hold many separately deployed apps.

## Say it at work

- Should this be a separate repo or in the monorepo?
- Use workspaces to link the packages.
