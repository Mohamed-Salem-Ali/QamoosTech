# APIs and Authentication

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

### JWT (JSON Web Token)
- **Pronunciation**: "JOT" (rhymes with "dot") · جوت
- **Arabic**: رمز ويب JSON
- **Definition**: A compact, URL-safe token format for securely transmitting claims between two parties. Contains a header, payload, and signature. Commonly used for stateless authentication — the server doesn't need to store sessions.
- **Context**: Authentication flows, API security, authorization headers.
- **Usage Examples**:
  - *Formal*: "We secure our API endpoints by requiring a valid JWT in the Authorization header, with a 24-hour expiration policy."
  - *Casual*: "The JWT is expired — that's why you're getting a 401."
- **Common Mistake**: Storing sensitive data in the JWT payload. The payload is base64-encoded (not encrypted), so anyone can read it. Only store non-sensitive claims like user ID and role.
- **Related Terms**: Authentication, OAuth 2.0, Bearer Token, Refresh Token

---

### OAuth 2.0
- **Pronunciation**: "OH-awth two-point-oh" · أوأوث تو بوينت أو
- **Arabic**: بروتوكول المصادقة المفتوح
- **Definition**: An authorization framework that allows third-party applications to obtain limited access to a web service on behalf of a user, without exposing the user's credentials. Used for "Sign in with Google/GitHub" flows.
- **Context**: Social login integrations, third-party API access, security architecture.
- **Usage Examples**:
  - *Formal*: "We implemented OAuth 2.0 with Google as the identity provider, using the authorization code grant flow."
  - *Casual*: "Just add Google OAuth so users don't have to create yet another password."
- **Common Mistake**: Confusing authentication (who you are) with authorization (what you're allowed to do). OAuth is primarily an *authorization* protocol, though OpenID Connect (OIDC) adds authentication on top.
- **Related Terms**: JWT, OIDC, SSO, Identity Provider

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
