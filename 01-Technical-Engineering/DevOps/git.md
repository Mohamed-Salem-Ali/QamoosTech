# Git

---

### Git Submodule
- **Pronunciation**: "git SUB-mod-yool" · جيت صَب مودول
- **Arabic**: وحدة فرعية في Git
- **Definition**: A Git mechanism for embedding one repository inside another as a subdirectory. The parent repo tracks a specific commit of the child repo, allowing you to keep related but independently versioned projects together.
- **Context**: Monorepo-adjacent setups, projects with separate backend/frontend repos.
- **Usage Examples**:
  - *Formal*: "The backend and frontend code live in nested submodules; contributors need to clone recursively with `--recurse-submodules`."
  - *Casual*: "The submodule is pointing at an old commit — run `git submodule update --init` to fix it."
- **Common Mistake**: Forgetting to commit the submodule reference in the parent repo after updating the child. This causes other developers to check out a stale version. Always commit both repos.
- **Related Terms**: Monorepo, Polyrepo, Git Subtree

---

