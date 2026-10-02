# Git & Development Workflow

### Git Submodule
- **Definition**: A repository embedded inside another Git repository. It allows you to keep another project in a subdirectory of your own project.
- **Context/Stack**: Version Control
- **Usage Examples**:
  - *Technical*: "The backend and frontend code live in nested submodules; you need to clone recursively."
  - *Conversational*: "Make sure to run `git submodule update --init` after you pull."
- **Related Terms**: Git, Mono-repo vs Poly-repo

### CI/CD Quality Gates (SonarQube)
- **Definition**: Automated thresholds that code must pass before it can be deployed (e.g., test coverage, code smells).
- **Context/Stack**: DevOps / QA
- **Usage Examples**:
  - *Technical*: "I drove 1,200+ automated tests behind SonarQube quality gates in GitHub Actions."
- **Related Terms**: SonarQube, Test Coverage, Pipeline
