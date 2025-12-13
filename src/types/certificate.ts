interface ListItem {
    icon: React.ReactNode;
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