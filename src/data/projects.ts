export type ProjectId = 'kubepilot' | 'codewise' | 'monitoring' | 'incidentzero' | 'auth' | 'pipeline' | 'servicesync';
export type ProjectStatus = 'public-demo' | 'local-demo' | 'documentation' | 'repository';

export interface ProjectLink { label: string; href: string; }
export interface ProjectMedia { src: string; alt: string; caption: string; provenance: 'genuine' | 'rehearsal'; }
export interface StackGroup { label: string; items: string[]; }
export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  capabilities: string[];
  workflow: string[];
  stack: StackGroup[];
  limitations: string[];
  media: ProjectMedia[];
}
export interface Project {
  id: ProjectId;
  name: string;
  description: string;
  tags: string[];
  badge: 'Project' | 'Collaborative project';
  status: ProjectStatus;
  links: ProjectLink[];
  details: ProjectCaseStudy;
}

const systemWorkspace = new URL('../assets/project-media/system-monitoring-workspace.png', import.meta.url).href;
const systemService = new URL('../assets/project-media/system-monitoring-service.png', import.meta.url).href;
const incidentDashboard = new URL('../assets/project-media/incidentzero-dashboard.png', import.meta.url).href;
const incidentDiagnosis = new URL('../assets/project-media/incidentzero-diagnosis.png', import.meta.url).href;

export const projects: Project[] = [
  {
    id: 'kubepilot', name: 'KubePilot', badge: 'Project', status: 'local-demo',
    description: 'A Kubernetes operations workspace for workload evidence, runbook search, guided diagnosis and incident reports.',
    tags: ['Python', 'FastAPI', 'Kubernetes', 'RAG'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AryanSharma9917/kubepilot' },
      { label: 'Runbooks', href: 'https://github.com/AryanSharma9917/kubepilot/tree/main/docs/runbooks' },
    ],
    details: {
      overview: 'KubePilot brings cluster inspection, evidence, troubleshooting guidance and incident reporting into one operator-facing workspace.',
      problem: 'Kubernetes failures scatter useful context across workloads, pods, events, logs and operational runbooks, making a reviewable investigation difficult to assemble.',
      solution: 'The workspace starts from a workload, gathers observable signals, retrieves relevant Markdown runbooks and lets an operator explicitly create an incident report with evidence and next actions.',
      capabilities: ['Inspect workload health, pods, events and logs', 'Diagnose common rollout, scheduling, image and probe failures', 'Retrieve cited guidance from local runbooks', 'Create and export JSON or Markdown incident reports', 'Run with fixtures or configured Kubernetes access'],
      workflow: ['Workload', 'Evidence', 'Runbooks', 'Incident Report'],
      stack: [
        { label: 'Application', items: ['FastAPI', 'HTML/CSS/JS', 'Postgres'] },
        { label: 'Operations', items: ['Kubernetes', 'Helm', 'Argo CD', 'Prometheus'] },
        { label: 'Retrieval', items: ['Runbook RAG', 'FAISS optional', 'LangGraph optional'] },
      ],
      limitations: ['The default Docker demo uses predictable fixture workloads and does not prove a real cluster connection.', 'The default answer path is deterministic; an external HTTP model is optional.', 'KubePilot presents guidance and does not execute displayed commands or perform write-action remediation.', 'GitHub currently reports this owner-maintained repository as non-fork; contribution boundaries should still be reviewed from history before making sole-authorship claims.'],
      media: [],
    },
  },
  {
    id: 'codewise', name: 'Codewise CLI', badge: 'Project', status: 'documentation',
    description: 'A Go-based DevOps command-line tool for container scaffolding, Kubernetes deployment, Helm workflows and deployment diagnostics.',
    tags: ['Go', 'Docker', 'Kubernetes', 'Helm'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AryanSharma9917/Codewise-CLI' },
      { label: 'Documentation', href: 'https://aryansharma9917.github.io/Codewise-CLI/' },
    ],
    details: {
      overview: 'Codewise is a beta DevOps CLI that keeps scaffolding, packaging, deployment and diagnostics behind one consistent command surface.',
      problem: 'Moving an application from source to a containerized workload often requires switching between Docker, kubectl, Helm and repeated configuration boilerplate.',
      solution: 'A Go CLI provides explicit commands for project configuration, Docker and Kubernetes scaffolding, Helm setup, environment strategies, dry runs and deployment diagnostics.',
      capabilities: ['Scaffold Dockerfiles, Kubernetes manifests and Helm charts', 'Build images and apply or delete Kubernetes resources', 'Check local tools and cluster connectivity with doctor', 'Explain deployment selection and recovery guidance', 'Convert Base64, YAML, JSON, ENV, TOML and XML formats'],
      workflow: ['Configure', 'Scaffold', 'Validate', 'Deploy'],
      stack: [{ label: 'Core', items: ['Go', 'CLI', 'YAML'] }, { label: 'Delivery', items: ['Docker', 'Kubernetes', 'Helm', 'Argo CD'] }],
      limitations: ['The project is beta and documents local workflows and disposable-cluster validation rather than blanket production readiness.', 'OCI Helm push, Flux, image scanning, Terraform modules and a plugin system remain roadmap items.'],
      media: [],
    },
  },
  {
    id: 'monitoring', name: 'System Monitoring', badge: 'Project', status: 'documentation',
    description: 'A self-hosted service monitoring workspace with scheduled checks, incidents, notifications and operational dashboards.',
    tags: ['Python', 'FastAPI', 'Prometheus', 'Grafana'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AryanSharma9917/SystemMonitoring' },
      { label: 'Project website', href: 'https://aryansharma9917.github.io/SystemMonitoring/' },
      { label: 'Operations guide', href: 'https://github.com/AryanSharma9917/SystemMonitoring/blob/main/website/guide.html' },
    ],
    details: {
      overview: 'A self-hosted administrator workspace for registering HTTP services, observing scheduled checks and following incidents through recovery.',
      problem: 'Small operational teams need a durable view of service checks, failures and notification delivery without treating a handful of observations as an SLA.',
      solution: 'FastAPI and SQLite persist services, observations, incidents and webhook events, while Prometheus and Grafana expose operational metrics and the responsive workspace supports administrator workflows.',
      capabilities: ['Register, pause, resume and check approved HTTP services', 'Schedule probes with configurable thresholds and expected status', 'Track sustained failures, recovery and retained observations', 'Deliver durable at-least-once webhook notifications', 'Back up and validate the SQLite workspace'],
      workflow: ['Register', 'Schedule Checks', 'Track Incident', 'Confirm Recovery'],
      stack: [{ label: 'Application', items: ['Python 3.12', 'FastAPI', 'SQLite', 'Vanilla JS'] }, { label: 'Operations', items: ['Prometheus', 'Grafana', 'Docker Compose', 'Caddy optional'] }],
      limitations: ['Observed success is based on valid retained checks, not continuous uptime or a contractual SLA.', 'The SQLite deployment is designed for one application process per installation.', 'Operational routes and monitoring services should remain internal when deploying behind HTTPS.'],
      media: [
        { src: systemWorkspace, alt: 'System Monitoring administrator workspace showing registered services and incident summary', caption: 'Genuine browser-captured workspace using controlled demo services; displayed observations are not production SLA claims.', provenance: 'genuine' },
        { src: systemService, alt: 'System Monitoring service details view with check history and response chart', caption: 'Genuine browser-captured service details screen from the repository verification workflow.', provenance: 'genuine' },
      ],
    },
  },
  {
    id: 'incidentzero', name: 'IncidentZero', badge: 'Collaborative project', status: 'public-demo',
    description: 'An evidence-driven Kubernetes incident investigation workspace with bounded reasoning, remediation proposals and controlled validation.',
    tags: ['Next.js', 'FastAPI', 'LangGraph', 'Nemotron', 'Kubernetes'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AryanSharma9917/incidentzero' },
      { label: 'Live demo', href: 'https://incidentzero-web.onrender.com' },
      { label: 'Devpost', href: 'https://devpost.com/software/incidentzero-cup1qe' },
      { label: 'Video', href: 'https://youtu.be/RaPNBI7qMDQ' },
    ],
    details: {
      overview: 'IncidentZero turns Kubernetes incident investigation into a visible run from symptoms and evidence through a reviewable patch, controlled validation and RCA.',
      problem: 'Incident evidence is distributed across pod state, terminations, events, logs and manifests, while a proposed patch is not a resolution until its safety and effect are checked.',
      solution: 'A LangGraph worker coordinates evidence collection, Nemotron reasoning, conditional Tavily research, constrained YAML generation, deterministic policy checks and bounded sandbox evaluation.',
      capabilities: ['Collect and retain structured Kubernetes incident evidence', 'Form typed hypotheses and a final diagnosis with Nemotron', 'Run bounded conditional research with citation validation', 'Generate exact-target YAML patches behind deterministic policy', 'Evaluate fixes in a controlled Kind sandbox and generate RCA'],
      workflow: ['Symptoms', 'Evidence', 'Hypotheses', 'Research', 'Diagnosis', 'Patch', 'Policy Validation', 'Sandbox Evaluation', 'RCA'],
      stack: [{ label: 'Application', items: ['Next.js', 'React', 'FastAPI', 'SQLite', 'SSE'] }, { label: 'Reasoning', items: ['NVIDIA Nemotron', 'Nebius Token Factory', 'LangGraph', 'Tavily'] }, { label: 'Validation', items: ['Docker', 'Kind', 'Kubernetes', 'Policy checks'] }],
      limitations: ['Hosted infrastructure execution is explicitly simulated; real Kubernetes evidence and validation were exercised only in a controlled local Kind environment.', 'There is no production approval/apply engine, enterprise RBAC, multi-cluster management or production change endpoint.', 'Git history records contributions from Aryan Sharma and Rakshit Sharma; final role attribution remains to be confirmed with both contributors.'],
      media: [
        { src: incidentDashboard, alt: 'IncidentZero mocked rehearsal dashboard with controlled sandbox notice', caption: 'Mocked local UI rehearsal from the repository. It is not live provider or Kubernetes acceptance evidence.', provenance: 'rehearsal' },
        { src: incidentDiagnosis, alt: 'IncidentZero mocked rehearsal diagnosis view', caption: 'Mocked local diagnosis rehearsal with a visible provenance banner.', provenance: 'rehearsal' },
      ],
    },
  },
  {
    id: 'auth', name: 'Go Auth API', badge: 'Project', status: 'documentation',
    description: 'Multi-tenant authentication and organization access with rotating refresh tokens, RBAC and audit logging.',
    tags: ['Go', 'Echo', 'MongoDB', 'JWT'],
    links: [{ label: 'GitHub', href: 'https://github.com/AryanSharma9917/GO-auth-API' }, { label: 'Documentation', href: 'https://aryansharma9917.github.io/GO-auth-API/' }, { label: 'OpenAPI', href: 'https://github.com/AryanSharma9917/GO-auth-API/blob/main/openapi.yaml' }],
    details: {
      overview: 'A Go and MongoDB API for organization-scoped identity, sessions, invitations and auditable role-based access.',
      problem: 'Multi-tenant applications need more than login: token rotation, session control, organization roles, invitations and auditability must behave consistently together.',
      solution: 'The API combines short-lived JWT access tokens with rotating opaque refresh tokens, organization membership rules, session revocation and structured operational endpoints.',
      capabilities: ['Register organizations with a protected owner role', 'Rotate refresh tokens and detect token reuse', 'List and revoke sessions or log out all sessions', 'Manage expiring single-use invitations and organization roles', 'Record organization audit events and expose health and metrics'],
      workflow: ['Authenticate', 'Issue Tokens', 'Authorize Role', 'Audit Action'],
      stack: [{ label: 'API', items: ['Go', 'Echo', 'OpenAPI'] }, { label: 'Identity', items: ['JWT', 'Opaque refresh tokens', 'RBAC'] }, { label: 'Storage', items: ['MongoDB', 'Audit logs'] }],
      limitations: ['Production mode requires independently configured SMTP, secure secrets and restricted CORS origins.', 'The development mailer writes invitation and reset URLs to logs and must not be used as production delivery.'],
      media: [],
    },
  },
  {
    id: 'pipeline', name: 'Go CI/CD Pipeline', badge: 'Project', status: 'repository',
    description: 'Build, test and delivery workflows for a Go application using OpenShift Pipelines and Argo CD.',
    tags: ['Go', 'Tekton', 'OpenShift', 'Argo CD'],
    links: [{ label: 'GitHub', href: 'https://github.com/AryanSharma9917/GO-CI-CD' }],
    details: {
      overview: 'A reference workflow for building, testing and delivering a Go web application through OpenShift Pipelines and Argo CD.',
      problem: 'A deployable service needs repeatable source checkout, tests, image creation and GitOps synchronization rather than manual cluster steps.',
      solution: 'Tekton/OpenShift Pipeline resources clone the repository, run Go tests and build an image, while an Argo CD application manages delivery into the target namespace.',
      capabilities: ['Build and test the Go web application locally', 'Create OpenShift Pipeline tasks and workspaces', 'Build and push an image to the OpenShift registry', 'Sync deployment resources through Argo CD'],
      workflow: ['Source', 'Go Test', 'Build Image', 'Argo CD Sync'],
      stack: [{ label: 'Application', items: ['Go', 'Container image'] }, { label: 'Delivery', items: ['Tekton', 'OpenShift Pipelines', 'Argo CD'] }],
      limitations: ['The README documents a specific OpenShift setup and manual operator prerequisites rather than a hosted reusable pipeline service.', 'README screenshot links currently point to files that are no longer present in the repository, so only the conceptual portfolio preview is shown.'],
      media: [],
    },
  },
  {
    id: 'servicesync', name: 'ServiceSync', badge: 'Project', status: 'repository',
    description: 'Declarative microservice version coordination without relying on Git submodules.',
    tags: ['Python', 'Git', 'YAML'],
    links: [{ label: 'GitHub', href: 'https://github.com/AryanSharma9917/ServiceSync' }],
    details: {
      overview: 'A compact Python tool for describing which Git refs make up a named platform release across multiple microservices.',
      problem: 'A platform release needs a readable record of component versions without coupling every service through Git submodules.',
      solution: 'YAML configuration maps component aliases to repositories and pins their refs inside platform-version files that the CLI can describe.',
      capabilities: ['Define platform components and Git repository aliases', 'Pin service refs for a platform version in YAML', 'Describe one platform version or a minor-version family'],
      workflow: ['Define Services', 'Pin Git Refs', 'Version Platform'],
      stack: [{ label: 'Core', items: ['Python 3', 'YAML', 'Git/libgit2'] }],
      limitations: ['The repository documentation explicitly remains a work in progress.', 'GitHub reports the repository as non-fork and recent indexed history is attributed to Aryan Sharma; broader origin or contribution context is not documented in the README.'],
      media: [],
    },
  },
];
