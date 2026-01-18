import {ArrowRight} from "lucide-react";
import React from "react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import type {ListProps} from "@/types/certificate.ts";
import {
    CloudFoundations,
    CloudWebAppBuilderCertificate,
    IntroToLinux,
    ITSpecialistCloudComputing,
    ITSpecialistJava, KCNA,
    Meta
} from "@/assets";


const Certificates = ({
                          heading = "Certificates",
                          items = [
                              {
                                  icon: <img loading={"lazy"} src={KCNA} className={"size-10"} alt={"KCNA certificate logo"} />,
                                  issuer: "Cloud Native Computing Foundation (CNCF)",
                                  category: "Issued Dec 13, 2025",
                                  description: "Kubernetes & Cloud Native Associate - KCNA",
                                  link: "https://www.credly.com/badges/0d2522cd-44cb-4850-9867-f298fae26b7c/public_url",
                              },
                              {
                                  icon: <img loading={"lazy"} src={IntroToLinux} className={"size-10"} alt={"Intro to Linux certificate Logo"}/>,
                                  issuer: "The Linux Foundation",
                                  category: "Issued Oct 11, 2025",
                                  description: "Introduction to Linux",
                                  link: "https://www.credly.com/badges/a30a36b4-c77f-41e5-9650-dffc38a0cb32/public_url",
                              },
                              {
                                  icon: <img loading={"lazy"} src={CloudWebAppBuilderCertificate} className={"size-12"} alt={"Cloud Web App Builder certificate logo"}/>,
                                  issuer: "Amazon Web Services",
                                  category: "Issued Dec 09, 2024",
                                  description: "AWS Academy Graduate - Cloud Web Application Builder",
                                  link: "https://www.credly.com/badges/d1b3d936-f76b-4d55-bdf6-e81565acc8d4/public_url",
                              },
                              {
                                  icon: <img loading={"lazy"} src={CloudFoundations} className={"size-12"} alt={"Cloud Foundation certificate logo"}/>,
                                  issuer: "Amazon Web Services",
                                  category: "Issued Oct 28, 2024",
                                  description: "AWS Academy Graduate - Cloud Foundations",
                                  link: "https://www.credly.com/badges/2725eebe-5bc0-4ca5-ac5c-f00c4a4d0e1e/public_url",
                              },
                              {
                                  icon: <img loading={"lazy"} src={ITSpecialistCloudComputing}
                                             alt={"ITSpecialist Cloud Computing certificate Logo"}
                                             className={"size-10"}/>,
                                  issuer: "Information Technology Specialist",
                                  category: "Issued Mar 8, 2024",
                                  description: "Cloud Computing",
                                  link: "https://drive.google.com/file/d/1c-mdY-EEp4gCWOHgZZbgWF6ERi5Pe-RF/view?usp=sharing",
                              },
                              {
                                  icon: <img loading={"lazy"} src={Meta} className={"size-10"} alt={"Meta logo"}/>,
                                  issuer: "Meta",
                                  category: "Issued Apr 14, 2023",
                                  description: "Meta Front-End Developer",
                                  link: "https://www.coursera.org/account/accomplishments/specialization/certificate/QGHFDWY3X79A",
                              },
                              {
                                  icon: <img loading={"lazy"} src={ITSpecialistJava} alt={"ITSpecialist Java certificate Logo"}
                                             className={"size-10"}/>,
                                  issuer: "Information Technology Specialist",
                                  category: "Issued Jan 20, 2023",
                                  description: "Java",
                                  link: "https://drive.google.com/file/d/1jAHGMy2RlydqBZeK0FqMVU8qat9AfRzC/view?usp=sharing",
                              }
                          ],
                      }: ListProps) => {
    return (
        <section className="py-32" id={"certificates"}>
            <div className="container px-0 md:px-8">
                <h1 className="px-4 text-neutral-950 mb-10 text-3xl font-bold tracking-tighter sm:text-6xl dark:text-neutral-50">
                    {heading}
                </h1>
                <div className="flex flex-col">
                    <Separator/>
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="grid items-center gap-4 px-4 py-5 md:grid-cols-4">
                                <div className="order-2 flex items-center gap-2 md:order-none">
                  <span
                      className="bg-muted flex h-14 w-16 shrink-0 items-center justify-center rounded-md">
                    {item.icon}
                  </span>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-semibold">{item.issuer}</h3>
                                        <p className="text-neutral-500 text-sm dark:text-neutral-400">
                                            {item.category}
                                        </p>
                                    </div>
                                </div>
                                <p className="order-1 text-2xl font-semibold md:order-none md:col-span-2">
                                    {item.description}
                                </p>
                                <Button variant="outline" asChild>
                                    <a
                                        className="order-3 ml-auto w-fit gap-2 md:order-none"
                                        href={item.link}
                                        target={"_blank"}
                                    >
                                        <span>View certificate</span>
                                        <ArrowRight className="h-4 w-4"/>
                                    </a>
                                </Button>
                            </div>
                            <Separator/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Certificates;
