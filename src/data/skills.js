import { Code2, Server, Database, Cloud, Terminal, Globe } from "lucide-react";

const skills = [
  { name: "Python", icon: Code2, category: "languages" },
  { name: "JavaScript", icon: Code2, category: "languages" },
  { name: "TypeScript", icon: Code2, category: "languages" },
  { name: "Go", icon: Code2, category: "languages" },
  { name: "Rust", icon: Code2, category: "languages" },
  { name: "Node.js", icon: Server, category: "backend" },
  { name: "Express", icon: Server, category: "backend" },
  { name: "Django", icon: Server, category: "backend" },
  { name: "FastAPI", icon: Server, category: "backend" },
  { name: "PostgreSQL", icon: Database, category: "database" },
  { name: "MongoDB", icon: Database, category: "database" },
  { name: "Redis", icon: Database, category: "database" },
  { name: "Docker", icon: Terminal, category: "devops" },
  { name: "Kubernetes", icon: Terminal, category: "devops" },
  { name: "AWS", icon: Cloud, category: "devops" },
  { name: "CI/CD", icon: Cloud, category: "devops" },
  { name: "gRPC", icon: Server, category: "backend" },
  { name: "GraphQL", icon: Server, category: "backend" },
  { name: "Kafka", icon: Database, category: "backend" },
  { name: "Linux", icon: Terminal, category: "devops" },
  { name: "React", icon: Globe, category: "frontend" },
  { name: "Tailwind CSS", icon: Globe, category: "frontend" },
  { name: "Git", icon: Code2, category: "tools" },
  { name: "Terraform", icon: Cloud, category: "devops" },
];

export default skills;
