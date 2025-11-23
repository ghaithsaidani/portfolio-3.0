import {Kubepilot, KubePilotDetailedArchitecture} from "@/assets";
import type {ProjectPageProps} from "@/types/project.ts";

export const singleProjects: ProjectPageProps[] = [
    /*{name: "1st Project", image: Kubepilot},
    {name: "2nd Project", image: MicroservicesProvision},
    {name: "3rd Project", image: PDS},
    {name: "4th Project", image: CloudWebAppBuilder},
    {name: "5th Project", image: HRIndustries},
    {name: "6th Project", image: XsustainInternship},
    {name: "7th Project", image: MondeEnBouche},
    {name: "8th Project", image: Portfolio2},
    {name: "9th Project", image: AmanaInsurances},
    {name: "10th Project", image: ConfledisInternship},
    {name: "11th Project", image: InfogeranceInternship},*/
    {
        badge: "DevOps Platform",
        title: "KubePilot",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: Kubepilot,
        sections: [
            {
                id: "overview",
                title: "Overview",
                content: (
                    <p>
                        KubePilot centralizes Kubernetes application lifecycle management—
                        deployments, scaling, RBAC, pipelines, and monitoring—into one UI.
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
                        <tr>
                            <td>Frontend</td>
                            <td>React, TypeScript, Tailwind, Shadcn</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Backend</td>
                            <td>SpringBoot, PostgreSQL, Redis</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>DevOps</td>
                            <td>Kubernetes, Tekton, Helm, Vault, Keycloak, Prometheus, Loki</td>
                        </tr>
                        <tr className="even:bg-muted m-0 border-t p-0">
                            <td>Cloud</td>
                            <td>AKS</td>
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
        badge: "DevOps Platform",
        title: "KubePilot",
        description: "A unified Kubernetes automation platform streamlining deployments, observability, and CI/CD.",
        image: Kubepilot,
        sections: [
            {
                id: "overview",
                title: "Overview",
                content: (
                    <p>
                        KubePilot centralizes Kubernetes application lifecycle management—
                        deployments, scaling, RBAC, pipelines, and monitoring—into one UI.
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
                id: "architecture",
                title: "Architecture",
                content: (
                    <p>
                        KubePilot follows a modular microservices design powered by Go,
                        React, PostgreSQL, and Kubernetes operators.
                    </p>
                ),
            },
            {
                id: "deployment",
                title: "Deployment",
                content: (
                    <p>
                        The platform is shipped as Helm charts and supports AKS, GKE,
                        EKS, and on-prem clusters.
                    </p>
                ),
            },
        ]
    }

]