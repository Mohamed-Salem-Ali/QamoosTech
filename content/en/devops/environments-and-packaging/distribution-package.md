---
id: distribution-package
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [pypi, pyproject-toml, editable-install]
tags: [python]
aliases: ["wheel", "sdist", "source distribution"]
term: "Distribution Package"
pronunciation: "dis-trih-BYOO-shun PAK-ij"
keywords: ["wheel file", "sdist source archive", "built package to publish", "what you upload to pypi", "python -m build", "dist folder", "ملف wheel", "أرشيف المصدر sdist", "الحزمة المبنية للنشر", "ما ترفعه إلى PyPI", "أمر بناء الحزمة", "مجلد dist"]
---

## Definition

A distribution package is the built file you publish and install, usually a wheel (`.whl`, ready to install) or an sdist (a source archive).

## Where you hear it

When publishing a Python library, in packaging guides, and in CI jobs that build and upload releases.

## Examples

- Build the distribution, then upload the wheel and the sdist.
- Install the wheel in a clean environment to test it.
- We uploaded the wheel and the source archive to the package index.

## Common mistake

Mixing it up with an import package. The distribution is what you install; the import package is what you `import` in code.

## Don't confuse with

A `package` in code, which is just a folder of modules. A distribution is the shippable archive of one or more of them.

## Say it at work

- CI builds the wheel on every tag.
- The sdist is missing a file; check the manifest.
