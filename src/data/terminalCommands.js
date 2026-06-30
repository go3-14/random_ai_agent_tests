const commands = {
  help: {
    desc: "List all available commands",
    output: `
Available commands:
  help       - Show this help message
  whoami     - Display user identity
  about      - Learn about me
  skills     - List technical skills
  projects   - Show featured projects
  contact    - Get contact information
  banner     - Display welcome banner
  ls         - List website sections
  cd [section] - Navigate to a section
  clear      - Clear terminal
  history    - Show command history
`,
  },
  whoami: {
    desc: "Display user identity",
    output: `
> whoami

  User:    backend-engineer
  Role:    Backend Engineer / Systems Architect
  Stack:   Python, Go, Rust, TypeScript
  Status:  Open to opportunities
`,
  },
  about: {
    desc: "Learn about me",
    output: `
Hi! I'm a Backend Engineer with 5+ years of experience.

I design and build:
  • Distributed systems & microservices
  • High-performance REST & gRPC APIs
  • Data pipelines & event-driven architectures
  • Cloud infrastructure (AWS, Docker, K8s)

I believe in clean code, comprehensive testing, and
observability-first operations.
`,
  },
  skills: {
    desc: "List technical skills",
    output: `
Languages:     Python, Go, Rust, JavaScript, TypeScript
Backend:       Node.js, Express, Django, FastAPI, gRPC, GraphQL
Databases:     PostgreSQL, MongoDB, Redis, Kafka
DevOps:        Docker, Kubernetes, AWS, Terraform, CI/CD
Tools:         Git, Linux, Prometheus, Grafana
Frontend:      React, Tailwind CSS

Type 'cd skills' to scroll to the skills section.
`,
  },
  projects: {
    desc: "Show featured projects",
    output: `
Featured Projects:
  1. Event Pipeline     - 1M+ events/sec processing (Rust, Kafka)
  2. API Gateway        - High-performance gateway (Go, Redis)
  3. Auth Service       - OAuth2/JWT/MFA auth (Node.js, MongoDB)
  4. Data Lake Platform - Scalable ETL pipelines (Python, AWS)
  5. CLI Orchestrator   - Multi-service deployment tool (Rust)
  6. Monitoring Stack   - Distributed tracing (Go, Prometheus)

Type 'cd projects' to scroll to the projects section.
`,
  },
  contact: {
    desc: "Get contact information",
    output: `
Email:    hello@engineering.dev
GitHub:   github.com/backend-engineer
LinkedIn: linkedin.com/in/backend-engineer
Twitter:  @backend_eng

Type 'cd contact' to scroll to the contact section.
`,
  },
  banner: {
    desc: "Display welcome banner",
    output: `
┌──────────────────────────────────────────┐
│                                          │
│   Backend Engineer                       │
│   Building distributed systems           │
│   that scale.                            │
│                                          │
└──────────────────────────────────────────┘

Type 'help' for available commands.
`,
  },
  ls: {
    desc: "List website sections",
    output: `
Sections:
  ./hero       - Home / Introduction
  ./about      - About me
  ./skills     - Technical skills
  ./projects   - Featured projects
  ./terminal   - This terminal
  ./contact    - Contact information

Use 'cd <section>' to navigate.
`,
  },
};

const sectionMap = {
  hero: "hero",
  about: "about",
  skills: "skills",
  projects: "projects",
  terminal: "terminal",
  contact: "contact",
};

export { commands, sectionMap };
