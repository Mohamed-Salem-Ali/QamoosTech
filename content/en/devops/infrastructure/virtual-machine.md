---
id: virtual-machine
category: devops
subcategory: infrastructure
level: beginner
related: [containerization, virtual-memory, cgroups]
aliases: ["vm", "virtualization", "hypervisor"]
term: "Virtual Machine"
pronunciation: "VER-choo-ul muh-SHEEN"
keywords: ["computer inside a computer", "vm with its own os", "hypervisor", "ec2 instance", "full isolation", "virtualization", "حاسوب داخل حاسوب", "جهاز افتراضي بنظام تشغيله", "المشرف الافتراضي", "نسخة EC2", "عزل كامل", "المحاكاة الافتراضية"]
---

## Definition

A virtual machine (VM) is a software-made computer that runs its own full operating system on top of real hardware, using a hypervisor to share the hardware between several VMs.

## Where you hear it

In cloud servers (EC2, Azure VMs), VirtualBox and VMware, and "VM or container?" decisions.

## Examples

- We rent a VM in the cloud and install Linux on it.
- A VM boots in a minute; a container starts in a second.
- We run the old reporting tool in a virtual machine with its own Windows install.

## Common mistake

Thinking a container is a small VM. A container shares the host kernel; a VM runs its own.

## Don't confuse with

A container, which is lighter, starts faster and shares the host's kernel, with weaker isolation.

## Say it at work

- Should this run on a VM or in a container?
- Snapshot the VM before upgrading.
