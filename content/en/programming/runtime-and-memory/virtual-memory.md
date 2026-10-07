---
id: virtual-memory
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [page-fault, garbage-collection, memory-leak]
aliases: ["swap", "swapping", "address space", "rss"]
term: "Virtual Memory"
pronunciation: "VER-choo-ul MEM-uh-ree"
keywords: ["each process has its own address space", "swap to disk", "more memory than ram", "address translation", "isolation between programs", "page table", "لكل عملية فضاء عناوينها", "التبديل إلى القرص", "ذاكرة أكثر من الرام", "ترجمة العناوين", "عزل البرامج عن بعضها", "جدول الصفحات"]
---

## Definition

Virtual memory gives each process its own private view of memory. The operating system maps those virtual addresses to real RAM, and can move less-used parts to disk, so programs can use more memory than the machine has.

## Where you hear it

In OS courses, memory-usage graphs (RSS vs virtual size), container memory limits and performance debugging when a machine starts swapping.

## Examples

- The process shows 4 GB of virtual memory but uses 300 MB of RAM.
- The server is swapping, so everything slowed down.

## Common mistake

Reading virtual size as real usage. Look at resident memory (RSS) to see what is actually in RAM.

## Don't confuse with

Physical RAM, the actual chips. Virtual memory is the layer that maps program addresses onto it and onto disk.

## Say it at work

- Check the RSS, not the virtual size.
- Swap usage is climbing.
