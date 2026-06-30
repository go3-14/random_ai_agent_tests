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
  socials    - Display social links
  neofetch   - System information
  banner     - Display the banner
  ls         - List website sections
  cd [section] - Navigate to a section
  sudo       - Elevate privileges
  clear      - Clear terminal
  history    - Show command history
`,
  },
  whoami: {
    desc: "Display user identity",
    output: `
> whoami
┌───────────────────────────────────────┐
│  User:    cyber-engineer              │
│  Role:    Backend Engineer /          │
│           Cybersecurity Specialist    │
│  Status:  Active                      │
│  Uptime:  5+ years in the field      │
└───────────────────────────────────────┘
`,
  },
  about: {
    desc: "Learn about me",
    output: `
Hi! I'm a Backend Engineer and Cybersecurity specialist.
I build secure, scalable systems — and break things
to make them stronger.

Passionate about:
  • Distributed systems & microservices
  • Network security & penetration testing
  • Zero-trust architecture
  • Open source contributions

When I'm not coding, I'm usually CTF-ing or reading
security research papers.
`,
  },
  skills: {
    desc: "List technical skills",
    output: `
Languages:     Python, Go, Rust, JavaScript, TypeScript
Backend:       Node.js, Express, Django, FastAPI
Databases:     PostgreSQL, MongoDB, Redis
DevOps:        Docker, Kubernetes, AWS, CI/CD, Linux
Security:      Pentesting, Network Security, Cryptography
Tools:         Wireshark, Burp Suite, Metasploit, Git
Frontend:      React, Tailwind CSS

Type 'cd skills' to scroll to the skills section.
`,
  },
  projects: {
    desc: "Show featured projects",
    output: `
Featured Projects:
  1. SIEM Platform        - Real-time security monitoring (Rust)
  2. API Gateway          - High-performance gateway (Go)
  3. Vulnerability Scanner - Automated vuln scanning (Python)
  4. Auth Service         - OAuth2/JWT/MFA auth (Node.js)
  5. WAF Engine           - Web application firewall (Python)
  6. CLI Pentest Toolkit  - Modular pentest tools (Rust)

Type 'cd projects' to scroll to the projects section.
`,
  },
  contact: {
    desc: "Get contact information",
    output: `
Email:    hello@cyberport.io
GitHub:   github.com/cyber-engineer
LinkedIn: linkedin.com/in/cyber-engineer
Twitter:  @cyber_engineer

Type 'cd contact' to scroll to the contact section.
`,
  },
  socials: {
    desc: "Display social links",
    output: `
GitHub    ->  github.com/cyber-engineer
LinkedIn  ->  linkedin.com/in/cyber-engineer
Twitter   ->  @cyber_engineer
Email     ->  hello@cyberport.io
`,
  },
  neofetch: {
    desc: "System information",
    output: [
      "",
      "              .:ossso:.               user@cyberport",
      "            .+ssssssssso+.            -----------------",
      "          :osssssssssssssso:          OS: Arch Linux x86_64",
      "        -+sssssssssssssssss+-        Host: Custom Workstation",
      "      .osssssssssssssssssssso.       Kernel: 6.8.0-arch1-1",
      "     -+sssssssssssssssssssss+-       Uptime: 5 years, 2 months",
      "    .ossssssssssssssssssssssso.      Shell: zsh 5.9",
      "    ossssssssssssssssssssssssso      Terminal: Alacritty",
      "    ossssssssssssssssssssssssso      CPU: AMD Ryzen 9 7950X (32)",
      "    .ossssssssssssssssssssssso.      GPU: NVIDIA RTX 4090",
      "     -+sssssssssssssssssssss+-       Memory: 64782MiB / 65536MiB",
      "      .osssssssssssssssssssso.",
      "        -+sssssssssssssssss+-",
      "          :osssssssssssssso:",
      "            .+ssssssssso+.",
      "              .:ossso:.",
      "",
    ].join("\n"),
  },
  banner: {
    desc: "Display the banner",
    output: `
╔═══════════════════════════════════════════╗
║   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ║
║   ██░ ▄▄ ██░   ██░ ██░ ██░    ██░       ║
║   ██░ ██ ██░   ██░ ██░ ██░    ██░       ║
║   ██░ ██ ██░   ██░ ██░ ██░    ██░       ║
║   ██░ ██▄▄█░   ██▄▄▄▄█░ ██░    ██░       ║
║   ██░  ▀▀▀█░   ▀▀▀▀▀██░ ██░    ██░       ║
║   ██░    ██░        ██░ ██░    ██░       ║
║   ██░ ██▄▄██░  ▄▄▄▄▄██▄▄█░    ██░       ║
║   ██░ ▀▀▀▀▀█░  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀░       ║
║                                           ║
║   Backend Engineer / Cybersecurity        ║
╚═══════════════════════════════════════════╝

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
  sudo: {
    desc: "Elevate privileges",
    output: `
> sudo rm -rf /
Permission denied: Nice try. You can't compromise
a security engineer's portfolio that easily.

( ͡° ͜ʖ ͡°)
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
