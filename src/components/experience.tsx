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
                        title = "Work Experience",
                        experience = [
                            {
                                title: "DevOps Engineer",
                                details: "Internship • Hybrid • Ariana, Tunisia",
                                period: "Feb 2025 - Jul 2025",
                                company: "Sofiatech",
                                logo: Sofiatech,
                                description:
                                    "Led development of scalable web applications using React, Node.js, and PostgreSQL. Architected microservices infrastructure serving 100K+ users. Mentored junior developers and established coding standards.",
                            },
                            {
                                title: "Software Engineer",
                                details: "Internship • Onsite • Tunis, Tunisia",
                                period: "Jun 2024 - Aug 2024",
                                company: "XSUSTAIN",
                                logo: Xsustain,
                                description:
                                    "Led development of scalable web applications using React, Node.js, and PostgreSQL. Architected microservices infrastructure serving 100K+ users. Mentored junior developers and established coding standards.",
                            },
                            {
                                title: "Software Developer",
                                details: "Full-Time • Remote • Paris, France",
                                period: "Aug 2023 - Oct 2023",
                                company: "Confledis SAS",
                                logo: Confledis,
                                description:
                                    "Developed full-stack applications using JavaScript, Python, and MySQL. Participated in agile development process and code reviews. Contributed to open-source projects and internal tooling.",
                            },
                            {
                                title: "Junior Web Developer",
                                details: "Full-Time • Hybrid • Ariana, Tunisia",
                                period: "Feb 2022 - Jun 2022",
                                company: "Infogérance",
                                logo: Infogerance,
                                description:
                                    "Created responsive websites using HTML, CSS, and JavaScript. Worked with WordPress and PHP for content management. Assisted in debugging and testing web applications.",
                            },
                        ],
                    }: ExperienceProps) => {
    return (
        <section className="py-16 md:py-32">
            <div className="container">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 text-4xl font-medium leading-tight md:text-7xl">
                        {title}
                    </h2>

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

export {Experience};
