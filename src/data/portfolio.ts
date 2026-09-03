export const PORTFOLIO_OWNER = "Nihanth Kumar Reddy Kethireddy"
export const GITHUB_USERNAME = "nihanthkethireddy"
export const GITHUB_REPOSITORY = "portfolio"
export const GITHUB_REPOSITORY_URL = "https://github.com/nihanthkethireddy/portfolio"
export const GITHUB_PAGES_URL = "https://nihanthkethireddy.github.io/portfolio/"
export const PROFILE_IMAGE_PATH = "/assets/nihanth-profile.jpg"
export const RESUME_URL = "https://1drv.ms/w/c/854460d8613affa5/IQD9jpWMbDOESLS-1u5tcNcUAS9Td-dD-6p38OiZWb6ofS8?e=RVGutY"

export const HERO = {
  title: PORTFOLIO_OWNER,
  subtitle: 'AI Engineer | Agentic AI Platforms | Full Stack Engineering',
  blurb:
    "I build governed AI platforms that help teams create, secure, deploy, observe, and consume agents, MCP servers, tools, and models. My work spans Python and FastAPI services, LangGraph orchestration, secure enterprise integrations, React interfaces, and cloud delivery.",
  label: '9 years across AI platforms and enterprise software',
}

export const ABOUT = {
  paragraphs: [
    "I am an AI-focused software engineer with 9 years of experience building enterprise applications across fintech, e-commerce, transportation, and public-sector environments.",
    "My current focus is agentic AI platform engineering: designing the infrastructure and user journeys teams need to create, register, govern, version, deploy, discover, and securely consume AI agents and Model Context Protocol servers.",
    "I enjoy working across boundaries, from Python backend services and distributed workflows to React experiences, authorization, data persistence, observability, and production delivery.",
  ],
  focuses: [
    'Agent and MCP Platforms',
    'Python and Backend Systems',
    'Secure Enterprise Integrations',
    'Full Stack Product Delivery',
  ],
}

export type ExperienceItem = {
  company: string
  role: string
  dates: string
  projectLabel: string
  overview: string
  contributions: string[]
  tech: string[]
  logo: string
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'American Express',
    role: 'AI Engineer / Senior Full Stack Engineer, AI Platform',
    dates: 'July 2023 to Present',
    projectLabel: 'Enterprise Agent and MCP Management Platform',
    overview:
      'An enterprise self-service platform enabling internal teams to discover, create, register, configure, govern, version, deploy, and consume AI agents, MCP servers, tools, resources, and foundation models.',
    contributions: [
      'Owns multiple platform capabilities across backend and frontend development, including Okta scope configuration, the Assembler workflow, agent management, MCP management, decommissioning, and shared React components.',
      'Built Python and FastAPI services for agent and MCP registration, configuration validation, lifecycle transitions, version management, integrations, and access workflows.',
      'Designed the Assembler as a deterministic five-node LangGraph workflow that validates, normalizes, generates, and publishes governed repositories.',
      'Added Cassandra-backed LangGraph checkpointing and integrated shared graph callbacks for observability and tracing.',
      'Implemented Okta OAuth 2.0 integration with scope-based authorization and entitlement validation.',
    ],
    tech: [
      'Python', 'FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Cassandra', 'Okta', 'LangGraph', 'Jinja2', 'GitHub'
    ],
    logo: '/assets/company-logos/american-express.svg',
  },
  {
    company: 'Bank of America',
    role: 'Technology Lead',
    dates: 'March 2023 to July 2023',
    projectLabel: 'Internal AI Engineering Knowledge Search',
    overview:
      'An internal AI-powered application that helped engineers search across Confluence, GitHub, and internal documentation.',
    contributions: [
      'Built React user experiences integrating AI search into engineering workflows.',
      'Developed Python ingestion and embedding scripts, and used vector retrieval with Pinecone and pgvector.',
      'Containerized services and deployed them with Docker and AWS ECS.'
    ],
    tech: ['React', 'Python', 'LangChain', 'Pinecone', 'pgvector', 'Docker', 'AWS ECS'],
    logo: '/assets/company-logos/bank-of-america.svg',
  },
  {
    company: 'Finland Transport Infrastructure Agency',
    role: 'Product Developer',
    dates: 'October 2020 to August 2021',
    projectLabel: 'Transport and Geospatial Data Platform',
    overview:
      'A public-sector platform for visualizing and analyzing large transport, infrastructure, spatial, and geospatial datasets.',
    contributions: [
      'Built React interfaces and optimized data-loading for high-volume spatial data.',
      'Worked with Java Spring Boot microservices and PostgreSQL/PostGIS for spatial workloads.'
    ],
    tech: ['React', 'Java Spring Boot', 'PostgreSQL', 'PostGIS', 'Python', 'Node.js'],
    logo: '/assets/company-logos/finland-transport.svg',
  },
  {
    company: 'Cars.com',
    role: 'Full Stack Developer',
    dates: 'December 2017 to October 2020',
    projectLabel: 'Consumer Automotive Platform Modernization',
    overview:
      'Modernized the consumer automotive platform by migrating Ruby on Rails views to React and Next.js with server-side rendering.',
    contributions: [
      'Rewrote legacy views as modular React components and built GraphQL APIs for vehicle filtering and inventory.',
      'Integrated PostgreSQL, MobX, and created automated performance scripts with Python and JMeter.'
    ],
    tech: ['React', 'Next.js', 'GraphQL', 'PostgreSQL', 'MobX', 'Python'],
    logo: '/assets/company-logos/cars.svg',
  },
  {
    company: 'Shop Stevie',
    role: 'Full Stack Developer',
    dates: 'July 2016 to November 2017',
    projectLabel: 'Commerce and Mobile Platform Modernization',
    overview:
      'Supported migration from Java Spring Boot microservices to Node.js while maintaining legacy compatibility.',
    contributions: [
      'Built responsive React interfaces and Java REST APIs during phased migration.',
      'Migrated an Android application to React Native and created reusable components.'
    ],
    tech: ['Node.js', 'Java', 'React', 'React Native', 'AWS SQS'],
    logo: '/assets/company-logos/shop-stevie.svg',
  },
]

export const PROJECTS = [
  {
    id: 'enterprise-agent-mcp',
    title: 'Enterprise Agent and MCP Management Platform',
    role: 'Professional — American Express',
    problem: 'Enable teams to create, govern, version, deploy, and consume agents and MCP servers.',
    contributions: 'Platform capabilities across frontend and backend, Assembler orchestration, Okta scope-based authorization, version promotion and decommissioning.',
    tech: ['FastAPI','React','LangGraph','Okta','PostgreSQL','Cassandra']
  },
  {
    id: 'ai-knowledge-search',
    title: 'Internal AI Engineering Knowledge Search',
    role: 'Professional — Bank of America',
    problem: 'Search across Confluence, GitHub, and internal docs with AI-enhanced retrieval.',
    contributions: 'Frontend AI search UX, ingestion and embedding pipelines, vector retrieval with Pinecone and pgvector.',
    tech: ['React','Python','Pinecone','pgvector']
  },
  {
    id: 'transport-geospatial',
    title: 'Transport and Geospatial Data Platform',
    role: 'Professional — Finland Transport Infrastructure Agency',
    problem: 'Visualize and analyze large geospatial datasets for public-sector planning.',
    contributions: 'React UI, spatial APIs, PostGIS optimization.',
    tech: ['React','PostGIS','Java']
  },
  {
    id: 'consumer-automotive',
    title: 'Consumer Automotive Platform Modernization',
    role: 'Professional — Cars.com',
    problem: 'Migrate legacy views to modern React + Next.js stack for better performance and SEO.',
    contributions: 'Modular React components, GraphQL APIs, migration strategy.',
    tech: ['React','Next.js','GraphQL']
  },
  {
    id: 'commerce-mobile',
    title: 'Commerce and Mobile Platform Modernization',
    role: 'Professional — Shop Stevie',
    problem: 'Migrate services and migrate mobile app to React Native.',
    contributions: 'Node.js APIs, React Native components, migration support.',
    tech: ['Node.js','React Native','Java']
  }
]

export const SKILLS = {
  Programming: ['Python','TypeScript','JavaScript','Java','Swift','Kotlin','HTML5','CSS3'],
  AI: ['OpenAI','AWS Bedrock','BGE','Retrieval-Augmented Generation','RAG pipelines','function calling','prompt engineering','Mem0'],
  Orchestration: ['LangChain','LangGraph','AutoGen','AWS Strands','Model Context Protocol','MCP'],
  Backend: ['FastAPI','Node.js','Express','Django','Flask','Java Spring Boot','GraphQL','REST APIs','OAuth 2.0','OIDC','JWT'],
  Frontend: ['React','Next.js','React Native','Angular','Redux','MobX','Vite','Tailwind CSS','Storybook'],
  Databases: ['PostgreSQL','pgvector','Cassandra','MongoDB','MySQL','SQL Server','DB2','Redis','Firebase','Pinecone','Weaviate','Milvus','PostGIS','Alembic'],
  Cloud: ['AWS Lambda','EC2','S3','SQS','ECS','Fargate','SageMaker','Azure','GCP Vertex AI'],
  Infra: ['Docker','Kubernetes','OpenShift'],
  CI: ['Jenkins','CircleCI','Git','GitHub','Bitbucket'],
  Tools: ['Poetry','uv','Jinja2','MLflow','Weights & Biases','TruLens','Guardrails AI','Dynatrace','New Relic']
}

export const EDUCATION = {
  degree: 'Master of Science in Computer Science',
  school: 'Texas A&M University',
  date: 'May 2022',
  coursework: ['Data Structures','Machine Learning','Advanced Programming','Software Engineering','Database Management Systems']
}

export const CONTACT = {
  email: 'nihanth.kethireddy@gmail.com',
  phone: '(469) 514-4532',
  linkedin: 'https://www.linkedin.com/in/nihanth-kethireddy/',
  github: 'https://github.com/nihanthkethireddy'
}
