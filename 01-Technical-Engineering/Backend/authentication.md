# Authentication

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

