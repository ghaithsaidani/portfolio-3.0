interface ListItem {
    icon: React.ReactNode;
    title: string;
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