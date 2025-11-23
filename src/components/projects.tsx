import {ArrowLeft, ArrowRight, ArrowUpRight} from "lucide-react";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {Carousel, type CarouselApi, CarouselContent, CarouselItem,} from "@/components/ui/carousel";
import {Link} from "@tanstack/react-router";
import {projects} from "@/const/projects.ts";
import type {ProjectProps} from "@/types/project.ts";
import {type Avatar, AvatarCircles} from "@/components/ui/avatar-circles.tsx";
import {GitLab, Keycloak, Kubernetes, Loki, Prometheus, ReactIcon, Spring, Tekton, Vault} from "@/const/icons.tsx";


const Projects = ({
                      heading = "Projects",
                      demoUrl = "https://www.shadcnblocks.com",
                      items = projects
                  }: ProjectProps) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    const avatars: Avatar[] = [
        {
            icon: ReactIcon,
            profileUrl: "https://github.com/dillionverma",
            label: 'ReactJs',
        },
        {
            icon: Spring,
            profileUrl: "https://github.com/tomonarifeehan",
            label: 'SpringBoot',
        },
        {
            icon: GitLab,
            profileUrl: "https://github.com/BankkRoll",
            label: 'Gitlab',
        },
        {
            icon: Kubernetes,
            profileUrl: "https://github.com/safethecode",
            label: 'Kubernetes',
        },
        {
            icon: Keycloak,
            profileUrl: "https://github.com/sanjay-mali",
            label: 'Keycloak',
        },
        {
            icon: Tekton,
            profileUrl: "https://github.com/sanjay-mali",
            label: 'Tekton',
        },
        {
            icon: Vault,
            profileUrl: "https://github.com/sanjay-mali",
            label: 'Vault',
        },
        {
            icon: Prometheus,
            profileUrl: "https://github.com/sanjay-mali",
            label: 'Prometheus',
        },

        {
            icon: Loki,
            profileUrl: "https://github.com/sanjay-mali",
            label: 'Loki',
        },

    ]
    return (
        <section className="py-32">
            <div className="container">
                <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
                    <div>
                        <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                            {heading}
                        </h2>
                        <a
                            href={demoUrl}
                            className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
                        >
                            Book a demo
                            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1"/>
                        </a>
                    </div>
                    <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowLeft className="size-5"/>
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowRight className="size-5"/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90vw] ml-[5vw] mr-[5vm]">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                    className="relative w-full max-w-full md:left-[-1rem]"
                >
                    <CarouselContent className="hide-scrollbar w-full max-w-full">
                        {items.map((item) => (
                            <CarouselItem key={item.id}
                                          className="ml-8 max-w-[350px] md:max-w-[452px] px-5 py-8 bg-muted rounded-xl">
                                <Link
                                    to="/projects/$index"
                                    params={{index: item.params.index}}
                                    hashScrollIntoView={true}
                                    className="group flex flex-col h-full"
                                >

                                    <div
                                        className="aspect-3/2 flex overflow-clip rounded-xl border-1 dark:border-none">
                                        <div className="flex-1">
                                            <div
                                                className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"flex flex-col h-full justify-between"}>
                                        <div>
                                            <h2
                                                className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                                                {item.title}
                                            </h2>
                                            <p
                                                className="text-muted-foreground mb-8 line-clamp-3 text-sm md:mb-12 md:text-base lg:mb-9">
                                                {item.summary}
                                            </p>
                                        </div>
                                        <div className={"flex justify-between"}>
                                            <AvatarCircles avatarUrls={avatars} numPeople={10}/>
                                            <div className="flex items-center text-sm">
                                                Read more{" "}
                                                <ArrowRight
                                                    className="ml-2 size-5 transition-transform group-hover:translate-x-1"/>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export {Projects};
