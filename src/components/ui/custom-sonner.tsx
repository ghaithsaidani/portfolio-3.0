import {AlertTriangleIcon, CircleCheckIcon, CircleXIcon, InfoIcon, XIcon} from "lucide-react";

import {Button} from "@/components/ui/button";
import type {SonnerProps} from "@/types/sonner.ts";
import {toast} from "sonner";
import {cn} from "@/lib/utils.ts";


const statusConfig = {
    success: {
        icon: CircleCheckIcon,
        className: "text-emerald-500"
    },
    error: {
        icon: CircleXIcon,
        className: "text-red-500"
    },
    warning: {
        icon: AlertTriangleIcon,
        className: "text-yellow-500"
    },
    info: {
        icon: InfoIcon,
        className: "text-blue-500"
    },
} as const;


export default function CustomSonner({id, status, message,}: SonnerProps) {

    const Icon = statusConfig[status].icon;
    const iconColor = statusConfig[status].className;


    return (
        <div className="w-full rounded-md border bg-background px-4 py-3 text-foreground shadow-lg sm:w-[var(--width)]">
            <div className="flex gap-2">
                <div className="flex grow items-center gap-3">
                    <Icon
                        aria-hidden="true"
                        className={cn('-mt-0.5 me-3 inline-flex', iconColor)}
                        size={15}
                    />
                    {message}
                </div>
                <Button
                    aria-label="Close banner"
                    className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                    onClick={() => toast.dismiss(id)}
                    variant="ghost"
                >
                    <XIcon
                        aria-hidden="true"
                        className="opacity-60 transition-opacity group-hover:opacity-100"
                        size={16}
                    />
                </Button>
            </div>
        </div>
    );
}
