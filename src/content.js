export const site = {
  name: "Neural AI Computing",
  legal: "Neural AI Computing LLC",
  email: "admin@neuralaicomputing.com",
  location: "Irving, Texas",
  url: "https://www.neuralaicomputing.com",
  partner: {
    name: "LCS Prime",
    url: "https://www.lcsprime.com",
  },
};

export const nav = [
  { to: "/capabilities", label: "Capabilities" },
  { to: "/technologies", label: "Technologies" },
  { to: "/industries", label: "Industries" },
  { to: "/staffing", label: "Staffing" },
  { to: "/company", label: "Company" },
];

export const practices = [
  {
    num: "01",
    title: "Consulting",
    text: "Strategy, architecture, security, cloud, data, and infrastructure. We start from the estate you already have and write a plan your own team can follow.",
    to: "/capabilities#strategy",
  },
  {
    num: "02",
    title: "Product development",
    text: "Software built to be owned by the client: services, web products, device-connected systems, and the operational pieces required to run them.",
    to: "/capabilities#product-development",
  },
  {
    num: "03",
    title: "IT staffing",
    text: "When a program needs more people, we staff the role against the work, not against a generic job title.",
    to: "/staffing",
  },
];

export const capabilities = [
  {
    slug: "strategy",
    num: "01",
    title: "IT strategy and advisory",
    summary: "What to change, and in what order.",
    body: "Many technology estates are a stack of decisions made under deadline. We replace that with a written picture: what is running, what it costs to keep, where the risk actually sits, and which changes are worth doing in the next year. The work is short on purpose. A roadmap that cannot be started is not a roadmap.",
    outcomes: [
      "A landscape of systems, owners, and dependencies",
      "A frank gap and risk review",
      "A prioritized twelve-month plan",
      "Budget ranges and vendor options, with the reasoning attached",
      "A briefing your leadership team can sit through",
    ],
  },
  {
    slug: "product-development",
    num: "02",
    title: "Product development",
    summary: "Software your team can run after we leave.",
    body: "Product development is a core practice, not a side offer. We take a product from the problem through a releasable system: the interface people use, the services behind it, the data it keeps, and the way it is deployed. Some of this software is customer-facing. Some of it is an internal platform. The standard is the same. When the engagement ends, your team should be able to change it without calling us for every line.",
    outcomes: [
      "A scoped problem, not a feature wish list",
      "An architecture that names the language for each part of the system",
      "Working software in C++, Go, Java, Python, or TypeScript, chosen for the job",
      "Tests, build instructions, and a written description of the boundaries",
      "An agreed support period after release, with the terms written into the engagement",
    ],
  },
  {
    slug: "cloud",
    num: "03",
    title: "Cloud migration and management",
    summary: "A sequenced move onto AWS, Azure, or Google Cloud.",
    body: "Moving to the cloud is valuable when it is sequenced. We assess what should move, what should stay, and what should be retired. Cutover is planned around the business calendar. After the move, we look at the configuration that drives cost: idle resources, storage class, and rights that are broader than the job requires. Ongoing management is available as a retainer when you want it. It is not bundled in by default.",
    outcomes: [
      "A readiness assessment of the current estate",
      "A migration sequence and rollback position",
      "A managed cutover",
      "Cost and access review after the move",
      "Optional retained management",
    ],
  },
  {
    slug: "security",
    num: "04",
    title: "Cybersecurity and compliance",
    summary: "The risks that matter for your size and your data.",
    body: "We identify the exposures that are real for your size and your data, then close those first. Policy is written so staff can follow it. Where a customer or regulator expects a framework, we help you prepare. Preparation is not the same thing as a certification. If you need an auditor, we will say so and we will not pretend to be one.",
    outcomes: [
      "A risk assessment and a prioritized remediation list",
      "Policy and procedure your staff can use",
      "Identity, endpoint, and vulnerability work",
      "Support preparing for SOC 2, HIPAA, or ISO 27001",
    ],
  },
  {
    slug: "network",
    num: "05",
    title: "Network and infrastructure",
    summary: "The network the applications depend on.",
    body: "Application work fails on a weak network more often than teams expect. We design and implement local and wide-area networks, wireless, identity-aware access, and the server or cloud footing those networks connect to. Procurement is part of the work when you want a single party to specify the hardware and stand it up.",
    outcomes: [
      "A current-state assessment of the network",
      "A design with capacity and failure considered",
      "Vendor specification and, when asked, procurement",
      "Installation and documented configuration",
      "A handover your operations staff can run",
    ],
  },
  {
    slug: "data",
    num: "06",
    title: "Data and analytics",
    summary: "Reporting that matches the systems of record.",
    body: "Most organizations already have the data. It is split across applications that do not agree with each other. We map sources, model the records that matter, and build the path into a warehouse or an operational store. Dashboards come after the definitions are stable. We would rather ship five numbers everyone trusts than a wall of charts nobody opens.",
    outcomes: [
      "A source map and a set of agreed definitions",
      "A warehouse or operational store designed for the questions you ask",
      "Pipelines with failure you can see",
      "Reporting in the tool your staff already uses, when that tool is fit",
      "Training and written handover",
    ],
  },
  {
    slug: "iot",
    num: "07",
    title: "IoT and sensor systems",
    summary: "From the sensor to someone who can act.",
    body: "A sensor is useful when the reading arrives, is trusted, and changes a decision. We work the full path: device integration, connectivity, edge buffering, ingestion, storage, and the operational view. Protocol choice follows the site. MQTT, OPC UA, Modbus, HTTPS, and in some places BLE or LoRaWAN, depending on power, distance, and what is already installed. C++ is common close to the device. Go is common in the gateway and the ingestion service. We do not bridge a plant or building network to the public internet as a shortcut. Segmentation is part of the design.",
    outcomes: [
      "A device and sensor inventory, including what should not be connected",
      "A connectivity design for the site you actually have",
      "Edge buffering for networks that drop",
      "Ingestion, storage, and an operational view of the telemetry",
      "Device identity that can be rotated",
    ],
  },
  {
    slug: "transformation",
    num: "08",
    title: "Digital transformation",
    summary: "One workflow, changed until it holds.",
    body: "Transformation projects fail when everything is declared in scope. We pick the workflow that is actually expensive, replace or integrate the systems behind it, and leave the rest alone until that change is stable. The work draws on the other practices: strategy to choose the sequence, product development where a tool must be built, and cloud and data where the estate needs them.",
    outcomes: [
      "A sequence that names what will not change yet",
      "Integration with the systems people already rely on",
      "A rollout that operations can absorb",
      "Training and documentation",
      "A decision point before the next wave starts",
    ],
  },
  {
    slug: "staffing",
    num: "09",
    title: "IT staffing",
    summary: "Engineers placed against a written role.",
    body: "Some programs need a person for a defined stretch of work: a C++ engineer, a Go service engineer, an IoT integrator, a cloud or data engineer, or a security engineer. We write the role against the stack. Sourcing is handled with our staffing partner. Terms are written down before anyone starts.",
    outcomes: [
      "A role written against the program, including the stack",
      "Candidate review with the people doing the technical work",
      "Placement through our staffing partner",
      "A written start, rate, and end",
      "One conversation for the client, not two competing processes",
    ],
  },
];

export const technologyGroups = [
  "All",
  "Languages",
  "Cloud",
  "Data",
  "Security",
  "Infrastructure",
  "IoT",
  "Delivery",
  "Specialized",
  "Applied AI",
];

export const technologies = [
  {
    slug: "cpp",
    group: "Languages",
    name: "C++",
    featured: false,
    headline: "When the hardware sets the terms.",
    paragraphs: [
      "C++ is the right language when the constraint is physical: a device, a data path that moves a lot of bytes, a simulation, or a native component that other services call. We write modern C++, with C++17 as the floor and C++20 where the toolchain the client can actually build with will support it. Older standards stay when a codebase is pinned and a rewrite would be theater.",
      "Engagements cover the design of the boundary, not only the inner loop. A C++ core often sits behind a stable API that Go, Python, or Java calls. That split is deliberate. The hard part stays in C++. The rest of the product stays in a language the broader team can change. Build files, tests, and sanitizer runs in debug builds are part of the delivery, so the next engineer is not reconstructing the project from a README that was never written.",
      "We use C++ in product development and next to IoT devices. We do not reach for it to build an ordinary web form.",
    ],
    applies: [
      "Device-side applications and native components",
      "High-throughput parsers, transforms, and data paths",
      "Simulation and numerical code that has to be explicit about memory and time",
      "Libraries consumed by services written in Go, Python, or Java",
      "Build, test, and handover a team can reproduce",
    ],
    stack: ["C++17", "C++20", "CMake", "GoogleTest", "ASan", "UBSan", "gRPC"],
  },
  {
    slug: "golang",
    group: "Languages",
    name: "Go",
    featured: false,
    headline: "Services and tools that stay readable.",
    paragraphs: [
      "Go is the default when the work is a network service, an API, a gateway, or a tool the operations team will run. The language rewards a small dependency set and a deployment story that is one binary. That matters on a cloud VM, in a container, and on a small machine sitting next to a rack of sensors.",
      "For IoT, a typical shape is a Go service that speaks MQTT or HTTP, checks the payload, batches it, and writes it to a store. For product development, Go holds the service boundary while a TypeScript interface or a C++ library does the work it is better at. Concurrency is used where it earns its place, with cancellation wired through from the start so a slow dependency does not pile up work.",
      "We will recommend a different language when Go is a poor fit. A rich web interface is not a Go program. A latency-critical inner loop often should not be one either.",
    ],
    applies: [
      "HTTP and gRPC services",
      "Ingestion gateways for devices and third-party APIs",
      "Command-line tools for the platform team",
      "Workers that move data between cloud services",
      "Operationally simple deployments",
    ],
    stack: ["Go", "net/http", "gRPC", "MQTT", "PostgreSQL", "Docker"],
  },
  {
    slug: "iot-sensors",
    group: "IoT",
    name: "IoT sensors",
    featured: false,
    headline: "From the sensor to a decision.",
    paragraphs: [
      "Sensor work fails in the gaps: a device that cannot rejoin the network, a reading with no unit, a gateway that drops an hour of data when the uplink blips, a dashboard that shows a number nobody is responsible for. We design the path as one system. The sensor, the transport, the edge, the ingestion service, the store, and the person who acts.",
      "Protocol choice is a site decision. MQTT is a common default for new telemetry. OPC UA and Modbus show up because plants and buildings already speak them. HTTPS is right when the device can afford it and the volume is modest. BLE and LoRaWAN come up for power and distance. We do not arrive with a single radio already chosen.",
      "C++ is typical close to the device and in components that have to be careful with memory. Go is typical in the gateway and the cloud ingestion tier. Time-series data then joins the analytics practice, where it becomes an operational view rather than a research file. Security is not a later phase. Each device has an identity, the network is segmented, and a plant or clinical network is not opened to the internet to make a demo easier.",
    ],
    applies: [
      "Sensor and gateway integration",
      "Protocol selection for the site, including MQTT, OPC UA, Modbus, BLE, and LoRaWAN",
      "Edge buffering and store-and-forward",
      "Telemetry pipelines into an operational store",
      "Device identity, segmentation, and a supportable configuration",
    ],
    stack: ["MQTT", "OPC UA", "Modbus", "BLE", "LoRaWAN", "C++", "Go", "PostgreSQL"],
  },
  {
    slug: "python",
    group: "Languages",
    name: "Python",
    featured: false,
    headline: "Data work, automation, and the glue between systems.",
    paragraphs: [
      "Python is the practical language for data engineering, operational automation, and the notebooks and services that sit next to machine-learning models. A Python service often prepares data for a Go or Java system, or stays in place when the work is a pipeline rather than a long-running API.",
      "We treat Python as production software when it is on the critical path: pinned dependencies, tests, and a deployment that is not a laptop. Where a service needs stricter operational limits, we move that part to Go or Java and keep Python where it is earning its keep.",
    ],
    applies: [
      "Data transforms and pipeline tasks",
      "Automation of repetitive operational work",
      "Integration around machine-learning models",
    ],
    stack: ["Python", "PostgreSQL", "dbt"],
  },
  {
    slug: "java",
    group: "Languages",
    name: "Java",
    featured: false,
    headline: "Services for estates already on Java.",
    paragraphs: [
      "A large share of business systems already run on Java. Replacing them for fashion is a poor use of money. We extend and integrate those estates, and we build new services in Java when the operating team, the libraries, or the neighboring systems are JVM-based.",
      "The work is ordinary and demanding in the ways that matter: clear module boundaries, transactions that match the business record, and builds your pipeline can run. Kotlin is an option in a codebase that has already chosen it. We will not introduce it as a surprise.",
    ],
    applies: [
      "Services in an existing Java estate",
      "Integrations with ERP, billing, and line-of-business systems",
      "APIs that have to sit beside older JVM applications",
    ],
    stack: ["Java", "Kotlin", "PostgreSQL", "Gradle", "Maven"],
  },
  {
    slug: "typescript",
    group: "Languages",
    name: "TypeScript and React",
    featured: false,
    headline: "Interfaces people use every day.",
    paragraphs: [
      "When a product has a web interface, we build it in TypeScript and React. That includes internal tools and customer-facing applications. The interface is part of the product, so it is specified with the same care as the service behind it: the tasks a person repeats, the states when data is missing, and the way errors are explained.",
      "This site is itself a React application, built to run on Cloudflare Workers. Client work follows the same idea. A front end you can build, deploy, and hand to your own team.",
    ],
    applies: [
      "Customer-facing web products",
      "Internal operational tools",
      "Interfaces on top of Go, Java, or Python services",
    ],
    stack: ["TypeScript", "React", "HTML", "CSS"],
  },
  {
    slug: "cloud-platforms",
    group: "Cloud",
    name: "Cloud platforms",
    featured: true,
    headline: "AWS, Azure, Google Cloud, and Cloudflare.",
    paragraphs: [
      "We work on Amazon Web Services, Microsoft Azure, and Google Cloud, and we use Cloudflare where it is the right edge: DNS, application delivery, and Workers. The platform follows the estate you have and the constraint of the new system.",
      "Migration, new builds, and day-two changes are all in scope. Identity, network boundaries, and cost are designed with the application, not patched on after the demo works.",
    ],
    applies: [
      "New workloads and migrations",
      "Identity and network boundaries in the cloud account",
      "Edge delivery, including Cloudflare Workers",
      "A cost review that names the resources creating the bill",
    ],
    stack: ["AWS", "Microsoft Azure", "Google Cloud", "Cloudflare"],
  },
  {
    slug: "delivery",
    group: "Delivery",
    name: "Containers and delivery",
    featured: false,
    headline: "Containers and pipelines, when they earn their place.",
    paragraphs: [
      "Containers are useful when you need a repeatable deploy. Kubernetes is useful when you are running enough services that the orchestration earns its operational cost. Terraform is how we keep cloud infrastructure reviewable. None of the three is a default trophy. A single Go binary on a managed service is often the better system.",
      "Where a client is already on Kubernetes, we work inside that cluster instead of proposing a second one. Pipelines are written so a merge produces an artifact your team can deploy without us in the room.",
    ],
    applies: [
      "Container builds for services that benefit from them",
      "Kubernetes work inside an existing cluster",
      "Infrastructure as code for the cloud resources the system uses",
      "Pipelines your team can run",
    ],
    stack: ["Docker", "Kubernetes", "Terraform", "CI pipelines"],
  },
  {
    slug: "data-platforms",
    group: "Data",
    name: "Data platforms",
    featured: true,
    headline: "PostgreSQL first. A warehouse when the questions need one.",
    paragraphs: [
      "PostgreSQL is the operational database we reach for unless the estate already has a standard. Warehousing moves to Snowflake or BigQuery when the volume and the number of sources justify a separate analytical store. dbt is how transforms stay reviewed. Power BI and Tableau are used when that is the tool the organization already reads. We do not install a second BI stack to suit ourselves.",
      "Sensor telemetry and product events follow the same rule. Land them in a store that matches the query, keep the definitions written down, and make pipeline failure visible.",
    ],
    applies: [
      "Operational databases",
      "Warehouses and modeled transforms",
      "Business reporting",
      "Telemetry stores for IoT programs",
    ],
    stack: ["PostgreSQL", "Snowflake", "BigQuery", "dbt", "Power BI", "Tableau"],
  },
  {
    slug: "security-engineering",
    group: "Security",
    name: "Security engineering",
    featured: true,
    headline: "Identity, endpoints, and the configuration behind them.",
    paragraphs: [
      "Tools do not create a security program. We implement the ones that match the risk: identity platforms such as Okta or the identity service already in your cloud, endpoint protection such as CrowdStrike or Microsoft Defender, and vulnerability scanning such as Nessus where a scan is the right instrument. Cloudflare sits at the edge when that is part of the design.",
      "The delivery is the configuration, the ownership, and the run-up to a framework review. We prepare organizations for SOC 2, HIPAA, and ISO 27001. An external auditor still has to issue the opinion.",
    ],
    applies: [
      "Identity and access",
      "Endpoint and vulnerability work",
      "Edge controls",
      "Evidence gathering for a framework review",
    ],
    stack: ["Okta", "Microsoft Defender", "CrowdStrike", "Nessus", "Cloudflare"],
  },
  {
    slug: "applied-ai",
    group: "Applied AI",
    name: "Applied AI",
    featured: false,
    headline: "A model inside a workflow someone already owns.",
    paragraphs: [
      "We implement AI where it removes a specific piece of work: classification, extraction, search over your own documents, or a draft a person still reviews. The model is not the product. The product is the workflow, the permission model, and the path when the model is wrong.",
      "This is applied engineering on vendor models and ordinary software. A pilot stays a pilot until the workflow, the permissions, and the fallback are in place.",
    ],
    applies: [
      "Document extraction and internal search",
      "Assisted workflows with a human review step",
      "Evaluation of vendor models against your data, with the data boundary written down",
    ],
    stack: ["Python", "TypeScript", "Vendor model APIs", "PostgreSQL"],
  },
  { slug: "csharp", group: "Languages", name: "C# and .NET", featured: false, headline: "Services for estates already on .NET.", paragraphs: [], applies: [], stack: [] },
  { slug: "sql", group: "Languages", name: "SQL", featured: false, headline: "The schema and the queries the record depends on.", paragraphs: [], applies: [], stack: [] },
  { slug: "aws", group: "Cloud", name: "Amazon Web Services", featured: false, headline: "Workloads, identity, and cost on AWS.", paragraphs: [], applies: [], stack: [] },
  { slug: "azure", group: "Cloud", name: "Microsoft Azure", featured: false, headline: "Workloads, identity, and cost on Azure.", paragraphs: [], applies: [], stack: [] },
  { slug: "google-cloud", group: "Cloud", name: "Google Cloud", featured: false, headline: "Workloads and data on Google Cloud.", paragraphs: [], applies: [], stack: [] },
  { slug: "cloudflare", group: "Cloud", name: "Cloudflare", featured: false, headline: "DNS, delivery, and Workers at the edge.", paragraphs: [], applies: [], stack: [] },
  { slug: "postgresql", group: "Data", name: "PostgreSQL", featured: false, headline: "The operational database we reach for first.", paragraphs: [], applies: [], stack: [] },
  { slug: "sql-server", group: "Data", name: "SQL Server", featured: false, headline: "Estates that already keep the record there.", paragraphs: [], applies: [], stack: [] },
  { slug: "snowflake", group: "Data", name: "Snowflake", featured: false, headline: "A warehouse when the questions need one.", paragraphs: [], applies: [], stack: [] },
  { slug: "bigquery", group: "Data", name: "BigQuery", featured: false, headline: "Analysis when the volume belongs on Google Cloud.", paragraphs: [], applies: [], stack: [] },
  { slug: "power-bi", group: "Data", name: "Power BI", featured: false, headline: "Reporting in the tool the business already opens.", paragraphs: [], applies: [], stack: [] },
  { slug: "identity", group: "Security", name: "Identity and access", featured: false, headline: "Okta, Entra ID, and access sized to the job.", paragraphs: [], applies: [], stack: [] },
  { slug: "endpoint", group: "Security", name: "Endpoint protection", featured: false, headline: "Defender or CrowdStrike, configured and owned.", paragraphs: [], applies: [], stack: [] },
  { slug: "linux", group: "Infrastructure", name: "Linux", featured: false, headline: "Servers and the services that run on them.", paragraphs: [], applies: [], stack: [] },
  { slug: "windows-server", group: "Infrastructure", name: "Windows Server", featured: false, headline: "The Windows estate, kept supportable.", paragraphs: [], applies: [], stack: [] },
  { slug: "vmware", group: "Infrastructure", name: "VMware", featured: false, headline: "Virtual machines the applications already sit on.", paragraphs: [], applies: [], stack: [] },
  { slug: "directory", group: "Infrastructure", name: "Active Directory and Entra ID", featured: false, headline: "The directory the rest of the access depends on.", paragraphs: [], applies: [], stack: [] },
  { slug: "mqtt", group: "IoT", name: "MQTT", featured: false, headline: "Telemetry for sites that can use a broker.", paragraphs: [], applies: [], stack: [] },
  { slug: "opc-ua", group: "IoT", name: "OPC UA", featured: false, headline: "Plant systems that already speak it.", paragraphs: [], applies: [], stack: [] },
  { slug: "modbus", group: "IoT", name: "Modbus", featured: false, headline: "Equipment that is already on the wire.", paragraphs: [], applies: [], stack: [] },
  { slug: "docker", group: "Delivery", name: "Docker", featured: false, headline: "A repeatable build, when a container earns it.", paragraphs: [], applies: [], stack: [] },
  { slug: "kubernetes", group: "Delivery", name: "Kubernetes", featured: false, headline: "Work inside a cluster you already run.", paragraphs: [], applies: [], stack: [] },
  { slug: "terraform", group: "Delivery", name: "Terraform", featured: false, headline: "Cloud resources written down and reviewed.", paragraphs: [], applies: [], stack: [] },
  { slug: "actimize", group: "Specialized", name: "NICE Actimize", featured: false, headline: "Financial crime, fraud, and AML.", paragraphs: [], applies: [], stack: [] },
  { slug: "axiom", group: "Specialized", name: "Axiom", featured: false, headline: "Regulatory reporting on an AxiomSL estate.", paragraphs: [], applies: [], stack: [] },
  { slug: "murex", group: "Specialized", name: "Murex", featured: false, headline: "Trading and risk systems.", paragraphs: [], applies: [], stack: [] },
  { slug: "calypso", group: "Specialized", name: "Calypso", featured: false, headline: "Treasury and capital-markets platforms.", paragraphs: [], applies: [], stack: [] },
  { slug: "swift", group: "Specialized", name: "SWIFT", featured: false, headline: "Payment messaging an institution already runs.", paragraphs: [], applies: [], stack: [] },
  { slug: "aveva-pi", group: "Specialized", name: "AVEVA PI", featured: false, headline: "The plant historian and the data leaving it.", paragraphs: [], applies: [], stack: [] },
];

export const industries = [
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "Careful systems around the clinical record.",
    work: [
      "Integration between the applications staff already use",
      "Access control and audit logging",
      "Infrastructure and workflow changes prepared with HIPAA in mind",
      "Telemetry from facilities and devices, kept on the correct network",
    ],
    tech: ["Identity", "Network segmentation", "IoT sensors", "Data integration", "HIPAA preparation"],
  },
  {
    slug: "financial-services",
    title: "Financial services",
    summary:
      "Access, audit, and the systems around them.",
    work: [
      "Hardening of existing platforms rather than a rewrite for its own sake",
      "Auditability of access and change",
      "Data pipelines whose definitions survive a review",
      "Support preparing for a SOC 2 or ISO 27001 examination",
    ],
    tech: ["Java", "Cloud platforms", "Security engineering", "PostgreSQL", "Data platforms"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing and industrial operations",
    summary:
      "The plant floor, connected without opening it up.",
    work: [
      "Sensor and machine telemetry into an operational view",
      "OT and IT separation, with a designed path for the data that must cross",
      "Edge buffering for sites with unreliable uplinks",
      "Systems software in C++ and Go where the line or the gateway requires it",
    ],
    tech: ["IoT sensors", "OPC UA", "Modbus", "C++", "Go", "Network design"],
  },
  {
    slug: "professional-services",
    title: "Professional services",
    summary:
      "Tools a firm can run its own delivery on.",
    work: [
      "Practice systems, client records, and document workflow",
      "Internal tools built around a repeated job",
      "Cloud moves off aging file servers and mail-plus-spreadsheet operations",
      "Additional engineers for a delivery spike",
    ],
    tech: ["TypeScript", "Microsoft Azure", "Identity", "Product development"],
  },
  {
    slug: "retail",
    title: "Retail and commerce",
    summary:
      "Inventory, orders, and the path between them.",
    work: [
      "Integration between commerce, inventory, and finance",
      "Operational reporting that matches the transaction system",
      "Identity and endpoint posture for a distributed staff",
      "Product work where an off-the-shelf tool does not cover the workflow",
    ],
    tech: ["Integrations", "Data platforms", "Cloud", "TypeScript"],
  },
  {
    slug: "education",
    title: "Education and research",
    summary:
      "Dependable systems on a real budget.",
    work: [
      "Campus and department infrastructure",
      "Identity and cost control on cloud accounts",
      "Data platforms for operational reporting",
      "Internal tools for the work a department repeats",
    ],
    tech: ["Cloud platforms", "Identity", "Python", "Data platforms"],
  },
];

export const steps = [
  {
    num: "01",
    title: "Conversation",
    text: "You describe the problem. We say whether we are the right firm, and what the first useful step is.",
  },
  {
    num: "02",
    title: "Assessment",
    text: "We look at the systems, the constraint, and what done means. Recommendations come after that, including a recommendation to leave something alone.",
  },
  {
    num: "03",
    title: "Build or staff",
    text: "Product and engineering work proceeds with the people who scoped it. If the program needs more hands, those roles are staffed against the same scope.",
  },
  {
    num: "04",
    title: "Handover",
    text: "You receive the system, the documentation, and a walkthrough. Support after release is agreed in writing. The aim is ownership, not a permanent dependency.",
  },
];

export const principles = [
  {
    title: "Diagnose before prescribing",
    text: "A tool shows up after the problem is understood.",
  },
  {
    title: "The same people stay on the work",
    text: "The people who start the work stay on it.",
  },
  {
    title: "Write it down",
    text: "Decisions are written down as the work proceeds.",
  },
  {
    title: "Leave you able to run it",
    text: "You leave able to run what we built.",
  },
];

export const topics = [
  "IT strategy and advisory",
  "Product development",
  "Cloud migration and management",
  "Cybersecurity and compliance",
  "Network and infrastructure",
  "Data and analytics",
  "IoT and sensor systems",
  "C++ or Go engineering",
  "Digital transformation",
  "IT staffing",
  "Not sure yet",
];

export const topicAliases = {
  cpp: "C++ or Go engineering",
  golang: "C++ or Go engineering",
  go: "C++ or Go engineering",
  iot: "IoT and sensor systems",
  "iot-sensors": "IoT and sensor systems",
  staffing: "IT staffing",
  product: "Product development",
  "product-development": "Product development",
  cloud: "Cloud migration and management",
  "cloud-platforms": "Cloud migration and management",
  delivery: "Cloud migration and management",
  security: "Cybersecurity and compliance",
  "security-engineering": "Cybersecurity and compliance",
  data: "Data and analytics",
  "data-platforms": "Data and analytics",
  python: "Data and analytics",
  strategy: "IT strategy and advisory",
  network: "Network and infrastructure",
  transformation: "Digital transformation",
  java: "Product development",
  typescript: "Product development",
  "applied-ai": "Product development",
  csharp: "Product development",
  dotnet: "Product development",
  sql: "Data and analytics",
  postgresql: "Data and analytics",
  "sql-server": "Data and analytics",
  snowflake: "Data and analytics",
  bigquery: "Data and analytics",
  "power-bi": "Data and analytics",
  aws: "Cloud migration and management",
  azure: "Cloud migration and management",
  "google-cloud": "Cloud migration and management",
  cloudflare: "Cloud migration and management",
  identity: "Cybersecurity and compliance",
  endpoint: "Cybersecurity and compliance",
  linux: "Network and infrastructure",
  "windows-server": "Network and infrastructure",
  vmware: "Network and infrastructure",
  directory: "Network and infrastructure",
  mqtt: "IoT and sensor systems",
  "opc-ua": "IoT and sensor systems",
  modbus: "IoT and sensor systems",
  docker: "Cloud migration and management",
  kubernetes: "Cloud migration and management",
  terraform: "Cloud migration and management",
  actimize: "Cybersecurity and compliance",
  axiom: "Data and analytics",
  murex: "Data and analytics",
  calypso: "Data and analytics",
  swift: "Network and infrastructure",
  "aveva-pi": "IoT and sensor systems",
};

export const pageMeta = {
  "/": {
    title: "Neural AI Computing — IT Consulting and Product Development",
    description:
      "Neural AI Computing is an IT consulting firm in Irving, Texas. Strategy, cloud, security, networks, data, and the product work that follows.",
  },
  "/capabilities": {
    title: "Capabilities — Neural AI Computing",
    description:
      "IT strategy, cloud, security, networks, data, product development, and the related engineering work.",
  },
  "/technologies": {
    title: "Technologies — Neural AI Computing",
    description:
      "The languages, cloud, data, security, infrastructure, and specialized platforms we implement.",
  },
  "/industries": {
    title: "Industries — Neural AI Computing",
    description:
      "Sectors the practice is built for, including healthcare, financial services, manufacturing, professional services, retail, and education.",
  },
  "/staffing": {
    title: "IT Staffing — Neural AI Computing",
    description:
      "Additional engineers and specialists, placed against a written role for a scoped technology program.",
  },
  "/company": {
    title: "Company — Neural AI Computing",
    description:
      "Neural AI Computing LLC is an IT consulting firm in Irving, Texas.",
  },
  "/contact": {
    title: "Contact — Neural AI Computing",
    description:
      "Write to Neural AI Computing in Irving, Texas. We reply within one business day.",
  },
};
