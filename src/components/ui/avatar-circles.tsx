import {motion} from "framer-motion"
import {type ElementType, useState} from "react";
import {AnimatePresence} from "motion/react";
import {cn} from "@/lib/utils.ts";

export interface Avatar {
    icon: ElementType
    color?: string
    profileUrl: string
    label: string
}

interface AvatarCirclesProps {
    className?: string
    numPeople?: number
    avatarUrls: Avatar[]
}

export const AvatarCircles = ({
                                  numPeople,
                                  className,
                                  avatarUrls,
                              }: AvatarCirclesProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
            {avatarUrls.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ backgroundColor: item.color }}
                    className={"relative z-10 flex items-center justify-center rounded-full border-2 bg-muted  overflow-hidden hover:z-50"}
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
                    <div className={"size-8 p-2 flex items-center justify-center "}>
                        <item.icon className={"text-white"}/>
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
            {(numPeople ?? 0) > 0 && (
                <a
                    className="flex z-20 size-9 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
                    href=""
                >
                    +{numPeople}
                </a>
            )}
        </div>
    );
}
