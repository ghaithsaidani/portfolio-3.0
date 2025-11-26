import {
    Kubepilot, KubepilotDemo, KubePilotDetailedArchitecture, MicroservicesProvision,
    MicroservicesProvisionAzureArchitecture, MicroservicesProvisionCICD, MicroservicesProvisionClusterArchitecture
} from "@/assets";
import type {ProjectPageProps} from "@/types/project.ts";
import {HeroVideoDialog} from "@/components/ui/hero-video-dialog.tsx";

export const singleProjects: ProjectPageProps[] = [
    {
        badge: "End of Study Internship",
        title: "KubePilot",
        link: "https://gitlab.com/kube-pilot",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: Kubepilot,
        sections: [
            {
                id: "overview",
                title: "Overview",
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
                title: "Key Features",
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
                title: "Technologies Used",
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
                title: "Architecture",
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
                title: "Demo Video",
                content: (
                    <HeroVideoDialog
                        animationStyle="from-center"
                        videoSrc={KubepilotDemo}
                        thumbnailSrc={Kubepilot}
                        thumbnailAlt="Kubepilot Demo Video"
                    />
                )
            }
            /*{
                id: "deployment",
                title: "Deployment",
                content: (
                    <p>
                        The platform is shipped as Helm charts and supports AKS, GKE,
                        EKS, and on-prem clusters.
                    </p>
                ),
            },*/
        ]
    },
    {
        badge: "End of Study Internship",
        title: "Automated Kubernetes Deployment",
        link: "https://gitlab.com/microservices-social-media",
        description:
            "Automated deployment pipeline and cloud infrastructure provisioning for microservices running on Kubernetes.",
        image: MicroservicesProvision,
        sections: [
            {
                id: "overview",
                title: "Overview",
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
                title: "Key Contributions",
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
                title: "Technologies Used",
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
                title: "Azure Infrastructure Architecture",
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
                title: "Kubernetes Cluster Architecture",
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
                title: "CI/CD Pipeline Flow",
                content: (
                    <article>
                        <p>
                            Code pushed to GitLab triggers a Jenkins pipeline that retrieves
                            secrets from Vault, builds and tags Docker images, pushes them to
                            ACR, and instructs ArgoCD to synchronize deployments on AKS—
                            achieving fully automated delivery.
                        </p>
                        <img src={MicroservicesProvisionCICD} alt="CI/CD Pipeline Diagram" />
                    </article>
                ),
            },
        ],
    }
]