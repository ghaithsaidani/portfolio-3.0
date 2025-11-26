import {
    AmanaInsurances,
    CloudWebAppBuilder,
    CloudWebAppBuilderArchitecture,
    ConfledisInternship,
    HRIndustries,
    InfogeranceInternship,
    Kubepilot,
    KubepilotDemo,
    KubePilotDetailedArchitecture,
    MicroservicesProvision,
    MicroservicesProvisionAzureArchitecture,
    MicroservicesProvisionCICD,
    MicroservicesProvisionClusterArchitecture,
    MondeEnBouche,
    PDS,
    PDSDetailedArchitectureDiagram,
    Portfolio2,
    VotingAppNodeRed,
    VotingAppNodeRedSequenceDiagram,
    XsustainInternship
} from "@/assets";
import type {ProjectPageProps} from "@/types/project.ts";
import {HeroVideoDialog} from "@/components/ui/hero-video-dialog.tsx";

export const singleProjects: ProjectPageProps[] = [
    {
        badge: "🎓 End of Study Internship",
        title: "KubePilot",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: Kubepilot,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        KubePilot is a centralized DevOps platform designed to simplify the management of Kubernetes
                        resources, automate CI/CD pipelines with Tekton, and provide real-time observability for
                        clusters—all from a modern web interface.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Drag-and-drop Tekton CI/CD pipeline builder</li>
                        <li>Real-time observability dashboards</li>
                        <li>Integrated Vault & Keycloak security</li>
                        <li>Multi-cluster compatibility</li>
                    </ul>
                ),
            },
            {
                id: "technologies",
                title: "🛠️ Technologies Used",
                content: (
                    <table>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Tools</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Frontend</td>
                            <td>React, TypeScript, Tailwind, Shadcn</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Backend</td>
                            <td>SpringBoot, PostgreSQL, Redis</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>DevOps</td>
                            <td>Kubernetes, Tekton, Helm, Vault, Keycloak</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Observability</td>
                            <td>Prometheus, Loki</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Security</td>
                            <td>Vault, Keycloak</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Design</td>
                            <td>Figma, Adobe After Effects</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "architecture",
                title: "🏗️ Architecture",
                content: (
                    <article>
                        <p>
                            KubePilot follows a modular microservices design powered by Go,
                            React, PostgreSQL, and Kubernetes operators.
                        </p>
                        <img src={KubePilotDetailedArchitecture} alt={"kubepilot detailed architecture"}/>

                    </article>

                ),
            },
            {
                id: "demo",
                title: "🎥 Demo Video",
                content: (
                    <HeroVideoDialog
                        animationStyle="from-center"
                        videoSrc={KubepilotDemo}
                        thumbnailSrc={Kubepilot}
                        thumbnailAlt="Kubepilot Demo Video"
                    />
                )
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        Full source code and documentation are available here:{" "}
                        <a
                            href="https://gitlab.com/kube-pilot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            KubePilot Repository
                        </a>
                    </p>
                ),
            },
        ]
    },
    {
        badge: "♾️ DevOps Project",
        title: "Automated Microservices Deployment",
        description:
            "Automated deployment pipeline and cloud infrastructure provisioning for microservices running on Kubernetes.",
        image: MicroservicesProvision,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        Designed and implemented a fully automated delivery workflow for
                        containerized microservices, enabling fast, reliable, and repeatable
                        deployments across Kubernetes environments.
                    </p>
                ),
            },
            {
                id: "responsibilities",
                title: "🧩 Key Contributions",
                content: (
                    <ul>
                        <li>Provisioned Azure infrastructure using Terraform and remote state</li>
                        <li>
                            Built CI/CD pipelines with Jenkins, Helm, and ArgoCD,
                            reducing deployment time by 50%
                        </li>
                        <li>Containerized Spring Boot microservices using Docker</li>
                        <li>Implemented secure secrets management with HashiCorp Vault</li>
                        <li>Configured monitoring with Prometheus and Grafana</li>
                    </ul>
                ),
            },
            {
                id: "technologies",
                title: "🛠️ Technologies Used",
                content: (
                    <table>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Tools</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Infrastructure</td>
                            <td>Terraform, Azure, Kubernetes</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>CI/CD</td>
                            <td>Jenkins, ArgoCD, Helm</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Application</td>
                            <td>Spring Boot, Docker</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Security</td>
                            <td>Vault</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Observability</td>
                            <td>Prometheus, Grafana</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "infrastructure",
                title: "☁️ Azure Infrastructure Architecture",
                content: (
                    <article>
                        <p>
                            Terraform provisions Azure infrastructure including the resource
                            group, virtual network, AKS cluster, container registry, and
                            storage—while Vault securely manages credentials and cloud access.
                        </p>
                        <img
                            src={MicroservicesProvisionAzureArchitecture}
                            alt="Azure Infrastructure Architecture"
                        />
                    </article>
                ),
            },
            {
                id: "cluster",
                title: "☸️ Kubernetes Cluster Architecture",
                content: (
                    <article>
                        <p>
                            The AKS cluster hosts microservices and supporting components such
                            as Vault, Jenkins, ArgoCD, Prometheus, and Grafana. Ingress routing
                            is handled by NGINX to expose internal and external services
                            securely.
                        </p>
                        <img
                            src={MicroservicesProvisionClusterArchitecture}
                            alt="Kubernetes Cluster Architecture"
                        />
                    </article>
                ),
            },
            {
                id: "cicd",
                title: "🔁 CI/CD Pipeline Flow",
                content: (
                    <article>
                        <p>
                            Code pushed to GitLab triggers a Jenkins pipeline that retrieves
                            secrets from Vault, builds and tags Docker images, pushes them to
                            ACR, and instructs ArgoCD to synchronize deployments on AKS—
                            achieving fully automated delivery.
                        </p>
                        <img src={MicroservicesProvisionCICD} alt="CI/CD Pipeline Diagram"/>
                    </article>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        The complete infrastructure, Helm charts, pipelines, and deployment logic
                        are available here:{" "}
                        <a
                            href="https://gitlab.com/microservices-social-media"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Automated Microservices Deployment Repository
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        badge: "🎯 Speciality Project",
        title: "Predictive Maintenance System",
        description:
            "A predictive maintenance platform that processes real-time IoT vehicle telemetry to forecast failures early. The system includes a Python simulator emitting live sensor data via MQTT, a Spring Boot backend for analysis and REST/WebSocket APIs, and a ReactJS dashboard for real-time visualization.",
        image: PDS,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        The Predictive Maintenance System monitors IoT-enabled vehicle sensors
                        and detects early signs of mechanical failure. It combines simulated
                        telemetry, backend analytics, and live dashboards to support
                        data-driven maintenance decisions.
                    </p>
                ),
            },
            {
                id: "problem",
                title: "⚙️ Problem & Motivation",
                content: (
                    <p>
                        Traditional vehicle maintenance relies on fixed schedules or manual
                        inspection, often leading to unexpected breakdowns. The goal of this
                        project is to build an automated system capable of analyzing
                        continuous telemetry data and predicting issues before they escalate.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Python simulator generating realistic IoT sensor data</li>
                        <li>Real-time data streaming via MQTT</li>
                        <li>Spring Boot backend providing REST and WebSocket APIs</li>
                        <li>Automatic anomaly detection and maintenance prediction logic</li>
                        <li>ReactJS dashboard visualizing live telemetry and alerts</li>
                        <li>Swagger-documented API</li>
                        <li>MySQL storage for historical data analysis</li>
                    </ul>
                ),
            },
            {
                id: "technologies",
                title: "🛠️ Technologies Used",
                content: (
                    <table>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Tools</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Frontend</td>
                            <td>ReactJS, TypeScript, Tailwind</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Backend</td>
                            <td>Spring Boot, Swagger, WebSocket</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Data & Simulation</td>
                            <td>Python, MQTT, Paho MQTT Client</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Database</td>
                            <td>MySQL</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "architecture",
                title: "🏗️ Architecture",
                content: (
                    <article>
                        <p>
                            The system architecture consists of a Python-based IoT simulator,
                            an MQTT broker for streaming, a Spring Boot backend for processing
                            and storing data, and a ReactJS dashboard for visualization. The
                            backend exposes both REST endpoints and WebSocket channels for
                            real-time updates.
                        </p>
                        <img src={PDSDetailedArchitectureDiagram} alt={"PDS detailed architecture diagram"}/>
                    </article>
                ),
            },
            {
                id: "workflow",
                title: "🔄 System Workflow",
                content: (
                    <ol>
                        <li>Python simulator publishes vehicle telemetry to MQTT topics.</li>
                        <li>Spring Boot service consumes and analyzes the data.</li>
                        <li>Detections, predictions, and metrics are stored in MySQL.</li>
                        <li>Dashboard receives live updates through WebSocket events.</li>
                        <li>Users view anomalies, trends, and maintenance alerts.</li>
                    </ol>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        Backend source code and API documentation are available on GitHub:{" "}
                        <a
                            href="https://github.com/ghaithsaidani/predictive-maintenance-api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Predictive Maintenance Repository
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        badge: "☁️ Cloud Project",
        title: "Cloud Web App Builder",
        description:
            "An automated AWS infrastructure builder that provisions scalable, production-ready web applications using Terraform, EC2 Auto Scaling, RDS, and an Application Load Balancer.",
        image: CloudWebAppBuilder,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        Cloud Web App Builder is an automated solution that deploys a complete AWS web application
                        environment. Using Terraform, the system provisions VPC networking, public and private subnets,
                        EC2 instances created from a custom AMI, an Auto Scaling Group, an Application Load Balancer,
                        and a managed RDS MySQL database. Designed for reproducibility and scalability, the project
                        ensures consistent cloud deployments with minimal manual effort.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Infrastructure-as-Code fully managed with Terraform</li>
                        <li>Custom EC2 AMI automatically provisioned through Cloud9</li>
                        <li>Auto Scaling Group for high availability and elasticity</li>
                        <li>Application Load Balancer distributing traffic across EC2 instances</li>
                        <li>Private RDS MySQL instance secured within isolated subnets</li>
                        <li>Multi-tier VPC architecture with public & private subnets</li>
                        <li>Reusable modules enabling fast new-environment creation</li>
                    </ul>
                ),
            },
            {
                id: "architecture",
                title: "🏗️ Architecture",
                content: (
                    <article>
                        <p>
                            The infrastructure is deployed across multiple subnets within a
                            VPC. Public subnets host the load balancer and Cloud9 environment,
                            while application instances inside an Auto Scaling Group run in
                            private subnets. A private RDS instance ensures secure and isolated
                            data storage. Terraform manages all dependencies and provisioning steps.
                        </p>
                        <img
                            src={CloudWebAppBuilderArchitecture}
                            alt="Cloud Web App Builder AWS Architecture"
                        />
                    </article>
                ),
            },
            {
                id: "deployment",
                title: "🚀 Deployment Workflow",
                content: (
                    <ol>
                        <li>Initialize Cloud9 to configure AWS CLI and Terraform</li>
                        <li>Build and register a custom EC2 AMI with required application files</li>
                        <li>Provision full infrastructure using Terraform modules</li>
                        <li>Auto Scaling Group launches EC2 instances using the AMI</li>
                        <li>Application Load Balancer routes traffic to healthy EC2 targets</li>
                        <li>Instances communicate securely with the MySQL RDS database</li>
                    </ol>
                ),
            },
            {
                id: "demo",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        Explore the full Terraform configuration, reusable modules, and deployment resources on
                        GitHub:{" "}
                        <a className="text-primary underline"
                           href="https://github.com/ghaithsaidani/cloud-web-app-builder" target="_blank">
                            Cloud Web App Builder Repository
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        badge: "🌐 IoT Project",
        title: "Voting App with Node-RED",
        description: "An IoT-based voting platform using Node-RED and MQTT for real-time vote casting and visualization.",
        image: VotingAppNodeRed,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        The Voting App is a real-time voting platform built with Node-RED for orchestrating IoT flows,
                        FastAPI as the backend server, and an MQTT broker to handle message passing. Users can cast
                        votes
                        via a Node-RED dashboard, with results updated instantly on the chart visualization.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Real-time vote casting and results visualization</li>
                        <li>Node-RED flows for event handling and vote processing</li>
                        <li>MQTT-based messaging for low-latency communication</li>
                        <li>Flask backend for vote management and history logging</li>
                        <li>Dashboard interface to submit votes and clear results</li>
                    </ul>
                ),
            },
            {
                id: "technologies",
                title: "🛠️ Technologies Used",
                content: (
                    <table>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Tools</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Frontend</td>
                            <td>Node-RED Dashboard</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Backend</td>
                            <td>Flask (Python)</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Messaging</td>
                            <td>MQTT Broker</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>IoT Flow Orchestration</td>
                            <td>Node-RED</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "architecture",
                title: "🏗️ Architecture",
                content: (
                    <article>
                        <p>
                            The architecture consists of a Node-RED dashboard for the frontend, Node-RED backend for
                            handling
                            flows, an MQTT broker for message passing, and a FastAPI server managing vote processing,
                            history,
                            and publishing results back to the broker. The flows ensure real-time updates of vote counts
                            and charts.
                        </p>
                    </article>
                ),
            },
            {
                id: "workflow",
                title: "🔄 System Workflow",
                content: (
                    <article>
                        <p>
                            The voting workflow includes three main processes: initial load, voting, and clearing
                            results.
                            Each interaction triggers MQTT messages routed between Node-RED and the FastAPI server,
                            updating
                            the dashboard in real time.
                        </p>
                        <img src={VotingAppNodeRedSequenceDiagram} alt="Voting App Node-RED Sequence Diagram"/>
                    </article>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        Full source code, Node-RED flows, and backend API are available on GitHub:{" "}
                        <a
                            href="https://github.com/ghaithsaidani/voting-app-node-red"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Voting App with Node-RED Repository
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        badge: "💼 Freelance Project",
        title: "HR Industries",
        description:
            "A fully responsive corporate website built with Angular, featuring dynamic service pages, EmailJS contact automation, and seamless Netlify deployment.",
        image: HRIndustries,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        HR Industries is a complete corporate website developed as a freelance project.
                        The site presents the company's industrial services, showcases certifications,
                        and provides a clear communication channel through EmailJS-powered forms.
                        The project emphasizes performance, clean UI, SEO, and a scalable architecture
                        built using Angular.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Responsive Angular front-end optimized for performance</li>
                        <li>Dynamic sections for services, portfolio, and certifications</li>
                        <li>EmailJS integration for serverless contact form handling</li>
                        <li>SEO-friendly meta tags and dynamic page titles</li>
                        <li>Deployed on Netlify with continuous deployment</li>
                        <li>Modern UI with smooth animations and clean layout</li>
                    </ul>
                ),
            },
            {
                id: "technologies",
                title: "🛠️ Technologies Used",
                content: (
                    <table>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Tools</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Frontend</td>
                            <td>Angular</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Form Handling</td>
                            <td>EmailJS</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Hosting / Deployment</td>
                            <td>Netlify (CDN, automatic deploys)</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "workflow",
                title: "🚀 Development Workflow",
                content: (
                    <ol>
                        <li>Gathered requirements and designed the UI layout</li>
                        <li>Implemented Angular components and responsive styling</li>
                        <li>Integrated EmailJS for automated email delivery</li>
                        <li>Configured SEO, routing, and dynamic content</li>
                        <li>Deployed the website using Netlify</li>
                    </ol>
                ),
            },
            {
                id: "demo",
                title: "🌐 Live Website",
                content: (
                    <p>
                        Visit the official HR Industries{" "}
                        <a
                            className="text-primary underline"
                            href="https://hr-industrie.com/"
                            target="_blank"
                        >
                            Website
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        badge: "🌞 Summer Internship",
        title: "Smart Menu",
        description:
            "A complete digital restaurant ecosystem providing online menus, real-time ordering, revenue analytics, and full management tools for restaurant owners and administrators.",
        image: XsustainInternship,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        Smart Menu is a full-featured digital solution that modernizes restaurant
                        operations. The platform allows customers to browse a digital menu,
                        place orders from their phones, and track their order status in real time.
                        For managers, it provides a powerful dashboard to manage products,
                        agents, restaurant settings, and financial analytics.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Interactive digital menu with category and type filtering</li>
                        <li>Real-time ordering system directly from the customer's device</li>
                        <li>Order tracking with live status updates</li>
                        <li>Manager dashboard for product management (add/edit/delete)</li>
                        <li>Sales analytics: daily, weekly, and monthly revenue reports</li>
                        <li>Order history and detailed transaction insights</li>
                        <li>Agent management with performance tracking</li>
                        <li>Multi-restaurant support with domain assignment for each establishment</li>
                    </ul>
                ),
            },
            {
                id: "technologies",
                title: "🛠️ Technologies Used",
                content: (
                    <table>
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Tools</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Frontend</td>
                            <td>ReactJS</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Backend</td>
                            <td>Node.js, Express.js</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Database</td>
                            <td>MongoDB</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>CI/CD</td>
                            <td>Jenkins</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Infrastructure</td>
                            <td>Azure, Terraform</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Version Control</td>
                            <td>GitHub</td>
                        </tr>

                        </tbody>
                    </table>
                ),
            },
            {
                id: "architecture",
                title: "🏗️ Platform Architecture",
                content: (
                    <article>
                        <p>
                            The solution is built with a modular architecture separating the
                            customer interface, manager dashboard, and backend services.
                            Each restaurant instance is configured independently, with the
                            administrator managing global restaurant registration and domain assignment.
                        </p>
                        <p>
                            The public deployment repository centralizes the infrastructure
                            and CI/CD workflow, while frontend and backend codebases are
                            maintained privately for security and commercial reasons.
                        </p>
                    </article>
                ),
            },
            {
                id: "workflow",
                title: "🚀 Role & Responsibilities",
                content: (
                    <ul>
                        <li>Developed the full platform (customer UI, manager dashboard, backend APIs)</li>
                        <li>Implemented real-time order tracking with WebSockets</li>
                        <li>Designed multi-restaurant domain-based architecture</li>
                        <li>Built the analytics and revenue reporting system</li>
                        <li>Managed cloud deployment and infrastructure setup</li>
                        <li>Maintained the public deployment repository for production rollout</li>
                    </ul>
                ),
            },
            {
                id: "confidentiality",
                title: "🔒 Confidentiality Notice",
                content: (
                    <p>
                        The full source code for the Smart Menu platform—including frontend and backend
                        applications—is private and cannot be publicly shared due to confidentiality
                        and commercial protection. Only the deployment configuration done by me is publicly available
                        because it is done on my own cloud resources.
                    </p>
                ),
            },
            {
                id: "repo",
                title: "📦 Public Deployment Repository",
                content: (
                    <p>
                        A dedicated repository contains the deployment configuration for the platform.
                        <br/>
                        <a
                            className="text-primary underline"
                            href="https://github.com/ghaithsaidani/smart-menu-config"
                            target="_blank"
                        >
                            Smart Menu Deployment Repo
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        badge: "End of Year Project",
        title: "Le Monde En Bouche",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: MondeEnBouche,
        sections: []
    },
    {
        badge: "Personal Project",
        title: "Portfolio 2.0",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: Portfolio2,
        sections: []
    },
    {
        badge: "Freelance Project",
        title: "Amana Insurance Management",
        //link: "https://github.com/ghaithsaidani/portfolio-2.0",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: AmanaInsurances,
        sections: []
    },
    {
        badge: "Summer Internship",
        title: "InnERP",
        //link: "https://github.com/ghaithsaidani/portfolio-2.0",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: ConfledisInternship,
        sections: []
    },
    {
        badge: "End Of Study Internship (Bachelor)",
        title: "Hotel Management System",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: InfogeranceInternship,
        sections: []
    },

]