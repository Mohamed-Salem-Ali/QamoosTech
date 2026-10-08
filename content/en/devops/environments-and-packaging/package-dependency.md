---
id: package-dependency
category: devops
subcategory: environments-and-packaging
level: beginner
related: [pip, lock-file, version-pinning]
tags: [python]
aliases: ["requirements.txt", "optional dependencies", "extras", "dev dependencies", "python dependency"]
term: "Package Dependency"
pronunciation: "PAK-ij dih-PEN-den-see"
keywords: ["library your project needs", "requirements.txt", "optional extras", "install dependencies", "dev dependencies", "packages listed in the project", "مكتبة يحتاجها مشروعك", "ملف requirements.txt", "حزم إضافية اختيارية", "تثبيت الاعتماديات", "اعتماديات التطوير", "الحزم المسرودة في المشروع"]
---

## Definition

A package dependency is a library your project needs in order to run. Projects list them in a file such as `requirements.txt`, and some are optional extras installed only on request.

## Where you hear it

In setup guides, security alerts about vulnerable libraries, and when updating a project.

## Examples

- Add `requests` as a dependency and reinstall.
- Test tools are dev dependencies, not needed in production.
- The app's dependency on an old version of the library caused the crash.

## Common mistake

Using the word with its project-management meaning. Here it is a library, not a task that waits for another task.

## Don't confuse with

Task dependency in agile planning, where one task must finish before another can start.

## Say it at work

- Which dependency pulled this in?
- Keep the dependency list small.
