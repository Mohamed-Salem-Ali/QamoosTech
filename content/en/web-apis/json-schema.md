---
id: json-schema
category: web-apis
level: intermediate
related: [payload, schema, restful-api]
term: "JSON Schema"
pronunciation: "JAY-son SKEE-muh"
keywords: ["validate json payload structure","json data validation rules","check json format requirements","json schema validator","define json object structure","validate api request body","json structure definition language","json validation schema","enforce json schema rules","التحقق من صحة بيانات جايسون","قواعد هيكل بيانات جيسون","مخطط التحقق من ملفات جيسون","التاكد من تطابق بيانات جيسون","تحديد هيكل طلبات اي بي آي","التحقق من صحة المدخلات","مخطط بيانات جيسون","فحص هيكل ملفات جيسون"]
---

## Definition

JSON Schema is a declarative language that allows you to annotate and validate JSON documents. It defines the required fields, data types, and constraints for a JSON object to ensure it meets specific criteria.

## Where you hear it

In API documentation, data validation logic, and configuration files for backend services.

## Examples

- We use JSON Schema to validate the incoming payload in our API endpoints.
- The service will reject the request if the JSON structure does not match the defined schema.

## Common mistake

Thinking that JSON Schema is a data format itself; it is actually a set of rules used to describe the structure of other JSON data, not the data itself.

## Don't confuse with

JSON Schema is often confused with OpenAPI, but while JSON Schema validates the structure of a single JSON document, OpenAPI describes entire RESTful APIs including endpoints, methods, and responses.

## Say it at work

- Can we update the JSON Schema to make the email field optional for this endpoint?
- Please find attached the updated JSON Schema for the user profile registration payload.
