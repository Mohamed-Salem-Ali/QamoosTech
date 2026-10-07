---
id: goroutine
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [coroutine, thread, data-race]
aliases: ["goroutines", "go routine", "channel"]
term: "Goroutine"
pronunciation: "GOH-roo-teen"
keywords: ["go keyword", "lightweight thread in go", "thousands at once", "channels to communicate", "scheduled by go runtime", "concurrency in go", "الكلمة go", "خيط خفيف في Go", "آلاف منها معاً", "قنوات للتواصل", "يجدولها مشغّل Go", "التزامن في Go"]
---

## Definition

A goroutine is Go's lightweight unit of concurrent work. You start one with the `go` keyword, and the Go runtime schedules thousands of them over a few operating system threads.

## Where you hear it

In Go code and tutorials, interviews for Go roles, and concurrency discussions comparing Go with async or threads.

## Examples

- Launch a goroutine per request and send results over a channel.
- Leaking goroutines that wait forever is a common bug.

## Common mistake

Starting goroutines with no way to stop or wait for them. Use a WaitGroup, context or channel to control them.

## Don't confuse with

An operating system thread, which is far heavier. Goroutines start small and are cheap to create in large numbers.

## Say it at work

- Run this in a goroutine.
- Use `go test -race` to check the goroutines.
