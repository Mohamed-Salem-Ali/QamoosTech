# APIs and Authentication

### RESTful API
- **Definition**: Representational State Transfer. An architectural style for designing networked applications. It uses HTTP requests to GET, PUT, POST, and DELETE data.
- **Context/Stack**: Backend / System Design
- **Usage Examples**:
  - *Technical*: "The frontend communicates with the backend via a RESTful API returning JSON data."
  - *Conversational*: "Let's expose a REST endpoint for the payment webhook."
- **Related Terms**: Endpoint, JSON, HTTP Methods

### JWT (JSON Web Token)
- **Definition**: A compact, URL-safe means of representing claims to be transferred between two parties. Commonly used for authentication and authorization.
- **Context/Stack**: Backend / Security
- **Usage Examples**:
  - *Technical*: "We secure our API endpoints by requiring a valid JWT in the Authorization header."
  - *Conversational*: "Make sure the JWT expires after 24 hours to prevent replay attacks."
- **Related Terms**: Authentication, OAuth, Bearer Token

### WebSockets
- **Definition**: A computer communications protocol, providing full-duplex communication channels over a single TCP connection.
- **Context/Stack**: Backend / Real-time Communication
- **Usage Examples**:
  - *Technical*: "We implemented WebSockets to handle real-time chat messages between users."
  - *Conversational*: "For the live notification system, polling is too slow; let's switch to WebSockets."
- **Related Terms**: Socket.IO, Full-duplex, TCP
