import {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import type {ProjectPageProps} from "@/types/project.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {AlignLeft} from "lucide-react";


export function Project({
                            badge,
                            title,
                            description,
                            image,
                            sections,
                        }: ProjectPageProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement>>({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        const sections = Object.keys(sectionRefs.current);

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        let observer: IntersectionObserver | null = new IntersectionObserver(
            observerCallback,
            {
                root: null,
                rootMargin: "0px",
                threshold: 1,
            },
        );

        sections.forEach((sectionId) => {
            const element = sectionRefs.current[sectionId];
            if (element) {
                observer?.observe(element);
            }
        });

        return () => {
            observer?.disconnect();
            observer = null;
        };
    }, []);

    const addSectionRef = (id: string, ref: HTMLElement | null) => {
        if (ref) {
            sectionRefs.current[id] = ref;
        }
    };


    return (
        <section className="py-32">
            <div className="container max-w-7xl">
                <div className="relative grid-cols-3 gap-20 lg:grid">
                    {/* LEFT — CONTENT */}
                    <div className="lg:col-span-2">
                        {badge && <Badge variant={"outline"}>{badge}</Badge>}
                        <h1 className="mt-3 text-3xl font-extrabold">{title}</h1>
                        <p className="text-muted-foreground mt-2 text-lg">{description}</p>

                        {image && (
                            <img
                                src={image}
                                alt={title}
                                className="my-8 aspect-video w-full border rounded-md object-cover"
                            />
                        )}

                        {sections.map(({id, title, content}) => (
                            <section
                                key={id}
                                id={id}
                                ref={(ref) => addSectionRef(id, ref)}
                                className="prose dark:prose-invert mb-8"
                            >
                                <h2>{title}</h2>
                                {content}
                            </section>
                        ))}
                    </div>

                    {/* RIGHT — Table of Contents */}
                    <aside className="sticky top-8 hidden h-fit lg:block">
                        <span className="flex items-center gap-2 text-sm">
                          <AlignLeft className="h-4 w-4"/>
                          On this page
                        </span>
                        <nav className="mt-2 text-sm">
                            <ul>
                                {sections.map((s) => (
                                    <li key={s.id}>
                                        <a
                                            href={`#${s.id}`}
                                            className={cn(
                                                "block py-1 transition-colors duration-200",
                                                activeSection === s.id
                                                    ? "text-primary font-medium"
                                                    : "text-muted-foreground hover:text-primary",
                                            )}
                                        >
                                            {s.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        </section>
    );
}
