---
id: query-parameter
category: web-apis
level: beginner
related: [endpoint, pagination]
term: "Query Parameter"
pronunciation: "KWEER-ee puh-RAM-ih-ter"
---
## Definition

A value added to the end of a URL after `?`, used to filter, sort, or page results, for example `/users?role=admin`.

## Where you hear it

API design, search pages, and analytics links.

## Examples

- Filter the list with the `status` query parameter.
- Never put passwords in a query parameter.

## Common mistake

Putting secrets in the URL. URLs end up in logs, browser history, and shared links.

## Don't confuse with

Query parameters are often confused with path parameters; query parameters are optional key-value pairs used for filtering or sorting, while path parameters are essential parts of the URL structure that identify a specific resource.

## Say it at work

- Can we add a query parameter to the endpoint so we can filter the products by category?
- Please ensure that the API documentation includes all supported query parameters for the search functionality.
