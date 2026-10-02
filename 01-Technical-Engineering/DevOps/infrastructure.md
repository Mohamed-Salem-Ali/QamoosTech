# Infrastructure & DevOps

---

### CI/CD (Continuous Integration / Continuous Deployment)
- **Pronunciation**: "see-eye see-dee" · سي آي سي دي
- **Arabic**: التكامل المستمر / النشر المستمر
- **Definition**: A set of practices that automate the process of integrating code changes (CI) and deploying them to production (CD). CI runs tests on every commit; CD pushes passing builds to staging or production automatically.
- **Context**: DevOps discussions, pipeline configuration, release management.
- **Usage Examples**:
  - *Formal*: "Our GitHub Actions CI/CD pipeline runs the full test suite, lints, and deploys to AWS Fargate on every merge to main."
  - *Casual*: "Just push it — the CI/CD will handle the rest."
- **Common Mistake**: Confusing Continuous Delivery with Continuous Deployment. *Delivery* means the code is always in a deployable state (but deployment is manual). *Deployment* means every passing change goes to production automatically. Most teams do Delivery, not Deployment.
- **Related Terms**: Pipeline, GitHub Actions, Bitbucket Pipelines, Jenkins, ArgoCD

---

### Reverse Proxy
- **Pronunciation**: "ree-VERS PROK-see" · ريفيرس بروكسي
- **Arabic**: وكيل عكسي
- **Definition**: A server that sits in front of your application servers and forwards client requests to them. It handles concerns like SSL termination, load balancing, caching, and request routing so your app doesn't have to.
- **Context**: Server architecture, Nginx configuration, production deployment.
- **Usage Examples**:
  - *Formal*: "Nginx acts as a reverse proxy, terminating SSL and forwarding requests to our Gunicorn application servers."
  - *Casual*: "The 502 is from Nginx — the app behind the reverse proxy crashed."
- **Common Mistake**: Confusing reverse proxy with forward proxy. A *forward* proxy sits in front of clients (like a VPN). A *reverse* proxy sits in front of servers. Nginx is almost always used as a reverse proxy.
- **Related Terms**: Nginx, Load Balancer, SSL Termination, Gunicorn, CDN

---

### Containerization (Docker)
- **Pronunciation**: "kon-TAY-ner-eye-ZAY-shun" · كونتينيرايزيشن
- **Arabic**: الحاويات
- **Definition**: Packaging an application and all its dependencies (runtime, libraries, config) into a standardized unit called a container, ensuring it runs identically on any machine — from a developer's laptop to a production cloud server.
- **Context**: Deployment, environment consistency, microservices.
- **Usage Examples**:
  - *Formal*: "We containerized all services with Docker and orchestrate them using Docker Compose in development and ECS Fargate in production."
  - *Casual*: "It works on my machine — that's why we use Docker."
- **Common Mistake**: Treating containers like VMs. Containers share the host OS kernel and should run a single process. Don't SSH into containers or install extra packages at runtime — bake everything into the image.
- **Related Terms**: Docker, Docker Compose, Kubernetes, ECS, Image, Dockerfile
