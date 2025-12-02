import { ChevronDownIcon, FileDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CloudResume, DevOpsResume, FullstackResume } from "@/assets";

const options = [
    {
        description: "Optimized resume tailored for DevOps & CI/CD roles.",
        label: "Resume (DevOps Role)",
        file: DevOpsResume,
    },
    {
        description: "Resume adapted for Cloud Engineering & Architecture positions.",
        label: "Resume (Cloud Role)",
        file: CloudResume,
    },
    {
        description: "Full-stack oriented resume for frontend & backend roles.",
        label: "Resume (Fullstack Role)",
        file: FullstackResume,
    },
];

export default function MultiChoicesButton({ defaultSelected = "0" }) {
    const [selectedIndex, setSelectedIndex] = useState(defaultSelected);

    const handleDownload = () => {
        const selected = options[Number(selectedIndex)];

        const link = document.createElement("a");
        link.href = selected.file;
        link.download = selected.label.replace(/\s+/g, "_") + ".pdf";
        link.click();
    };

    return (
        <div className="inline-flex divide-x divide-primary-foreground/30 rounded-md shadow-xs rtl:space-x-reverse">
            {/* MAIN BUTTON (DOWNLOAD) */}
            <Button
                onClick={handleDownload}
                className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-20 flex items-center gap-2"
            >
                {options[Number(selectedIndex)].label}
                <FileDown />
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        aria-label="Options"
                        className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
                        size="icon"
                    >
                        <ChevronDownIcon aria-hidden="true" size={16} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="max-w-64 md:max-w-xs"
                    side="bottom"
                    sideOffset={4}
                >
                    <DropdownMenuRadioGroup
                        onValueChange={setSelectedIndex}
                        value={selectedIndex}
                    >
                        {options.map((option, index) => (
                            <DropdownMenuRadioItem
                                className="items-start [&>span]:pt-1.5"
                                key={option.label}
                                value={String(index)}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="font-medium text-sm">{option.label}</span>
                                    <span className="text-neutral-500 text-xs dark:text-neutral-400">
                                        {option.description}
                                    </span>
                                </div>
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
