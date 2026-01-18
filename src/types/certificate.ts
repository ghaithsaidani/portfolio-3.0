import type {ReactNode} from "react";

interface ListItem {
    icon: ReactNode;
    issuer: string;
    category: string;
    description: string;
    link: string;
}

interface ListProps {
    heading?: string;
    items?: ListItem[];
}

export type {
    ListProps
}