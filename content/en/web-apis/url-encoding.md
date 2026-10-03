---
id: url-encoding
category: web-apis
level: beginner
related: [query-parameter, request-response]
term: "URL Encoding"
pronunciation: "YOO-AR-EL en-KOH-ding"
---

## Definition

URL encoding is the process of converting special characters into a format that can be safely transmitted over the internet via a URL. It replaces unsafe characters with a `%` followed by their two-digit hexadecimal equivalent.

## Where you hear it

When building APIs, handling search queries, or constructing dynamic links in web applications.

## Examples

- The space character in a URL is encoded as `%20`.
- You must encode special characters like `&` or `?` if they are part of a query parameter value.

## Common mistake

Thinking that you can manually replace characters without using standard library functions, which often leads to broken links or security vulnerabilities like injection attacks.

## Don't confuse with

URL encoding replaces unsafe characters with hexadecimal values, while URL escaping is often used interchangeably, though encoding specifically refers to the percent-encoding mechanism.

## Say it at work

- Make sure you apply URL encoding to the search query before sending the request.
- The API endpoint failed because the query parameters lacked proper URL encoding.
