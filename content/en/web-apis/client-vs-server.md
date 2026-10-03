---
id: client-vs-server
category: web-apis
level: beginner
related: [request-response, endpoint]
term: "Client vs Server"
pronunciation: "KLY-ent versus SER-ver"
---
## Definition

The *client* asks for something (a browser or mobile app). The *server* receives the request, does the work, and answers.

## Where you hear it

Any explanation of how the web works, API docs, and bug reports ("is it a client or server problem?").

## Examples

- The client sends a request and the server returns JSON.
- The validation runs on the client, but it must also run on the server.

## Common mistake

Trusting data from the client. The client can be changed by users, so the server must always validate.
