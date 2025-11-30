import type {ProjectItem} from "@/types/project.ts";
import {
    AfterEffects,
    AmanaInsurances,
    Android,
    Angular,
    Ansible,
    ArgoCD,
    Bash,
    Cloud9,
    CloudWebAppBuilder,
    ConfledisInternship,
    CPanel,
    Django,
    EmailJS,
    Figma,
    GithubActions,
    Gitlab,
    Grafana,
    Helm,
    Homelab,
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
    NodeJs,
    NodeRed,
    Oracle,
    PDS,
    Portfolio1,
    Portfolio2,
    PostgreSQL,
    Prometheus,
    Python,
    ReactJs,
    Redis,
    SpringBoot,
    Tekton,
    Terraform,
    Vagrant,
    Vault,
    VotingAppNodeRed,
    XsustainInternship
} from "@/assets";
import {Icons} from "@/const/icons.tsx";


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
                label: 'Redis',
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
        title: "Homelab",
        summary:
            "Automated HomeLab deployment that boots 3 KVM VMs via Vagrant and provisions a 3-node Kubernetes cluster (1 master, 2 workers) using Ansible.",
        url: "/projects/$index",
        params: {index: "2"},
        image: Homelab,
        technologies: [
            {
                icon: Ansible,
                url: "https://docs.ansible.com/",
                label: 'Ansible',
            },
            {
                icon: Bash,
                url: "https://www.gnu.org/software/bash/",
                label: 'Bash',
            },
            {
                icon: Vagrant,
                url: "https://developer.hashicorp.com/vagrant",
                label: 'Vagrant',
            },
            {
                icon: Icons.qemu,
                url: "https://www.qemu.org/",
                label: 'Qemu',
            },
            {
                icon: Kubernetes,
                url: "https://kubernetes.io/",
                label: 'Kubernetes',
            },
        ]
    },
    {
        id: "item-3",
        title: "Microservices Deployment",
        summary:
            "Automated deployment pipeline and cloud infrastructure provisioning for microservices running on Kubernetes.",
        url: "/projects/$index",
        params: {index: "3"},
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
        id: "item-4",
        title: "Predictive Maintenance System",
        summary: "A real-time predictive maintenance platform that analyzes IoT vehicle sensor data to detect anomalies early and prevent equipment failures.",
        url: "/projects/$index",
        params: {index: "4"},
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
                icon: Icons.flask,
                url: "https://flask.palletsprojects.com/en/stable/",
                label: 'Flask',
            },
            {
                icon: Icons.mySQL,
                url: "https://www.mysql.com/",
                label: 'MySQL',
            },
        ]
    },
    {
        id: "item-5",
        title: "Cloud Web App Builder",
        summary:
            "Automated AWS infrastructure that provisions scalable web applications using Terraform, EC2, RDS, and load balancing.",
        url: "/projects/$index",
        params: {index: "5"},
        image: CloudWebAppBuilder,
        technologies: [
            {
                icon: Icons.amazonWebServices,
                url: "https://aws.amazon.com/",
                label: "AWS",
            },
            {
                icon: Cloud9,
                url: "https://aws.amazon.com/cloud9/",
                label: "Cloud9",
            },
            {
                icon: Terraform,
                url: "https://developer.hashicorp.com/terraform",
                label: "Terraform",
            },
            {
                icon: Icons.mySQL,
                url: "https://www.mysql.com/",
                label: "MySQL",
            },
        ],
    },
    {
        id: "item-6",
        title: "Voting App with Node Red",
        summary:
            "An IoT-based voting platform using Node-RED and MQTT for real-time vote casting and visualization.",
        url: "/projects/$index",
        params: {index: "6"},
        image: VotingAppNodeRed,
        technologies: [
            {
                icon: Python,
                url: "https://www.python.org/",
                label: 'Python',
            },
            {
                icon: Icons.flask,
                url: "https://flask.palletsprojects.com/en/stable/",
                label: 'Flask',
            },
            {
                icon: NodeRed,
                url: "https://nodered.org/",
                label: 'Node-Red',
            },
        ]
    },
    {
        id: "item-7",
        title: "HR Industries Website",
        summary:
            "A modern corporate website built with Angular, featuring dynamic content, EmailJS integration, and a fast, secure Netlify deployment.",
        url: "/projects/$index",
        params: {index: "7"},
        image: HRIndustries,
        technologies: [
            {
                icon: Angular,
                url: "https://angular.dev/",
                label: "Angular",
            },
            {
                icon: EmailJS,
                url: "https://www.emailjs.com/",
                label: "EmailJS",
            },
            {
                icon: Netlify,
                url: "https://www.netlify.com/",
                label: "Netlify",
            },
        ],
    },
    {
        id: "item-8",
        title: "Smart Menu",
        summary:
            "A full digital restaurant platform enabling online menus, real-time ordering, and a complete management dashboard for products, agents, and revenues.",
        url: "/projects/$index",
        params: {index: "8"},
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
                icon: Icons.expressjs,
                url: "https://expressjs.com/",
                label: 'ExpressJS',
            },
            {
                icon: MongoDB,
                url: "https://www.mongodb.com/",
                label: 'MongoDB',
            },
            {
                icon: Icons.gitHub,
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
            {
                icon: ArgoCD,
                url: "https://argo-cd.readthedocs.io/en/stable/",
                label: 'ArgoCD',
            },
        ]
    },
    {
        id: "item-9",
        title: "Le Monde En Bouche",
        summary:
            "A static ReactJS website showcasing traditional dishes, integrated with automated Azure provisioning and CI/CD pipelines.",
        url: "/projects/$index",
        params: {index: "9"},
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
                icon: Icons.gitHub,
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
        id: "item-10",
        title: "Portfolio 2.0",
        summary:
            "Personal developer portfolio showcasing skills, projects, and background. Built with modern web technologies and deployed for a sleek, responsive user experience.",
        url: "/projects/$index",
        params: {index: "10"},
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
        id: "item-11",
        title: "Amana Insurance Management",
        summary:
            "Insurance agency management system developed for a Libyan insurance company, improving workflow efficiency and reliability with modern web technologies.",
        url: "/projects/$index",
        params: {index: "11"},
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
                icon: Icons.expressjs,
                url: "https://expressjs.com/",
                label: 'ExpressJS',
            },
            {
                icon: Icons.mySQL,
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
        id: "item-12",
        title: "InnERP",
        summary:
            "Finance web application enhanced and deployed during a remote internship at Confledis SAS, improving reliability and scalability using modern web technologies.",
        url: "/projects/$index",
        params: {index: "12"},
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
                icon: Icons.amazonWebServices,
                url: "https://aws.amazon.com/",
                label: 'AWS',
            },
        ]
    },
    {
        id: "item-13",
        title: "Portfolio 1.0",
        summary:
            "Personal developer portfolio showcasing skills, projects, and background. Built with modern web technologies and deployed for a sleek, responsive user experience.",
        url: "/projects/$index",
        params: {index: "13"},
        image: Portfolio1,
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
        id: "item-14",
        title: "Hotel Management System",
        summary:
            "Full web & mobile solution developed as my Bachelor's final project, enabling efficient management of hotel maintenance and complaints.",
        url: "/projects/$index",
        params: {index: "14"},
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
            {
                icon: Android,
                url: "https://www.android.com/",
                label: 'Android',
            },
        ]
    },
]