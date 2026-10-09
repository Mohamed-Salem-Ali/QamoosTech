---
id: schema-registry
category: databases
subcategory: fundamentals
level: intermediate
related: [json-schema, protocol-buffers, event-driven]
aliases: ["avro", "schema compatibility"]
term: "Schema Registry"
pronunciation: "SKEE-muh REJ-is-tree"
keywords: ["central place for message schemas", "kafka avro", "compatibility checks", "producers and consumers agree", "versioned schemas", "evolve events safely", "مكان مركزي لمخططات الرسائل", "‏Kafka وAvro", "فحوص التوافق", "المنتجون والمستهلكون متفقون", "مخططات بإصدارات", "تطوير الأحداث بأمان"]
---

## Definition

A schema registry is a service that stores the versioned schemas of messages, such as Avro or Protobuf definitions, and checks that new versions stay compatible with old ones.

## Where you hear it

In Kafka and event-driven systems with many teams, data platforms and API governance talks.

## Examples

- The registry rejects a change that removes a required field.
- Producers register the schema before publishing.
- The producer registers the new Avro schema, and the registry confirms it is compatible.

## Common mistake

Changing event formats without checking consumers. Compatibility rules in a registry stop the break before release.

## Don't confuse with

A database schema, which defines tables. A registry holds the shapes of messages in transit.

## Say it at work

- Is the new schema backward compatible?
- Register it in the registry first.
