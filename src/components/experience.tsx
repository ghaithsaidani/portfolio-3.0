import {Confledis, Infogerance, Sofiatech, Xsustain} from "@/assets";

interface ExperienceItem {
    title: string;
    details: string;
    period: string;
    company: string;
    logo: string;
    description: string;
}

interface ExperienceProps {
    title?: string;
    experience?: ExperienceItem[];
}

const Experience = ({
                        //title = "Work Experience",
                        experience = [
                            {
                                title: "DevOps Engineer",
                                details: "Internship • Hybrid • Ariana, Tunisia",
                                period: "Feb 2025 - Jul 2025",
                                company: "Sofiatech",
                                logo: Sofiatech,
                                description:
                                    "Built Kubepilot, a unified Kubernetes management platform. Designed a drag-and-drop CI/CD builder with Tekton and React Flow, deployed full observability with Prometheus and Loki, and secured the platform using Keycloak and Vault with strong RBAC policies.",
                            },
                            {
                                title: "Software Engineer",
                                details: "Internship • Onsite • Tunis, Tunisia",
                                period: "Jun 2024 - Aug 2024",
                                company: "XSUSTAIN",
                                logo: Xsustain,
                                description:
                                    "Developed a full-stack restaurant management system using the MERN stack. Automated cloud infrastructure on Azure using Terraform and Ansible, and implemented a Jenkins CI/CD pipeline deploying containerized services to AKS through ACR.",
                            },
                            {
                                title: "Software Developer",
                                details: "Internship • Remote • Paris, France",
                                period: "Aug 2023 - Oct 2023",
                                company: "Confledis SAS",
                                logo: Confledis,
                                description:
                                    "Improved a financial web platform by debugging and extending features using React and Django. Containerized services with Docker and deployed the application on AWS EC2, enhancing scalability and platform reliability.",
                            },
                            {
                                title: "Software Developer",
                                details: "Internship • Hybrid • Ariana, Tunisia",
                                period: "Feb 2022 - Jun 2022",
                                company: "Infogérance",
                                logo: Infogerance,
                                description:
                                    "Engineered a hotel maintenance web application using Angular, Spring Boot, and MySQL. Developed a companion mobile app for housekeepers, enabling centralized and efficient fault reporting across hotel operations.",
                            },
                        ],
                    }: ExperienceProps) => {
    return (
        <section className="py-16 md:py-32">
            <div className="container">
                <div className="mx-auto max-w-7xl">
                    {/*<h2 className="mb-12 text-4xl font-medium leading-tight md:text-7xl">
                        {title}
                    </h2>*/}

                    <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter lg:text-6xl mb-16">
                        Experience
                    </h1>
                    <div className="space-y-8">
                        {experience.map(
                            ({title, details, period, company, logo, description}, idx) => (
                                <div
                                    key={idx}
                                    className="border-border border-b pb-6 last:border-b-0"
                                >
                                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                                        <div className="md:w-2/3">
                                            <div className="mb-2 flex items-center gap-5">
                                                <img
                                                    src={logo}
                                                    alt={`${company} logo`}
                                                    className="h-8 object-contain"
                                                />
                                                <h3 className="text-xl">{title}</h3>
                                            </div>
                                            <p className="text-muted-foreground mb-3 text-sm">
                                                {details}
                                            </p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="text-right md:w-1/3 md:text-right">
                                            <p className="mb-1 text-sm font-medium">{period}</p>
                                            <p className="text-muted-foreground text-sm">{company}</p>
                                        </div>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
