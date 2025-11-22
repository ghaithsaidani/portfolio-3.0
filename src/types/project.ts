import type {LinkProps} from "@tanstack/react-router";

interface ProjectPageProps{
    name: string
    image?: string
}

interface ProjectItem {
    id: string;
    title: string;
    summary: string;
    url: LinkProps['to'];
    params: Record<string, string>;
    image: string;
}

interface ProjectProps {
    heading?: string;
    demoUrl?: string;
    items?: ProjectItem[];
}


export type {
    ProjectPageProps,
    ProjectProps,
    ProjectItem
}