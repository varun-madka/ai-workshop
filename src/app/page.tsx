import { ThemeToggle } from "@/components/theme-toggle";

const header = {
  name: "Varun Madka",
  title: "Cybersecurity Graduate Student | Graduate Research Assistant",
  email: "madkavarun24@gmail.com",
  linkedin: "linkedin.com/in/varun-madka-023504274",
  linkedinUrl: "https://linkedin.com/in/varun-madka-023504274",
};

const summary = [
  "Cybersecurity graduate student at the University of Central Oklahoma with hands-on experience in SOC operations, firewall monitoring, SIEM/IDS integration, OAuth 2.0 authentication, Linux administration, and secure application deployment.",
  "Experienced with Wazuh, Suricata, Keycloak, Flask, Docker, Fortinet, Sophos, and CrowdStrike Falcon. Interested in identity and access management, threat detection, log analysis, vulnerability assessment, and security research.",
];

const skillGroups = [
  {
    name: "Security & IAM",
    items:
      "OAuth 2.0, OpenID Connect, Keycloak, JWT, RBAC concepts, PAM, MFA/TOTP, SSH hardening, IAM fundamentals",
  },
  {
    name: "SIEM/IDS/Monitoring",
    items:
      "Wazuh, Suricata, ELK Stack, Logstash, Filebeat, Kibana, log correlation, alert triage, MITRE ATT&CK mapping",
  },
  {
    name: "Networking",
    items:
      "TCP/IP, subnetting, routing fundamentals, firewall rules, IDS/IPS, Nmap, packet-level troubleshooting",
  },
  {
    name: "Tools/Platforms",
    items:
      "FortiGate, Sophos, CrowdStrike Falcon, Cisco Packet Tracer, Docker, VirtualBox, Git/GitHub, Linux/Windows CLI",
  },
  {
    name: "Programming/Web/DB",
    items:
      "Python, Java, C, C++, C#, Flask, Flask-Dance, HTML, CSS, JavaScript, Apache Tomcat, JDBC, MySQL, SQLite",
  },
  {
    name: "Visualization",
    items: "Wazuh Dashboard, Kibana, Tableau, Power BI",
  },
];

const experiences = [
  {
    role: "Graduate Research Assistant",
    organization: "University of Central Oklahoma, United States",
    dates: "May 2026 – Present",
    bullets: [
      "Support cybersecurity research activities through literature review, experimentation, technical documentation, and implementation support.",
      "Assist with research tasks related to secure systems, monitoring, and applied cybersecurity problem solving.",
    ],
  },
  {
    role: "Student Lab Tutor / Lab Monitor",
    organization: "University of Central Oklahoma, United States",
    dates: "Sep 2025 – Present",
    bullets: [
      "Assisted students in Operating Systems, C, Java, Python, and programming lab activities through debugging and hands-on technical support.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    organization: "Silicon Business Solutions, Hyderabad, India",
    dates: "Jan 2024 – Dec 2024",
    bullets: [
      "Supported SOC operations including firewall monitoring, rule analysis, security event review, and incident triage.",
      "Used tools such as Sophos, FortiGate, and CrowdStrike Falcon for threat monitoring and investigation support.",
      "Assisted with vulnerability assessment, documentation, logging, and change-management activities.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    organization: "GradeSpot Academy, Remote",
    dates: "May 2023 – Jun 2023",
    bullets: [
      "Performed basic vulnerability assessment and risk analysis activities to identify security gaps.",
      "Documented incident response steps, reporting procedures, escalation paths, and remediation tracking.",
    ],
  },
];

const projects = [
  {
    name: "Centralized SIEM with Wazuh & Suricata",
    bullets: [
      "Deployed a self-hosted SIEM model integrating Suricata IDS sensors with Wazuh Manager, Indexer, Agent, and Dashboard.",
      "Configured Suricata eve.json log forwarding, Wazuh agent enrollment, TLS-based communication, and dashboard visualization.",
      "Validated detections for Nmap scans, suspicious traffic, and SSH brute-force activity using Wazuh correlation and alert analysis.",
    ],
  },
  {
    name: "Windows Binary Safety and Trust Analyzer",
    bullets: [
      "Developed a C#/.NET binary scanner that analyzes executable files, generates SHA-based identifiers, and stores results in SQLite.",
      "Implemented hash-based caching and partial enrichment logic to reduce duplicate scanning and update missing analysis data.",
      "Evaluated scan outputs, Authenticode signature checks, CSV reporting, and VirusTotal results for investigation.",
    ],
  },
  {
    name: "PAM-Based Multi-Factor Authentication for SSH",
    bullets: [
      "Implemented SSH multi-factor authentication on Kali Linux using PAM, OpenSSH, RSA key authentication, and Google Authenticator TOTP.",
      "Configured /etc/pam.d/sshd and SSH server settings to require a second authentication factor for remote login.",
      "Demonstrated defense-in-depth against compromised passwords or stolen SSH keys.",
    ],
  },
  {
    name: "OAuth 2.0 Authentication & Security Monitoring with Keycloak and Flask",
    bullets: [
      "Implemented secure OAuth 2.0 Authorization Code Flow using Keycloak, Flask, Flask-Dance, Python, and Docker.",
      "Explored OpenID Connect, JWT token generation/validation, SSO concepts, secure authentication, and user login monitoring.",
      "Built a login activity dashboard to monitor authentication events and strengthen understanding of IAM and token-based security.",
    ],
  },
  {
    name: "Secure ELK Pipeline with mTLS using Docker",
    bullets: [
      "Built a Docker-based ELK pipeline with Filebeat and Logstash for secure Suricata log ingestion and ECS-style normalization.",
      "Implemented mutual TLS for secure log transport and validated ingestion through dashboard-based visualization.",
    ],
  },
];

const certifications = [
  {
    vendor: "Fortinet",
    items: [
      "Fortinet Certified Associate",
      "Fortinet Certified Fundamentals",
      "FortiGate 7.4 Operator",
    ],
  },
  {
    vendor: "Cisco",
    items: [
      "Introduction to Cybersecurity",
      "JavaScript Essentials",
      "Python Essentials",
    ],
  },
  { vendor: "Juniper", items: ["Getting Started with Networking"] },
  {
    vendor: "Dell Technologies",
    items: [
      "Cybersecurity Frameworks",
      "IAM, Tools & Processes",
      "Cloud Security",
    ],
  },
  {
    vendor: "Google Cloud",
    items: [
      "Security in the Cloud",
      "App Building with AppSheet",
      "Build and Optimize Data Warehouses with BigQuery",
    ],
  },
];

const education = [
  {
    school: "University of Central Oklahoma",
    degree: "M.S. in Cybersecurity / Computer and Information Systems Security",
    detail: "GPA: 3.00",
    dates: "Jan 2025 – Jan 2027",
  },
  {
    school: "Malla Reddy Institute of Engineering and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    dates: "Jul 2020 – Jul 2024",
  },
];

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 border-b border-card-border pb-3 text-xl font-bold tracking-tight"
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50 border-b border-card-border bg-background/80 backdrop-blur">
        <header className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="text-sm font-semibold">
            VM
          </a>
          <ThemeToggle />
        </header>
      </div>

      <main id="top" className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <section aria-labelledby="name" className="pt-12 sm:pt-16">
          <h1
            id="name"
            className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl"
          >
            {header.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-primary">
            {header.title}
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <li>
              <a
                href={`mailto:${header.email}`}
                className="transition-colors hover:text-foreground"
              >
                {header.email}
              </a>
            </li>
            <li aria-hidden="true">·</li>
            <li>
              <a
                href={header.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {header.linkedin}
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="summary" className="mt-12">
          <SectionHeading id="summary">Summary</SectionHeading>
          <div className="mt-4 space-y-3 text-base leading-7">
            {summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="experience" className="mt-12">
          <SectionHeading id="experience">Experience</SectionHeading>
          <ol className="mt-6 space-y-8">
            {experiences.map((job) => (
              <li key={`${job.role}-${job.organization}`}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted">{job.organization}</p>
                  <p className="text-sm font-medium text-primary">
                    {job.dates}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/90">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="skills" className="mt-12">
          <SectionHeading id="skills">Skills</SectionHeading>
          <dl className="mt-6 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.name} className="grid gap-1 sm:grid-cols-[10rem_1fr]">
                <dt className="text-sm font-semibold">{group.name}</dt>
                <dd className="text-sm leading-6 text-muted">{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="projects" className="mt-12">
          <SectionHeading id="projects">Projects</SectionHeading>
          <ol className="mt-6 space-y-8">
            {projects.map((project) => (
              <li key={project.name}>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/90">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="certifications" className="mt-12">
          <SectionHeading id="certifications">Certifications</SectionHeading>
          <ul className="mt-6 space-y-4">
            {certifications.map((group) => (
              <li key={group.vendor}>
                <p className="text-sm font-semibold">{group.vendor}</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="education" className="mt-12">
          <SectionHeading id="education">Education</SectionHeading>
          <ol className="mt-6 space-y-6">
            {education.map((entry) => (
              <li key={entry.school}>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{entry.school}</h3>
                  <p className="text-sm text-muted">{entry.degree}</p>
                  {entry.detail ? (
                    <p className="text-sm text-muted">{entry.detail}</p>
                  ) : null}
                  <p className="text-sm font-medium text-primary">
                    {entry.dates}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="border-t border-card-border">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} {header.name}</p>
          <a
            href={`mailto:${header.email}`}
            className="transition-colors hover:text-foreground"
          >
            {header.email}
          </a>
        </div>
      </footer>
    </>
  );
}