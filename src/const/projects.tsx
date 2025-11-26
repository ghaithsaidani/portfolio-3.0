import type {ProjectItem} from "@/types/project.ts";
import {
    AfterEffects,
    AmanaInsurances,
    Angular,
    ArgoCD,
    Cloud9,
    CloudWebAppBuilder,
    ConfledisInternship,
    CPanel, Django,
    EmailJS,
    Figma,
    GithubActions,
    Gitlab,
    Grafana,
    Helm,
    HRIndustries,
    InfogeranceInternship,
    Jenkins,
    Keycloak,
    Kubepilot,
    Kubernetes,
    Loki,
    MicroservicesProvision,
    MicrosoftAzure,
    MondeEnBouche,
    MongoDB,
    Netlify,
    NodeJs, Oracle,
    PDS,
    Portfolio2,
    PostgreSQL,
    Prometheus,
    ReactJs,
    Redis,
    SpringBoot,
    Tekton,
    Terraform,
    Vault,
    XsustainInternship
} from "@/assets";
import {AmazonWebServices, Expressjs, Flask, GitHub, MySQL} from "@/const/icons.tsx";


export const projects: ProjectItem[] = [
    {
        id: "project-1",
        title: "KubePilot",
        summary:
            "Developed Kubepilot, a secure unified Kubernetes platform featuring drag-and-drop CI/CD, built-in observability, and streamlined cluster management.",
        url: "/projects/$index",
        params: {index: "1"},
        image: Kubepilot,
        technologies: [
            {
                icon: ReactJs,
                url: "https://react.dev/",
                label: 'ReactJs',
            },
            {
                icon: SpringBoot,
                url: "https://spring.io/",
                label: 'SpringBoot',
            },
            {
                icon: PostgreSQL,
                url: "https://www.postgresql.org/",
                label: 'PostgreSQL',
            },
            {
                icon: Redis,
                url: "https://redis.io/",
                label: 'PostgreSQL',
            },
            {
                icon: Kubernetes,
                url: "https://kubernetes.io/",
                label: 'Kubernetes',
            },
            {
                icon: Keycloak,
                url: "https://www.keycloak.org/",
                label: 'Keycloak',
            },
            {
                icon: Tekton,
                url: "https://github.com/sanjay-mali",
                label: 'Tekton',
            },
            {
                icon: Vault,
                url: "https://www.hashicorp.com/en/products/vault",
                label: 'Vault',
            },
            {
                icon: Prometheus,
                url: "https://prometheus.io/",
                label: 'Prometheus',
            },
            {
                icon: Loki,
                url: "https://grafana.com/oss/loki/",
                label: 'Loki',
            },
            {
                icon: Gitlab,
                url: "https://gitlab.com/",
                label: 'Gitlab',
            },
            {
                icon: Figma,
                url: "https://www.figma.com",
                label: 'Figma',
            },
            {
                icon: AfterEffects,
                url: "https://www.adobe.com/products/aftereffects.html",
                label: 'After Effects',
            },
        ]
    },
    {
        id: "item-2",
        title: "Microservices Deployment",
        summary:
            "Automated deployment pipeline and cloud infrastructure provisioning for microservices running on Kubernetes.",
        url: "/projects/$index",
        params: {index: "2"},
        image: MicroservicesProvision,
        technologies: [
            {
                icon: SpringBoot,
                url: "https://spring.io/",
                label: 'SpringBoot',
            },
            {
                icon: MicrosoftAzure,
                url: "https://azure.microsoft.com",
                label: 'Azure',
            },
            {
                icon: Kubernetes,
                url: "https://kubernetes.io/",
                label: 'Kubernetes',
            },
            {
                icon: Helm,
                url: "https://helm.sh/",
                label: 'Helm',
            },
            {
                icon: Jenkins,
                url: "https://www.jenkins.io/",
                label: 'Jenkins',
            },
            {
                icon: Terraform,
                url: "https://developer.hashicorp.com/terraform",
                label: 'Terraform',
            },
            {
                icon: ArgoCD,
                url: "https://argo-cd.readthedocs.io/en/stable/",
                label: 'ArgoCD',
            },
            {
                icon: Vault,
                url: "https://www.hashicorp.com/en/products/vault",
                label: 'Vault',
            },
            {
                icon: Gitlab,
                url: "https://gitlab.com/",
                label: 'Gitlab',
            },
            {
                icon: Prometheus,
                url: "https://prometheus.io/",
                label: 'Prometheus',
            },
            {
                icon: Grafana,
                url: "https://grafana.com/grafana/",
                label: 'Grafana',
            },

        ]
    },
    {
        id: "item-3",
        title: "Predictive Maintenance System",
        summary:
            "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
        url: "/projects/$index",
        params: {index: "3"},
        image: PDS,
        technologies: [
            {
                icon: ReactJs,
                url: "https://react.dev/",
                label: 'ReactJs',
            },
            {
                icon: SpringBoot,
                url: "https://spring.io/",
                label: 'SpringBoot',
            },
            {
                icon: Flask,
                url: "https://flask.palletsprojects.com/en/stable/",
                label: 'Flask',
            },
            {
                icon: MySQL,
                url: "https://www.mysql.com/",
                label: 'MySQL',
            },
        ]
    },
    {
        id: "item-4",
        title: "Cloud Web App Builder",
        summary:
            "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
        url: "/projects/$index",
        params: {index: "4"},
        image: CloudWebAppBuilder,
        technologies: [
            {
                icon: AmazonWebServices,
                url: "https://aws.amazon.com/",
                label: 'AWS',
            },
            {
                icon: Cloud9,
                url: "https://aws.amazon.com/cloud9/",
                label: 'Cloud9',
            },
            {
                icon: Terraform,
                url: "https://developer.hashicorp.com/terraform",
                label: 'Terraform',
            },
            {
                icon: MySQL,
                url: "https://www.mysql.com/",
                label: 'MySQL',
            },
        ]
    },
    {
        id: "item-5",
        title: "HR Industries Website",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "5"},
        image: HRIndustries,
        technologies: [
            {
                icon: Angular,
                url: "https://angular.dev/",
                label: 'Angular',
            },
            {
                icon: EmailJS,
                url: "https://www.emailjs.com/",
                label: 'EmailJS',
            },
            {
                icon: Netlify,
                url: "https://www.netlify.com/",
                label: 'Netlify',
            }
        ]
    },
    {
        id: "item-6",
        title: "Smart Menu",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "6"},
        image: XsustainInternship,
        technologies: [
            {
                icon: ReactJs,
                url: "https://react.dev/",
                label: 'ReactJS',
            },
            {
                icon: NodeJs,
                url: "https://nodejs.org/en",
                label: 'NodeJS',
            },
            {
                icon: Expressjs,
                url: "https://expressjs.com/",
                label: 'ExpressJS',
            },
            {
                icon: MongoDB,
                url: "https://www.mongodb.com/",
                label: 'MongoDB',
            },
            {
                icon: GitHub,
                url: "https://react.dev/",
                label: 'ExpressJS',
            },
            {
                icon: MicrosoftAzure,
                url: "https://azure.microsoft.com",
                label: 'Azure',
            },
            {
                icon: Terraform,
                url: "https://developer.hashicorp.com/terraform",
                label: 'Terraform',
            },
            {
                icon: Jenkins,
                url: "https://www.jenkins.io/",
                label: 'Jenkins',
            },
        ]
    },
    {
        id: "item-7",
        title: "Le Monde En Bouche",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "7"},
        image: MondeEnBouche,
        technologies: [
            {
                icon: ReactJs,
                url: "https://react.dev/",
                label: 'ReactJS',
            },
            {
                icon: MicrosoftAzure,
                url: "https://azure.microsoft.com",
                label: 'Azure',
            },
            {
                icon: Terraform,
                url: "https://developer.hashicorp.com/terraform",
                label: 'Terraform',
            },
            {
                icon: GitHub,
                url: "https://react.dev/",
                label: 'ExpressJS',
            },
            {
                icon: GithubActions,
                url: "https://github.com/features/actions",
                label: 'Github Actions',
            },

        ]
    },
    {
        id: "item-8",
        title: "Portfolio 2.0",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "8"},
        image: Portfolio2,
        technologies: [
            {
                icon: ReactJs,
                url: "https://react.dev/",
                label: 'ReactJS',
            },
            {
                icon: Figma,
                url: "https://www.figma.com",
                label: 'Figma',
            },
            {
                icon: EmailJS,
                url: "https://www.emailjs.com/",
                label: 'EmailJS',
            },
            {
                icon: Netlify,
                url: "https://www.netlify.com/",
                label: 'Netlify',
            }
        ]
    },
    {
        id: "item-9",
        title: "Insurance Agency Management",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "9"},
        image: AmanaInsurances,
        technologies: [
            {
                icon: Angular,
                url: "https://angular.dev/",
                label: 'Angular',
            },
            {
                icon: NodeJs,
                url: "https://nodejs.org/en",
                label: 'NodeJS',
            },
            {
                icon: Expressjs,
                url: "https://expressjs.com/",
                label: 'ExpressJS',
            },
            {
                icon: MySQL,
                url: "https://www.mysql.com/",
                label: 'MySQL',
            },
            {
                icon: CPanel,
                url: "https://www.cpanel.net/products/cpanel-whm-features/",
                label: 'CPanel',
            },
        ]
    },
    {
        id: "item-10",
        title: "InnERP",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "10"},
        image: ConfledisInternship,
        technologies: [
            {
                icon: ReactJs,
                url: "https://react.dev/",
                label: 'ReactJS',
            },
            {
                icon: Django,
                url: "https://www.djangoproject.com/",
                label: 'Django',
            },
            {
                icon: AmazonWebServices,
                url: "https://aws.amazon.com/",
                label: 'AWS',
            },
        ]
    },
    {
        id: "item-11",
        title: "Hotel Management System",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "11"},
        image: InfogeranceInternship,
        technologies: [
            {
                icon: Angular,
                url: "https://angular.dev/",
                label: 'Angular',
            },
            {
                icon: SpringBoot,
                url: "https://spring.io/",
                label: 'SpringBoot',
            },
            {
                icon: Oracle,
                url: "https://www.oracle.com/database/",
                label: 'OracleDB',
            },
        ]
    },
]