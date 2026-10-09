---
id: infrastructure-as-code
category: devops
subcategory: infrastructure
level: intermediate
related: [deployment, ci-cd, configuration-drift, instance, provisioning]
term: "Infrastructure as Code (IaC)"
pronunciation: "IN-fruh-struk-cher az KOHD"
keywords: ["manage servers with code files","terraform configuration files instead of dashboard","infrastructure as code","define servers in code","cloud infrastructure automation scripts","infrastructure as code deployment","write servers setup in files","avoid manual cloud console changes","البنية التحتية كشيفرة","إدارة السيرفرات عبر الكود","إنشاء الخوادم بملفات برمجية","كتابة البنية التحتية كملفات","اي سي","توفير السيرفرات برمجيا","إعدادات السحابة بالملفات","التحكم بالسيرفرات بالبرمجة"]
---
## Definition

Describing servers, networks, and databases in code files (for example Terraform) instead of clicking in a dashboard.

## Where you hear it

Cloud and DevOps job posts.

## Examples

- We manage our AWS setup with Terraform as infrastructure as code.
- You can review infrastructure changes in a pull request.
- The Terraform file creates the database, so the staging setup can be rebuilt with one command.

## Common mistake

Changing things manually in the cloud console. Then the code and the real setup no longer match.

## Don't confuse with

Infrastructure as Code (IaC) is often confused with Configuration Management; while IaC provisions the infrastructure itself, Configuration Management focuses on managing the software and settings running on top of already provisioned servers.

## Say it at work

- We should move this manual setup to Infrastructure as Code so we can track all changes in our repository.
- Please ensure that all new environment resources are defined using Infrastructure as Code before submitting the pull request.
