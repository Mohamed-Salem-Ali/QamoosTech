# Apis

---

### RESTful API
- **Pronunciation**: "REST-ful AY-pee-eye" · رِستفُل أيه بي آي
- **Arabic**: واجهة برمجة تطبيقات REST
- **Definition**: An architectural style for building networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources, typically exchanging data as JSON.
- **Context**: Backend system design, API architecture discussions, technical interviews.
- **Usage Examples**:
  - *Formal*: "The frontend communicates with the backend via a RESTful API that returns paginated JSON responses."
  - *Casual*: "Let's expose a REST endpoint for the payment webhook."
- **Common Mistake**: Saying "REST API" when the API doesn't actually follow REST constraints (statelessness, resource-based URLs, proper HTTP verbs). Many APIs are just "HTTP APIs" — true REST is a specific architectural style.
- **Related Terms**: Endpoint, JSON, HTTP Methods, GraphQL, gRPC

---

### WebSockets
- **Pronunciation**: "WEB-sock-its" · وِبسوكِتس
- **Arabic**: مقابس الويب
- **Definition**: A communication protocol providing full-duplex (two-way) channels over a single TCP connection. Unlike HTTP's request-response model, WebSockets keep the connection open so the server can push data to the client at any time.
- **Context**: Real-time features — chat, live notifications, collaborative editing, live dashboards.
- **Usage Examples**:
  - *Formal*: "We implemented WebSockets to deliver real-time chat messages with sub-50ms latency."
  - *Casual*: "Polling is killing our server — let's switch to WebSockets."
- **Common Mistake**: Using WebSockets for everything. For simple scenarios where updates are infrequent, Server-Sent Events (SSE) is lighter and simpler. WebSockets shine when you need bidirectional communication.
- **Related Terms**: Socket.IO, Full-duplex, TCP, SSE (Server-Sent Events), Long Polling

