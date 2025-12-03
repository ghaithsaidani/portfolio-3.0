import {
    AmanaInsurances,
    CloudWebAppBuilder,
    CloudWebAppBuilderArchitecture,
    ConfledisInternship,
    Homelab,
    HRIndustries,
    InfogeranceInternship,
    InnERPUseCaseDiagram,
    Kubepilot,
    KubepilotDemo,
    KubePilotDetailedArchitecture,
    MicroservicesProvision,
    MicroservicesProvisionAzureArchitecture,
    MicroservicesProvisionCICD,
    MicroservicesProvisionClusterArchitecture,
    MondeEnBouche,
    MondeEnBoucheAzureArchitecture,
    MondeEnBoucheCICDWorkflow,
    PDS,
    PDSDetailedArchitectureDiagram,
    Portfolio1,
    Portfolio2,
    SmartMenuAzureArchitecture,
    SmartMenuKubernetesClusterArchitecture,
    VotingAppNodeRed,
    VotingAppNodeRedSequenceDiagram,
    XsustainInternship
} from "@/assets";
import type {ProjectPageProps} from "@/types/project.ts";
import {HeroVideoDialog} from "@/components/ui/hero-video-dialog.tsx";
import {Badge} from "@/components/ui/badge.tsx";

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
                        <tbody >
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Frontend</td>
                            <td>React, TypeScript, Tailwind, Shadcn</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Backend</td>
                            <td>SpringBoot, PostgreSQL, Redis</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>DevOps</td>
                            <td>Kubernetes, Tekton, Helm, Vault, Keycloak</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Observability</td>
                            <td>Prometheus, Loki</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Security</td>
                            <td>Vault, Keycloak</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Design</td>
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
        badge: "🔧 Personal Project",
        title: "HomeLab — KVM VM Automation & Kubernetes Provisioning",
        description:
            "Automates creation of a 3-node Kubernetes cluster by launching KVM virtual machines with Vagrant and performing full provisioning and configuration with Ansible.",
        image: Homelab,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        This HomeLab project automates the end-to-end setup of a local Kubernetes environment.
                        Vagrant is used to create three KVM virtual machines, then Ansible provisions and configures
                        them
                        into a Kubernetes cluster composed of one master node and two worker nodes. The result is a
                        reproducible, local cluster ideal for testing, learning, and experimenting with cloud-native
                        tooling.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Automated VM creation on KVM using Vagrant</li>
                        <li>Full provisioning and idempotent configuration with Ansible</li>
                        <li>Automatic Kubernetes bootstrap: 1 master + 2 workers</li>
                        <li>Reproducible environment for CI, testing, and learning Kubernetes</li>
                        <li>Simple teardown and rebuild with Vagrant commands</li>
                    </ul>
                ),
            },
            {
                id: "howitworks",
                title: "⚙️ How it works",
                content: (
                    <ol>
                        <li>Run `vagrant up` to create three KVM virtual machines from configured boxes.</li>
                        <li>Vagrant triggers Ansible playbooks as the provisioner.</li>
                        <li>Ansible installs container runtime, configures networking, and bootstraps Kubernetes.</li>
                        <li>The master node initializes the cluster (kubeadm) and generates the join token.</li>
                        <li>Worker nodes join the cluster automatically, producing a ready 3-node Kubernetes
                            environment.
                        </li>
                    </ol>
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
                            <td className={"pl-2"}>VM Orchestration</td>
                            <td>Vagrant, KVM/QEMU</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Provisioning</td>
                            <td>Ansible</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Container Orchestration</td>
                            <td>Kubernetes (kubeadm)</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>OS / Tools</td>
                            <td>Linux, systemd, Docker/containerd</td>
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
                            Architecture: a single hypervisor host runs three KVM virtual machines provisioned by
                            Vagrant.
                            Ansible configures each VM and bootstraps Kubernetes using kubeadm. The cluster topology is:
                        </p>
                        <ul>
                            <li>Master — control plane (API server, controller, scheduler, etcd)</li>
                            <li>Worker-1 — workload node</li>
                            <li>Worker-2 — workload node</li>
                        </ul>
                    </article>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        Full automation scripts and documentation are available on GitHub: {" "}
                        <a
                            href="https://github.com/ghaithsaidani/homelab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Homelab Repository
                        </a>
                    </p>
                ),
            },
        ],
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
                            <td className={"pl-2"}>Infrastructure</td>
                            <td>Terraform, Azure, Kubernetes</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>CI/CD</td>
                            <td>Jenkins, ArgoCD, Helm</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Application</td>
                            <td>Spring Boot, Docker</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Security</td>
                            <td>Vault</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Observability</td>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>ReactJS, TypeScript, Tailwind</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Backend</td>
                            <td>Spring Boot, Swagger, WebSocket</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Data & Simulation</td>
                            <td>Python, MQTT, Paho MQTT Client</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Database</td>
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
                            <td className={"pl-2"}>Cloud</td>
                            <td>AWS, Cloud9</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>DevOps</td>
                            <td>Terraform</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Database</td>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>Node-RED Dashboard</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Backend</td>
                            <td>Flask (Python)</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Messaging</td>
                            <td>MQTT Broker</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>IoT Flow Orchestration</td>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>Angular</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Form Handling</td>
                            <td>EmailJS</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Hosting / Deployment</td>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>ReactJS</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Backend</td>
                            <td>Node.js, Express.js</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Database</td>
                            <td>MongoDB</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>DevOps</td>
                            <td>Jenkins, ArgoCD</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Infrastructure</td>
                            <td>Azure, Terraform</td>
                        </tr>

                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Version Control</td>
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
                        <ol>
                            <li>
                                <h3>Microsoft Azure Infrastructure Architecture</h3>
                                <p>The system architecture is built on Microsoft Azure, providing a scalable and
                                    flexible cloud infrastructure tailored to the application’s needs. Azure Kubernetes
                                    Service (AKS) serves as the core platform, managing container deployments
                                    efficiently with high availability across multiple nodes. Docker images are securely
                                    stored in Azure Container Registry (ACR), enabling version control and smooth
                                    automated deployments. Additionally, a virtual machine hosts monitoring tools like
                                    Prometheus and Grafana, while a dedicated Virtual Network (VNet) and Network
                                    Security Group (NSG) ensure secure traffic management and infrastructure
                                    isolation.</p>
                                <img src={SmartMenuAzureArchitecture}
                                     alt={"Smart Menu Microsoft Azure Infrastructure Architecture"}/>
                            </li>

                            <li>
                                <h3>Kubernetes cluster Architecture</h3>
                                <p>The Kubernetes infrastructure is organized to efficiently support the application and
                                    its associated services. Multiple namespaces are used for modular resource
                                    management, ensuring clarity and separation of concerns.
                                    The <Badge>default</Badge> namespace hosts
                                    the main application pods and exposes services via LoadBalancers or Ingresses.
                                    Additional namespaces manage DevOps tools <Badge>devops-tools</Badge>, SSL/TLS
                                    certificates <Badge>cert-manager</Badge>, and the NGINX Ingress
                                    controller <Badge>ingress-nginx</Badge> to handle routing,
                                    access rules, and load balancing.</p>
                                <img src={SmartMenuKubernetesClusterArchitecture}
                                     alt={"Smart Menu Kubernetes Cluster Architecture"}/>
                            </li>
                        </ol>
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
            /*{
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
            },*/
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
        badge: "🎓 End of Year Project",
        title: "Le Monde En Bouche",
        description:
            "Le Monde En Bouche is a ReactJS static website that presents traditional dishes and recipes. The project features automated provisioning of Azure infrastructure and a fully integrated CI/CD workflow to deploy the website efficiently and securely.",
        image: MondeEnBouche,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        Le Monde En Bouche is a static website built with ReactJS to showcase traditional dishes,
                        recipes, and restaurants. The project focuses on frontend development while automating
                        cloud provisioning and deployment using Azure, Terraform, Docker, and GitHub Actions.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>ReactJS frontend for exploring dishes and recipes</li>
                        <li>Automated Azure infrastructure provisioning with Terraform</li>
                        <li>Dockerized application for consistent deployments</li>
                        <li>CI/CD pipelines with GitHub Actions for automated build and deployment</li>
                        <li>Virtual Machines hosted on Azure with networking and firewall configurations</li>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>ReactJS, Tailwind CSS</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Infrastructure</td>
                            <td>Azure, Terraform, VMs, Virtual Networks</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>CI/CD</td>
                            <td>GitHub Actions</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Containerization</td>
                            <td>Docker</td>
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
                            The project uses a modular architecture with ReactJS for the frontend and Docker containers
                            deployed on Azure Virtual Machines. Terraform automates the creation of the infrastructure,
                            including VMs, Virtual Networks, and firewall rules. CI/CD pipelines built with GitHub
                            Actions
                            automatically deploy the latest changes whenever code is pushed to the repository.
                        </p>
                        <img src={MondeEnBoucheAzureArchitecture}
                             alt="Le Monde En Bouche Azure Infrastructure Diagram"/>
                    </article>
                ),
            },
            {
                id: "cicd",
                title: "🔁 CI/CD Workflow",
                content: (
                    <article>
                        <p>
                            The CI/CD pipeline is fully automated using GitHub Actions. Each commit triggers the
                            build of Docker images, tests the ReactJS application, provisions or updates Azure
                            infrastructure via Terraform, and deploys the application to Azure Virtual Machines.
                        </p>
                        <img src={MondeEnBoucheCICDWorkflow} alt="Le Monde En Bouche CI/CD Diagram"/>
                    </article>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        The complete source code, infrastructure configuration, and CI/CD pipeline are publicly
                        available on GitHub:{" "}
                        <a
                            href="https://github.com/ghaithsaidani/monde-en-bouche-auto-provisioning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Le Monde En Bouche Repository
                        </a>
                    </p>
                ),
            },
        ]
    },
    {
        badge: "🌐 Personal Portfolio",
        title: "Portfolio 2.0",
        description:
            "My personal website to present my skills, background, and projects — designed to be clean, responsive and modern, showcasing my developer journey.",
        image: Portfolio2,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        Portfolio 2.0 is a personal website created to highlight my skills, education, projects and
                        contact information.
                        It acts as a central hub representing my professional profile, combining design, responsiveness
                        and modern front-end practices.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Responsive layout for desktop and mobile devices</li>
                        <li>Clear sections: About Me, Skills, Projects, Contact</li>
                        <li>Easy navigation and smooth scrolling between sections</li>
                        <li>Showcase of projects with links to repositories and live demos</li>
                        <li>Clean design using Tailwind CSS and modern UI conventions</li>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>ReactJS, TypeScript, Tailwind CSS</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Hosting / Deployment</td>
                            <td>Netlify / GitHub Pages</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Form Handling</td>
                            <td>EmailJS</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Version Control</td>
                            <td>GitHub</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "structure",
                title: "🧩 Structure & Organization",
                content: (
                    <p>
                        The portfolio is organized into clear, modular sections (About, Skills, Projects, Contact) to
                        provide a seamless user experience.
                        Code is structured for readability and maintainability, making it easy to add new projects or
                        update content over time.
                    </p>
                ),
            },
            {
                id: "demo",
                title: "🌐 Live Website",
                content: (
                    <p>
                        Visit my official old Portfolio: {" "}
                        <a
                            href="https://ghaithsaidani2.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Website
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        badge: "🏢 Freelance Project",
        title: "Amana Insurance",
        description:
            "A comprehensive insurance management system built for a Libyan insurance agency to improve efficiency, streamline workflow, and ensure reliable uptime.",
        image: AmanaInsurances,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        Amana Insurance is a custom-built management system designed to streamline insurance agency
                        operations.
                        It allows agents to manage policies, clients, and claims efficiently, resulting in a 70%
                        improvement in workflow efficiency.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Comprehensive management of clients, policies, and insurance claims</li>
                        <li>Automated workflow processes to reduce manual work and errors</li>
                        <li>Reliable deployment on a Linux server using Nginx and PM2</li>
                        <li>Secure backend with Node.js, Express, and MySQL</li>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>Angular</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Backend</td>
                            <td>Node.js, Express</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Database</td>
                            <td>MySQL</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Deployment / Server</td>
                            <td>Nginx, PM2, Linux (WHM / CPanel)</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "impact",
                title: "📈 Impact & Outcome",
                content: (
                    <p>
                        The system increased operational efficiency by 70%, reduced errors in insurance management
                        processes, and provided a reliable, maintainable solution for the agency.
                    </p>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        The source code for this project is confidential due to client privacy agreements.
                        The system is deployed on the agency’s private Linux server for internal use.
                    </p>
                ),
            },
        ],
    },
    {
        badge: "💼 Internship Project",
        title: "Confledis Finance Platform",
        description:
            "During my software development internship at Confledis SAS, I contributed to enhancing and deploying a finance web application, improving its reliability, scalability, and user experience.",
        image: ConfledisInternship,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        The Confledis Finance Platform is a web application for financial management.
                        During the internship, I focused on debugging, extending features, and ensuring the system’s
                        stability and scalability.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Contributions",
                content: (
                    <ul>
                        <li>Debugged and extended features in a ReactJS & Django finance app, improving reliability and
                            user retention
                        </li>
                        <li>Containerized and deployed the platform on AWS EC2 using Docker</li>
                        <li>Improved uptime, scalability, and maintainability of the application</li>
                        <li>Collaborated remotely with the team to ensure smooth feature delivery and bug fixes</li>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>ReactJS</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Backend</td>
                            <td>Django, PostgreSQL</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Deployment</td>
                            <td>AWS EC2, Docker</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "diagram",
                title: "📊 Use Case Diagram",
                content: (
                    <article>
                        <p>
                            Although the source code is confidential, here’s a high-level use case diagram showing the
                            system’s main actors and functionalities:
                        </p>
                        <img src={InnERPUseCaseDiagram} alt={"InnERP use case diagram"}/>
                    </article>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        The code is confidential due to the client agreement, but key contributions and deployment work
                        are highlighted above.
                    </p>
                ),
            },
        ],
    },
    {
        badge: "🌐 Personal Portfolio",
        title: "Portfolio 1.0",
        description:
            "The first version of my personal portfolio — a simple and responsive website built to present my background, skills, and early projects.",
        image: Portfolio1,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        Portfolio 1.0 is the first personal website I created to introduce myself as a software engineering
                        student. It includes sections about my education, experiences, and early projects. This version
                        helped me establish an online presence and begin showcasing my work.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Responsive design optimized for desktop and mobile</li>
                        <li>Clean and simple UI focused on readability</li>
                        <li>Sections for About, Skills, Projects, and Contact</li>
                        <li>Deployed and accessible publicly</li>
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
                            <td className={"pl-2"}>Frontend</td>
                            <td>ReactJS, TypeScript, Tailwind CSS</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Hosting / Deployment</td>
                            <td>Netlify</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Form Handling</td>
                            <td>EmailJS</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Version Control</td>
                            <td>GitHub</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "structure",
                title: "🧩 Structure & Organization",
                content: (
                    <p>
                        The website is built with simple static HTML pages, minimal CSS styling, and Bootstrap components.
                        It was designed as an early step in my journey to learn web development, building structured and
                        maintainable layouts from scratch.
                    </p>
                ),
            },
            {
                id: "demo",
                title: "🌐 Live Website",
                content: (
                    <p>
                        Visit the live Portfolio 1.0 website:{" "}
                        <a
                            href="https://ghaith-saidani.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Portfolio 1.0 — Live
                        </a>
                    </p>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        The full source code is open and available on GitHub:{" "}
                        <a
                            href="https://github.com/ghaithsaidani/portfolio-1.0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                        >
                            Portfolio 1.0 Repository
                        </a>
                    </p>
                ),
            },
        ],
    },
    {
        badge: "🎓 Bachelor Final Project",
        title: "Hotel Complaints Management System",
        description:
            "As my final-year Bachelor's project, I designed and developed a complete hotel complaints and maintenance management system, including a web application for administrators and a mobile application for housekeepers.",
        image: InfogeranceInternship,
        sections: [
            {
                id: "overview",
                title: "📘 Overview",
                content: (
                    <p>
                        This capstone project focused on improving maintenance operations
                        and complaint handling within a hotel environment. I created a
                        web application for managing guest complaints and maintenance tasks,
                        and a dedicated mobile application for housekeepers responsible for
                        identifying and submitting room-related issues.
                        The system significantly enhances communication and reduces
                        response time between hotel teams.
                    </p>
                ),
            },
            {
                id: "features",
                title: "✨ Key Features",
                content: (
                    <ul>
                        <li>Web platform for managing maintenance operations and tracking complaints</li>
                        <li>Mobile app allowing housekeepers to report defects directly from rooms</li>
                        <li>Real-time synchronization between web and mobile applications</li>
                        <li>Role-based access for administrators, maintenance staff, and housekeepers</li>
                        <li>Dashboard for monitoring complaint resolution progress</li>
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
                            <td className={"pl-2"}>Frontend (Web)</td>
                            <td>Angular</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Backend</td>
                            <td>Spring Boot</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Database</td>
                            <td>OracleDB</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td className={"pl-2"}>Mobile Development</td>
                            <td>Android</td>
                        </tr>
                        </tbody>
                    </table>
                ),
            },
            {
                id: "repository",
                title: "📂 Repository & Source Code",
                content: (
                    <p>
                        The full source code for this project is publicly available on GitHub:{" "}

                        <a
                            href="https://github.com/ghaithsaidani/complaints-management-for-an-hotel"
                            target="_blank"
                            className="text-primary underline"
                        >
                            Hotel complaint management Repository
                        </a>
                    </p>
                ),
            },
        ],
    }
]