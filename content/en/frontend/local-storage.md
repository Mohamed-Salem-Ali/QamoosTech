---
id: local-storage
category: frontend
level: beginner
related: [cache, cookie]
term: "Local Storage"
pronunciation: "LOH-kul STOR-ij"
---

## Definition

Local Storage is a web API that allows websites to store data as key-value pairs directly in the user's browser. Unlike cookies, the stored data has no expiration date and persists even after the browser is closed.

## Where you hear it

Used during frontend development when discussing client-side data persistence, user preferences, or saving application state.

## Examples

- Use Local Storage to save the user's preferred theme setting.
- We save the shopping cart items in Local Storage so they remain after a page refresh.

## Common mistake

Storing sensitive information like passwords or personal tokens in Local Storage, as it is accessible by any script running on the page and is not secure for private data.

## Don't confuse with

Local Storage persists data indefinitely until explicitly cleared, while Session Storage clears the data as soon as the browser tab or window is closed.

## Say it at work

- Can we save this filter preference in Local Storage so it stays when the user comes back?
- Please ensure that no sensitive auth tokens are being stored in Local Storage.
