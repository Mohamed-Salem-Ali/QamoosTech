---
id: msgpack
category: web-apis
subcategory: data-formats
level: intermediate
related: [json, protocol-buffers, serialization]
aliases: ["message pack", "msgpack format"]
term: "MessagePack"
pronunciation: "MESS-ij-pak"
keywords: ["binary json alternative", "smaller payload than json", "compact binary serialization", "decode messagepack", "faster parsing than json", "not readable in a text editor", "بديل ثنائي لـ JSON", "حمولة أصغر من JSON", "تسلسل ثنائي مضغوط", "فك ترميز MessagePack", "تحليل أسرع من JSON", "لا يُقرأ في محرر نصوص"]
---

## Definition

A binary format that holds the same kinds of data as JSON (numbers, strings, lists and maps), in fewer bytes and often faster to read. It is not readable as text, so you need a tool to inspect it.

## Where you hear it

In internal services that send many small messages, in caches, and in data stored in Redis.

## Examples

- The service sends MessagePack instead of JSON to save bandwidth on every call.
- Use a MessagePack decoder to read the stored value while debugging.
- Both sides must agree on what each field means, because the format itself does not enforce a schema.

## Common mistake

Choosing it for a public API that browsers call. Debugging gets harder, and the savings are often small. Use JSON unless measurements show a real need.

## Don't confuse with

JSON is text you can read in any editor. MessagePack holds the same data in binary, so it is smaller but needs a decoder. Protocol Buffers is also binary, but it needs a schema file first.

## Say it at work

- Is the MessagePack payload worth it, or is JSON fast enough here?
- Let's measure the size before we switch the cache to MessagePack.
