# System Architecture & Design

### Multi-tenant SaaS
- **Definition**: A software architecture in which a single instance of software runs on a server and serves multiple tenants (customers/organizations), keeping their data isolated.
- **Context/Stack**: System Architecture
- **Usage Examples**:
  - *Technical*: "We enforce tenant isolation via PostgreSQL row-level security in our multi-tenant SaaS."
  - *Conversational*: "Is this new feature going to be available for all tenants, or is it a premium toggle?"
- **Related Terms**: Tenant Isolation, Row-Level Security (RLS)

### Permission-guarded endpoints (RBAC)
- **Definition**: API routes that check a user's roles and permissions before allowing the request to proceed.
- **Context/Stack**: Security / API Design
- **Usage Examples**:
  - *Technical*: "I built 132 permission-guarded endpoints using Role-Based Access Control (RBAC)."
- **Related Terms**: Authentication, Authorization, Middleware

### RAG (Retrieval-Augmented Generation)
- **Definition**: An AI framework for improving the quality of LLM-generated responses by grounding the model on external sources of knowledge.
- **Context/Stack**: AI / Backend
- **Usage Examples**:
  - *Technical*: "We built an AI assistant pairing a RAG knowledge base with a confirm-before-write action agent."
- **Related Terms**: Vector Database, Embeddings, LLM
