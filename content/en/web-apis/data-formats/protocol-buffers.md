---
id: protocol-buffers
category: web-apis
subcategory: data-formats
level: intermediate
related: [grpc, json, json-schema, base64, msgpack]
aliases: ["protobuf", "proto file"]
term: "Protocol Buffers"
pronunciation: "PROH-tuh-kol BUF-erz"
keywords: ["protobuf", "compact binary format", "proto file schema", "smaller than json", "generated code", "field numbers", "بروتوبف", "صيغة ثنائية مضغوطة", "مخطط ملف proto", "أصغر من JSON", "كود مولّد", "أرقام الحقول"]
---

## Definition

Protocol Buffers (protobuf) is a compact binary format for structured data. You describe the message in a `.proto` file and generate code for any language to read and write it.

## Where you hear it

In gRPC services, Kafka message schemas and size-sensitive systems.

## Examples

- The protobuf message is a fraction of the JSON size.
- Never reuse or renumber a field number.
- The service sends a protobuf message to the mobile app, which is much smaller than the JSON version.

## Common mistake

Changing the type or number of an existing field. Old and new services then read the data wrongly.

## Don't confuse with

JSON, which is text, readable by people and schema-less by default. Protobuf is binary and schema-driven.

## Say it at work

- Add the new field with the next number.
- Regenerate the code after editing the proto.
