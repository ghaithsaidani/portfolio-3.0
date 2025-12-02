import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {FSB, LJFB, Marburg, Sesame} from "@/assets";

type University = {
    date: string;
    name: string;
    degree: string,
    logo: string,
    content: string;
};

const educationsData: University[] = [
    {
        date: "2025 - 2026",
        name: "Marburg University, Marburg",
        degree: "Exchange Program",
        logo: Marburg,
        content:
            "Selected for an academic exchange program focused on advanced software engineering and research exposure. Strengthened expertise in distributed systems, cloud technologies, and applied computer science through coursework and international collaboration.",
    },
    {
        date: "2022 - 2025",
        name: "Sesame University, Ariana",
        degree: "Engineer's Degree",
        logo: Sesame,
        content:
            "Completed an engineering degree specializing in Cloud Computing and Cybersecurity. Developed strong foundations in DevOps, distributed systems, and modern software architectures through hands-on projects and academic research.",
    },
    {
        date: "2019 - 2022",
        name: "Faculty of Sciences, Bizerte",
        degree: "Bachelor Degree",
        logo: FSB,
        content:
            "Earned a bachelor's degree in Software Engineering and Information Systems with honors. Built a solid background in programming, data structures, algorithms, and full-stack development while completing several academic and personal projects.",
    },
    {
        date: "2019",
        name: "Lycée Jeunes-Filles, Bizerte",
        degree: "Baccalaureate",
        logo: LJFB,
        content:
            "Earned a Baccalaureate specialized in Mathematics, developing strong analytical and problem-solving skills that formed the foundation for advanced studies in software engineering.",
    },

];

const Education = () => {
    return (
        <section className="bg-white py-32 dark:bg-neutral-950">
            <div className="container">
                <h1 className="text-neutral-950 mb-10 text-center text-3xl font-bold tracking-tighter sm:text-6xl dark:text-neutral-50">
                    Education
                </h1>
                <div className="relative mx-auto max-w-4xl">
                    <Separator
                        orientation="vertical"
                        className="bg-neutral-100 absolute left-2 top-4 dark:bg-neutral-800"
                    />
                    {educationsData.map((entry, index) => (
                        <div key={index} className="relative mb-10 pl-8">
                            <div
                                className="bg-neutral-950 absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full dark:bg-neutral-50"/>
                            <div className={"flex"}>
                                <img src={entry.logo} className={"h-12"}/>
                                <div className={"flex flex-col ml-4"}>
                                    <h4 className=" text-xl font-bold tracking-tight">
                                        {entry.name}
                                    </h4>
                                    <h6 className={"text-muted-foreground"}>{entry.degree}</h6>
                                </div>

                            </div>

                            <h5 className="text-md -left-34 text-neutral-500 top-3 rounded-xl tracking-tight xl:absolute dark:text-neutral-400">
                                {entry.date}
                            </h5>

                            <Card className="my-5 border-none shadow-none bg-transparent">
                                <CardContent className="px-0 xl:px-2">
                                    <p
                                        className="prose dark:prose-invert text-neutral-950 dark:text-neutral-50"
                                        dangerouslySetInnerHTML={{__html: entry.content}}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
