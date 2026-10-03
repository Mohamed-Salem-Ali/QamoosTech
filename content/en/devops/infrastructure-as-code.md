---
id: infrastructure-as-code
category: devops
level: intermediate
related: [deployment, ci-cd]
term: "Infrastructure as Code (IaC)"
pronunciation: "IN-fruh-struk-cher az KOHD"
---
## Definition

Describing servers, networks, and databases in code files (for example Terraform) instead of clicking in a dashboard.

## Where you hear it

Cloud and DevOps job posts.

## Examples

- We manage our AWS setup with Terraform as infrastructure as code.
- You can review infrastructure changes in a pull request.

## Common mistake

Changing things manually in the cloud console. Then the code and the real setup no longer match.

## Don't confuse with

Infrastructure as Code (IaC) is often confused with Configuration Management; while IaC provisions the infrastructure itself, Configuration Management focuses on managing the software and settings running on top of already provisioned servers.

## Say it at work

- We should move this manual setup to Infrastructure as Code so we can track all changes in our repository.
- Please ensure that all new environment resources are defined using Infrastructure as Code before submitting the pull request.
