export const PORTFOLIO_OWNER = 'Nihanth Kumar Reddy Kethireddy'
export const GITHUB_REPOSITORY_URL = 'https://github.com/nihanthkethireddy/portfolio'
export const GITHUB_PAGES_URL = 'https://nihanthkethireddy.github.io/portfolio/'
export const PROFILE_IMAGE_PATH = 'assets/nihanth-profile.jpg'
export const RESUME_URL = 'https://1drv.ms/w/c/854460d8613affa5/IQD9jpWMbDOESLS-1u5tcNcUAS9Td-dD-6p38OiZWb6ofS8?e=RVGutY'

export const HERO = {
  title: PORTFOLIO_OWNER,
  subtitle: 'AI Engineer | Agentic AI Platforms | Enterprise Software',
  blurb:
    'I design and deliver governed AI platforms that help enterprise teams create, register, secure, deploy, observe, and consume AI agents and MCP servers. My current work spans Python and FastAPI services, LangGraph orchestration, secure enterprise access, React product experiences, and production delivery.',
  label: '9 years across AI platforms and enterprise software',
}

export const ABOUT = {
  paragraphs: [
    'I am an AI-focused software engineer with 9 years of experience building enterprise software across fintech, e-commerce, transportation, and public-sector environments.',
    'My current work is focused on agentic AI platform engineering: designing the infrastructure and product flows teams need to create, govern, version, deploy, and securely consume AI agents and Model Context Protocol servers.',
  ],
  focuses: [
    { title: 'AI Platform Engineering', text: 'Governed lifecycle management for agents, tools, MCP servers, and model access.', icon: 'Network' },
    { title: 'Python & Backend Systems', text: 'Production APIs, workflows, persistence, integrations, and operational reliability.', icon: 'Braces' },
    { title: 'Secure Enterprise Access', text: 'Scope-based authorization, entitlement validation, and constrained runtime permissions.', icon: 'ShieldCheck' },
    { title: 'Full Stack Delivery', text: 'From backend services to product interfaces and cloud-ready implementation.', icon: 'Layout' },
  ],
}

export type ExperienceItem = { company: string; role: string; dates: string; projectLabel: string; overview: string; contributions: string[]; tech: string[]; logo: string; accent: string }
export const EXPERIENCES: ExperienceItem[] = [
  { company: 'American Express', role: 'AI Engineer / Senior Full Stack Engineer, AI Platform', dates: 'July 2023 — Present', projectLabel: 'Enterprise Agent and MCP Management Platform', accent: '#75e6ff', logo: 'assets/company-logos/american-express.webp', overview: 'An enterprise self-service platform where provider teams publish AI capabilities and consumer teams discover and invoke them through governed access across draft, development, and production lifecycles.', contributions: [
    'Own multiple backend and frontend capabilities, including Okta scope configuration, the Assembler workflow, agent and MCP management, decommissioning, and shared React components.',
    'Built Python and FastAPI services for registration, configuration validation, lifecycle transitions, version management, integrations, and access workflows.',
    'Designed the Assembler as a deterministic five-node LangGraph workflow—not an LLM decision-maker—to validate and normalize configuration, render governed repositories with Jinja2, perform Git and GitHub operations, verify results, and clean up.',
    'Added Cassandra-backed LangGraph checkpointing and shared callbacks for tracing node execution, latency, failures, and workflow outcomes.',
    'Implemented Okta OAuth 2.0 scope-based authorization, entitlement-group validation, and runtime permission checks. Scope mappings limit permissions, constrain the runtime tool surface, and reduce authorization risk.',
    'Built version decommissioning with consumer identification, reusable email templates, and automated notifications approximately 30 and 7 days before retirement.',
    'Developed React configuration and lifecycle interfaces plus reusable components for a consistent cross-team platform experience.',
    'Support governed promotion of agent and MCP versions through draft, development, and active or production states.'
  ], tech: ['Python', 'FastAPI', 'React', 'LangGraph', 'Okta', 'OAuth 2.0', 'PostgreSQL', 'pgvector', 'Cassandra', 'Alembic', 'Jinja2', 'GitHub'] },
  { company: 'Bank of America', role: 'Technology Lead', dates: 'March 2023 — July 2023', projectLabel: 'Internal AI Engineering Knowledge Search', accent: '#ff5b69', logo: 'assets/company-logos/bank-of-america.avif', overview: 'An internal AI-powered application that helped engineers search across Confluence, GitHub, and internal documentation.', contributions: ['Developed responsive React experiences and integrated backend APIs for real-time AI-assisted responses.', 'Used Python and LangChain for ingestion, preprocessing, chunking, embedding, and semantic search with Pinecone and pgvector.', 'Refined chunking and reduced redundant document processing to improve retrieval behavior.', 'Built lightweight ingestion and search services, then containerized and deployed them with Docker and AWS ECS.', 'Added logging, validation, and operational checks to improve response reliability.'], tech: ['React', 'Python', 'LangChain', 'Pinecone', 'pgvector', 'Docker', 'AWS ECS'] },
  { company: 'Ramboll', role: 'Product Developer', dates: 'October 2020 — August 2021', projectLabel: 'Brutus', accent: '#7ce8bd', logo: 'assets/company-logos/ramboll.png', overview: 'Brutus is a transport and geospatial data platform for visualizing and analyzing large infrastructure datasets used in public-sector and engineering workflows.', contributions: ['Built React interfaces and optimized loading and rendering patterns for high-volume spatial data.', 'Developed REST capabilities with Java Spring Boot microservices and Node.js transport-data APIs.', 'Built Django and Flask services for analytics and data processing, separated from latency-sensitive application APIs.', 'Used PostgreSQL and PostGIS, optimizing spatial queries and API response performance.', 'Implemented OAuth 2.0 and JWT access controls with validation, error handling, logging, and performance tracking.'], tech: ['React', 'Java Spring Boot', 'Node.js', 'Python', 'Django', 'Flask', 'PostgreSQL', 'PostGIS'] },
  { company: 'Cars.com', role: 'Full Stack Developer', dates: 'December 2017 — October 2020', projectLabel: 'Consumer Automotive Platform Modernization', accent: '#a993ff', logo: 'assets/company-logos/cars.webp', overview: 'A modernization of the consumer automotive platform from Ruby on Rails frontend views to React and Next.js with server-side rendering.', contributions: ['Rebuilt legacy views and routing as modular React components.', 'Developed GraphQL APIs for vehicle filtering, sorting, inventory lookup, and content experiences.', 'Integrated PostgreSQL migrations and MobX state across inventory and article modules.', 'Created Python and JMeter performance tests and configured Webpack and Babel for bundle optimization.', 'Integrated Prismic CMS, AWS SQS background processing, and server-rendered metadata and canonical links for SEO.'], tech: ['React', 'Next.js', 'GraphQL', 'PostgreSQL', 'MobX', 'Python', 'JMeter', 'AWS SQS'] },
  { company: 'Shop Stevie', role: 'Full Stack Developer', dates: 'July 2016 — November 2017', projectLabel: 'Commerce and Mobile Platform Modernization', accent: '#ffb85c', logo: 'assets/company-logos/shop-stevie.jpg', overview: 'A phased commerce-platform migration from Java Spring Boot microservices to Node.js while maintaining legacy compatibility.', contributions: ['Developed Java REST APIs throughout the migration and built responsive React interfaces.', 'Built invoicing, order-management, and billing workflows with Ruby on Rails and JSP.', 'Used AWS SQS for background job queuing and scalable processing.', 'Migrated a legacy Android application to React Native with reusable order-tracking and delivery-status components.', 'Implemented client-side form validation and server-side input sanitization.'], tech: ['Node.js', 'Java', 'Spring Boot', 'React', 'React Native', 'Ruby on Rails', 'AWS SQS'] },
]

export const LIFECYCLE = ['Discover or define use case', 'Create or import configuration', 'Validate configuration', 'Generate repository through Assembler', 'Register and configure capabilities', 'Request scopes and entitlements', 'Promote: Draft → Development', 'Test, observe, and govern', 'Promote: Active / Production', 'Discover and consume securely', 'Version and decommission']
export const PROJECTS = [
  { id: 'enterprise-agent-mcp', number: '01', title: 'Enterprise Agent & MCP Management Platform', role: 'Professional experience · American Express', problem: 'Give provider and consumer teams one governed path through the full capability lifecycle.', contributions: 'I own platform capabilities across FastAPI and React, deterministic Assembler orchestration, scope-based access, lifecycle promotion, and decommissioning.', tech: ['FastAPI', 'React', 'LangGraph', 'Okta', 'PostgreSQL', 'Cassandra'], featured: true },
  { id: 'ai-knowledge-search', number: '02', title: 'Internal AI Engineering Knowledge Search', role: 'Professional experience · Bank of America', problem: 'Help engineers search distributed knowledge across Confluence, GitHub, and internal documentation.', contributions: 'I built the search interface, API integrations, ingestion and embedding pipeline, and vector retrieval layer.', tech: ['React', 'Python', 'LangChain', 'Pinecone', 'pgvector'] },
  { id: 'transport-geospatial', number: '03', title: 'Brutus', role: 'Professional experience · Ramboll', problem: 'Make large transport and geospatial datasets usable for visualization and analysis in engineering workflows.', contributions: 'I delivered React interfaces, spatial APIs, processing services, and PostGIS query improvements for the Brutus platform.', tech: ['React', 'PostGIS', 'Java', 'Python'] },
  { id: 'consumer-automotive', number: '04', title: 'Consumer Automotive Platform Modernization', role: 'Professional experience · Cars.com', problem: 'Move a mature consumer platform from legacy views to a modern, server-rendered product experience.', contributions: 'I built modular React views, GraphQL APIs, state architecture, content integrations, and performance tests.', tech: ['React', 'Next.js', 'GraphQL', 'MobX'] },
  { id: 'commerce-mobile', number: '05', title: 'Commerce & Mobile Platform Modernization', role: 'Professional experience · Shop Stevie', problem: 'Evolve commerce services and mobile delivery while preserving legacy compatibility.', contributions: 'I supported the service migration and delivered responsive web, commerce, and React Native workflows.', tech: ['Node.js', 'React Native', 'Java', 'AWS SQS'] },
]

export const SKILLS = {
  Programming: ['Python', 'TypeScript', 'JavaScript ES6+', 'Java', 'Swift', 'Kotlin', 'HTML5', 'CSS3'],
  'AI & Generative AI': ['OpenAI', 'AWS Bedrock', 'BGE', 'Retrieval-Augmented Generation', 'RAG pipelines', 'Function calling', 'Prompt engineering', 'Mem0'],
  'Agents & Orchestration': ['LangChain', 'LangGraph', 'AutoGen', 'AWS Strands', 'Model Context Protocol', 'MCP'],
  'Backend & APIs': ['FastAPI', 'Node.js', 'Express', 'Django', 'Flask', 'Java Spring Boot', 'GraphQL', 'REST APIs', 'OAuth 2.0', 'OIDC', 'JWT'],
  'Frontend & Mobile': ['React', 'Next.js', 'React Native', 'Angular', 'Redux', 'MobX', 'Vite', 'Tailwind CSS', 'Storybook'],
  'Data & Vector Search': ['PostgreSQL', 'pgvector', 'Cassandra', 'MongoDB', 'MySQL', 'SQL Server', 'DB2', 'Redis', 'Firebase', 'Pinecone', 'Weaviate', 'Milvus', 'PostGIS', 'Alembic'],
  'Cloud & Platforms': ['AWS Lambda', 'EC2', 'S3', 'SQS', 'ECS', 'Fargate', 'SageMaker', 'Azure', 'GCP Vertex AI'],
  Containers: ['Docker', 'Kubernetes', 'OpenShift'],
  'CI/CD & Source': ['Jenkins', 'CircleCI', 'Git', 'GitHub', 'Bitbucket'],
  'Python Tooling': ['Poetry', 'uv', 'Jinja2'],
  'AI Quality & Observability': ['MLflow', 'Weights & Biases', 'TruLens', 'Guardrails AI', 'Dynatrace', 'New Relic', 'Hotjar'],
  'Testing & Design': ['Jest', 'Cypress', 'Playwright', 'Postman', 'Insomnia', 'JMeter', 'Figma', 'Zeplin'],
} as const
export const EDUCATION = { degree: 'Master of Science in Computer Science', school: 'Texas A&M University', date: 'May 2022', coursework: ['Data Structures', 'Machine Learning', 'Advanced Programming', 'Software Engineering', 'Database Management Systems'] }
export const CONTACT = { email: 'nihanth.kethireddy@gmail.com', phone: '(469) 514-4532', phoneHref: '+14695144532', linkedin: 'https://www.linkedin.com/in/nihanth-kethireddy/', github: 'https://github.com/nihanthkethireddy' }
