---
id: pagination
category: web-apis
level: beginner
related: [query-parameter, cursor-pagination]
term: "Pagination"
pronunciation: "paj-ih-NAY-shun"
---
## Definition

Splitting a long list of results into smaller pages, so the server and the app do not handle everything at once.

## Where you hear it

List APIs, admin dashboards, and performance reviews.

## Examples

- The endpoint supports pagination with `page` and `limit`.
- Without pagination, the response would contain 50,000 rows.

## Common mistake

Returning all records "for now". It works in development and breaks in production when data grows.

## Don't confuse with

Pagination is often mixed up with infinite scrolling, but pagination splits data into distinct pages with page numbers, while infinite scrolling loads more items automatically as the user reaches the bottom of the page.

## Say it at work

- Can we add pagination to this endpoint so we don't load thousands of users at once?
- Please ensure that all list endpoints implement pagination before we merge this pull request.
