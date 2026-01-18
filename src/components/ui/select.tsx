"use client";

import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from "lucide-react";
import {Select as SelectPrimitive} from "radix-ui";
import type * as React from "react";

import {cn} from "@/lib/utils";

function Select({
                    ...props
                }: React.ComponentProps<typeof SelectPrimitive.Root>) {
    return <SelectPrimitive.Root data-slot="select" {...props} />;
}


function SelectValue({
                         ...props
                     }: React.ComponentProps<typeof SelectPrimitive.Value>) {
    return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
                           className,
                           children,
                           ...props
                       }: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
    return (
        <SelectPrimitive.Trigger
            className={cn(
                "flex h-9 w-full items-center justify-between gap-2 rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-neutral-950 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-neutral-950 focus-visible:ring-[3px] focus-visible:ring-neutral-950/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 data-[placeholder]:text-neutral-500 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:ring-red-500/40 [&>span]:line-clamp-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 dark:border-neutral-800 dark:text-neutral-50 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/50 dark:aria-invalid:border-red-900 dark:data-[placeholder]:text-neutral-400 dark:dark:aria-invalid:ring-red-900/40",
                className,
            )}
            data-slot="select-trigger"
            {...props}
        >
            {children}
            <SelectPrimitive.Icon asChild>
                <ChevronDownIcon
                    className="shrink-0 in-aria-invalid:text-red-500/80 text-neutral-500/80 dark:in-aria-invalid:text-red-900/80 dark:text-neutral-400/80"
                    size={16}
                />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
}

function SelectContent({
                           className,
                           children,
                           position = "popper",
                           ...props
                       }: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                className={cn(
                    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 relative z-50 max-h-[min(24rem,var(--radix-select-content-available-height))] min-w-32 overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in [&_[role=group]]:py-1 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
                    position === "popper" &&
                    "data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 w-full min-w-[var(--radix-select-trigger-width)] data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1",
                    className,
                )}
                data-slot="select-content"
                position={position}
                {...props}
            >
                <SelectScrollUpButton/>
                <SelectPrimitive.Viewport
                    className={cn(
                        "p-1",
                        position === "popper" && "h-[var(--radix-select-trigger-height)]",
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton/>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
}


function SelectItem({
                        className,
                        children,
                        ...props
                    }: React.ComponentProps<typeof SelectPrimitive.Item>) {
    return (
        <SelectPrimitive.Item
            className={cn(
                "relative flex w-full cursor-default select-none items-center rounded py-1.5 ps-8 pe-2 text-sm outline-hidden focus:bg-neutral-100 focus:text-neutral-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
                className,
            )}
            data-slot="select-item"
            {...props}
        >
      <span className="absolute start-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon size={16}/>
        </SelectPrimitive.ItemIndicator>
      </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    );
}

function SelectScrollUpButton({
                                  className,
                                  ...props
                              }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
    return (
        <SelectPrimitive.ScrollUpButton
            className={cn(
                "flex cursor-default items-center justify-center py-1 text-neutral-500/80 dark:text-neutral-400/80",
                className,
            )}
            data-slot="select-scroll-up-button"
            {...props}
        >
            <ChevronUpIcon size={16}/>
        </SelectPrimitive.ScrollUpButton>
    );
}

function SelectScrollDownButton({
                                    className,
                                    ...props
                                }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
    return (
        <SelectPrimitive.ScrollDownButton
            className={cn(
                "flex cursor-default items-center justify-center py-1 text-neutral-500/80 dark:text-neutral-400/80",
                className,
            )}
            data-slot="select-scroll-down-button"
            {...props}
        >
            <ChevronDownIcon size={16}/>
        </SelectPrimitive.ScrollDownButton>
    );
}

export {
    Select,
    SelectContent,
    SelectItem,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectTrigger,
    SelectValue,
};
