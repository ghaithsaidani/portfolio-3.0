import {motion} from "framer-motion"
import {type ElementType, useState} from "react";
import {AnimatePresence} from "motion/react";
import {cn} from "@/lib/utils.ts";
import {useMaxLogos} from "@/hooks/useMaxLogos.tsx";

export interface Avatar {
    icon: string | ElementType
    color?: string
    url: string
    label: string
}

interface AvatarCirclesProps {
    className?: string
    avatarUrls: Avatar[]
}

export const AvatarCircles = ({
                                  className,
                                  avatarUrls,
                              }: AvatarCirclesProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    const maxVisible = useMaxLogos();

    const visible = avatarUrls.slice(0, maxVisible);
    const remaining = avatarUrls.length - maxVisible;

    return (
        <div className={cn("z-10 flex -space-x-3.5 rtl:space-x-reverse", className)}>
            {visible.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    style={{backgroundColor: item.color}}
                    className={"relative z-10 flex items-center justify-center rounded-full border-2 bg-muted overflow-hidden hover:z-50"}
                    initial={{width: "2.2rem", height: "2.2rem"}} // size-10
                    animate={{
                        width: hovered === index ? "auto" : "2.2rem",
                    }}
                    transition={{type: "spring", stiffness: 260, damping: 20}}
                >
                    {/* Avatar */}
                    {/*<img
                        src={item.imageUrl}
                        alt={item.label}
                        className="size-8 rounded-full object-cover"
                    />*/}
                    <div className={"size-8 p-2 flex items-center justify-center"}>
                        {typeof item.icon==="string" ? <img src={item.icon} alt={item.label}/> : <item.icon/>}
                    </div>


                    {/* Name appears on hover */}
                    <AnimatePresence>
                        {hovered === index && (
                            <motion.span
                                initial={{opacity: 0, x: -10}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -10}}
                                transition={{duration: 0.15}}
                                className="ml-1 mr-3 whitespace-nowrap text-sm font-medium text-black dark:text-white"
                            >
                                {item.label}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.a>
            ))}
            {remaining > 0 && (
                <div
                    className="flex z-20 size-9 items-center justify-center rounded-full border-2 border-white bg-black text-xs font-medium text-white dark:bg-white dark:text-black">
                    +{remaining}
                </div>
            )}
        </div>
    );
}
