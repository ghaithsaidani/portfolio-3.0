import { useTranslation } from "react-i18next";
import { Confledis, Infogerance, Sofiatech, Xsustain } from "@/assets";

const Experience = () => {
    const { t } = useTranslation("experience");

    // Map imported logos manually to translation items:
    const logos = [Sofiatech, Xsustain, Confledis, Infogerance];

    const items = t("items", { returnObjects: true }) as any[];

    return (
        <section id="experience" className="py-16 md:py-32">
            <div className="container">
                <div className="mx-auto max-w-7xl">

                    <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter lg:text-6xl mb-16">
                        {t("title")}
                    </h1>

                    <div className="space-y-8">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className="border-border border-b pb-6 last:border-b-0"
                            >
                                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                                    <div className="md:w-2/3">
                                        <div className="mb-2 flex items-center gap-5">
                                            <img
                                                src={logos[idx]}
                                                alt={`${item.company} logo`}
                                                className="h-8 object-contain"
                                            />
                                            <h3 className="text-xl">{item.role}</h3>
                                        </div>

                                        <p className="text-muted-foreground mb-3 text-sm">
                                            {item.details}
                                        </p>

                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="text-right md:w-1/3 md:text-right">
                                        <p className="mb-1 text-sm font-medium">{item.period}</p>
                                        <p className="text-muted-foreground text-sm">{item.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
