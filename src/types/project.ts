import type {LinkProps} from "@tanstack/react-router";
import type {Avatar} from "@/components/ui/avatar-circles.tsx";
import type {ReactNode} from "react";

/*interface ProjectPageProps{
    name: string
    image?: string
}*/

interface ProjectItem {
    id: string;
    title: string;
    summary: string;
    url: LinkProps['to'];
    params: Record<string, string>;
    image: string;
    technologies: Avatar[]
}

interface ProjectSection {
    id: string;
    title: string;
    content: ReactNode;
}

interface ProjectPageProps {
    badge?: string;
    title: string;
    link?: string,
    description: string;
    image?: string;
    sections: ProjectSection[];
}

interface ProjectProps {
    heading?: string;
    demoUrl?: string;
    items?: ProjectItem[];
}


export type {
    ProjectProps,
    ProjectItem,
    ProjectSection,
    ProjectPageProps
}