import {ArrowRight, ArrowUpRight} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {PersonalImage} from "@/assets";
import type {HeroProps} from "@/types/hero.ts";
import {motion} from "framer-motion";
import {LayoutTextFlip} from "@/components/ui/layout-text-flip.tsx";
import {FaDiscord} from "react-icons/fa6";
import {LuGithub, LuLinkedin} from "react-icons/lu";


const Hero = ({
                  badge = "✨ Your Website Builder",
                  //heading = "Ghaith Saidani",
                  description = "From cloud infrastructure to full-stack applications, I turn ideas into robust, production-ready systems. I’m driven by curiosity, best practices, and the challenge of crafting solutions that scale effortlessly and perform flawlessly.",
                  buttons = {
                      primary: {
                          text: "Discover all components",
                          url: "https://www.shadcnblocks.com",
                      },
                      secondary: {
                          text: "View on GitHub",
                          url: "https://www.shadcnblocks.com",
                      },
                  },
                  image = {
                      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
                      alt: "Hero section demo image showing interface components",
                  },
              }: HeroProps) => {
    return (
        <section className={"py-5 lg:py-40 xl:py-28"}>
            <div className="container">
                <div className="grid w-fit items-center gap-4 md:gap-8 lg:gap-28 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <Badge variant="outline">
                                ✨ Turning Your Ideas Into Reality
                                <ArrowUpRight className="ml-2 size-4"/>
                            </Badge>
                        )}
                        {/*<h1 className="my-6 text-pretty text-2xl sm:text-4xl font-bold lg:text-6xl">
                            {heading}
                        </h1>*/}
                        <motion.div
                            className="relative mt-4 sm:mt-2 mb-5 flex items-center justify-center gap-4 text-center">
                            <LayoutTextFlip
                                text="Ghaith Saidani"
                                words={["Software Engineer", "DevOps", "Cloud Computing"]}
                            />
                        </motion.div>
                        <p className="text-muted-foreground mb-8 text-sm max-w-xl lg:text-xl">
                            {description}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                                </Button>
                            )}
                            {buttons.secondary && (
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <a href={buttons.secondary.url}>
                                        {buttons.secondary.text}
                                        <ArrowRight className="size-4"/>
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className={"flex flex-col sm:flex-row gap-3"}>
                        <img
                            src={PersonalImage}
                            alt={image.alt}
                            className="h-auto w-full bg-muted rounded-4xl border-primary object-cover object-[50%_0%]"
                        />
                        <div className="flex sm:flex-col justify-end sm:justify-start sm:items-start gap-4">
                            <Button size="lg" variant="outline" asChild>
                                <a
                                    href="https://www.linkedin.com/in/ghaithsaidani/"
                                    target="_blank"
                                    className="size-10"
                                >
                                    <LuLinkedin/>
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a
                                    href="https://github.com/ghaithsaidani"
                                    target="_blank"
                                    className="size-10"
                                >
                                    <LuGithub/>
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a
                                    href="https://shadcnblocks.com"
                                    target="_blank"
                                    className="size-10"
                                >
                                    <FaDiscord/>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {Hero};
