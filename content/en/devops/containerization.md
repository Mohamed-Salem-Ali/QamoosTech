---
id: containerization
category: devops
level: intermediate
related: [deployment, environment-variable]
term: "Containerization (Docker)"
pronunciation: "kun-TAY-ner-ih-ZAY-shun"
---
## Definition

Packing an app with everything it needs into a container, so it runs the same way on any machine.

## Where you hear it

Docker, Kubernetes, and deployment talks ("it works on my machine").

## Examples

- We run the API in a Docker container.
- Containerization removed the "works on my machine" problem.

## Common mistake

Treating a container like a virtual machine, installing things by hand inside it. Put everything in the image instead.

## Don't confuse with

Containerization shares the host OS kernel to run lightweight packages, whereas virtualization runs a full guest operating system on top of a hypervisor.

## Say it at work

- We should move containerization to the top of our priority list for the upcoming microservices migration.
- Could you please check if the containerization setup is causing this memory leak in the staging environment?
