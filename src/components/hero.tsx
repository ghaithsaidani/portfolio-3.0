import {ArrowRight, ArrowUpRight} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {PersonalImage} from "@/assets";
import {motion} from "framer-motion";
import {LayoutTextFlip} from "@/components/ui/layout-text-flip.tsx";
import {LuGithub, LuLinkedin} from "react-icons/lu";
import {SiNotion} from "react-icons/si";
import {useTranslation} from "react-i18next";

const Hero = () => {
    const {t} = useTranslation("hero")
    return (
        <section id={"hero"} className={"py-5 lg:py-40 xl:py-28"}>
            <div className="container">
                <div className="grid w-fit items-center gap-4 md:gap-8 lg:gap-28 lg:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                        <Badge variant="outline">
                            {t("badge")}
                            <ArrowUpRight className="ml-2 size-4"/>
                        </Badge>

                        <motion.div
                            className="relative mt-4 sm:mt-2 mb-5 flex items-center justify-center gap-4 text-center">
                            <LayoutTextFlip
                                text={t("title.name")}
                                words={t("title.words", {returnObjects: true})}
                            />
                        </motion.div>

                        <p className="text-muted-foreground mb-8 text-sm max-w-xl lg:text-xl">
                            {t("description")}
                        </p>

                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button asChild className="w-full sm:w-auto">
                                <a href={"#contact"}>{t("cta.say_hi")}</a>
                            </Button>

                            <Button variant={"outline"} asChild className="w-full sm:w-auto">
                                <a href={"#projects"}>
                                    {t("cta.explore")}
                                    <ArrowRight className="size-4"/>
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={"flex flex-col sm:flex-row gap-3"}>
                        <img
                            src={PersonalImage}
                            alt={'personal image'}
                            className="h-auto w-full bg-muted rounded-4xl border-primary object-cover object-[50%_0%]"
                        />

                        <div className="flex sm:flex-col justify-end sm:justify-start sm:items-start gap-4">
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://www.linkedin.com/in/ghaithsaidani/" target="_blank"
                                   className="size-10">
                                    <LuLinkedin/>
                                </a>
                            </Button>

                            <Button size="lg" variant="outline" asChild>
                                <a href="https://github.com/ghaithsaidani" target="_blank" className="size-10">
                                    <LuGithub/>
                                </a>
                            </Button>

                            <Button size="lg" variant="outline" asChild>
                                <a
                                    href="https://www.notion.so/marketplace/profiles/ghaithsaidani"
                                    target="_blank"
                                    className="size-10"
                                >
                                    <SiNotion/>
                                </a>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
