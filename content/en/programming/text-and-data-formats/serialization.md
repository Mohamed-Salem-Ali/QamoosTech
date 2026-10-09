---
id: serialization
category: programming
subcategory: text-and-data-formats
level: intermediate
related: [payload, json-schema, dto, xml, markdown, parsing, msgpack]
aliases: ["serialisation", "marshalling", "deserialization"]
term: "Serialization"
pronunciation: "seer-ee-uh-ly-ZAY-shun"
keywords: ["convert object to json", "turn data into text or bytes", "save object to file", "send object over network", "deserialize json back", "marshalling data", "تحويل الكائن إلى JSON", "تحويل البيانات إلى نص أو بايتات", "حفظ كائن في ملف", "إرسال كائن عبر الشبكة", "عكس التسلسل من JSON", "تحويل البيانات للنقل"]
---

## Definition

Serialization turns an object in memory into text or bytes, such as JSON, so it can be saved or sent. Deserialization turns it back into an object.

## Where you hear it

In API work, caching, saving data to files, and framework docs, for example serializers in Django REST Framework.

## Examples

- The API serializes the order into JSON before sending it.
- Deserialization failed because a required field was missing.
- The cache serializes the user object to JSON before storing it in Redis.

## Common mistake

Deserializing data you do not trust with a format that can run code, such as Python's pickle. Prefer a plain format like JSON.

## Don't confuse with

Validation, which checks that data is correct. Serialization only changes its form.

## Say it at work

- Add a serializer so the model can be returned as JSON.
- Keep the stored format stable, or old data won't deserialize.
