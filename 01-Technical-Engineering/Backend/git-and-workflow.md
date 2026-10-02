# Git & Development Workflow

---

### Git Submodule
- **Pronunciation**: /ɡɪt ˈsʌbˌmɒdjuːl/
- **Arabic**: وحدة فرعية في Git
- **Definition**: A Git mechanism for embedding one repository inside another as a subdirectory. The parent repo tracks a specific commit of the child repo, allowing you to keep related but independently versioned projects together.
- **Context**: Monorepo-adjacent setups, projects with separate backend/frontend repos.
- **Usage Examples**:
  - *Formal*: "The backend and frontend code live in nested submodules; contributors need to clone recursively with `--recurse-submodules`."
  - *Casual*: "The submodule is pointing at an old commit — run `git submodule update --init` to fix it."
- **Common Mistake**: Forgetting to commit the submodule reference in the parent repo after updating the child. This causes other developers to check out a stale version. Always commit both repos.
- **Related Terms**: Monorepo, Polyrepo, Git Subtree

---

### Quality Gates (SonarQube)
- **Pronunciation**: /ˈkwɒlɪti ɡeɪts/
- **Arabic**: بوابات الجودة
- **Definition**: Automated thresholds that code must pass before it can be merged or deployed — such as minimum test coverage, zero critical bugs, no security vulnerabilities, and acceptable code duplication levels.
- **Context**: CI/CD pipelines, code review standards, engineering culture.
- **Usage Examples**:
  - *Formal*: "I drove 1,200+ automated tests behind SonarQube quality gates in GitHub Actions — no PR merges unless coverage stays above 80%."
  - *Casual*: "The quality gate failed — we dropped below the coverage threshold."
- **Common Mistake**: Setting quality gates too strict initially (e.g., 100% coverage), which leads teams to write meaningless tests just to hit the number. Start with reasonable thresholds and raise them gradually.
- **Related Terms**: SonarQube, Test Coverage, Code Smell, Technical Debt, Linting
