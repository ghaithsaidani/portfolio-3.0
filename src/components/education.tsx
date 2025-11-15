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
        date: "2025 - 2026  ",
        name: "Marburg University, Marburg",
        degree: "Exchange Program",
        logo: Marburg,
        content:
            "The term 'Artificial Intelligence' was coined at the Dartmouth Conference, marking official beginning of AI as a field. John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon organized this seminal event, setting stage for decades research development.",
    },
    {
        date: "2022 - 2025",
        name: "Sesame University, Ariana",
        degree: "Engineer's Degree",
        logo: Sesame,
        content:
            "The early years saw significant optimism with programs like ELIZA (the first chatbot) and SHRDLU (a natural language understanding system). However, by the 1970s, funding dried up as researchers faced limitations of computing power complexity human intelligence.",
    },
    {
        date: "2019 - 2022",
        name: "Faculty of Sciences, Bizerte",
        degree: "Bachelor Degree",
        logo: FSB,
        content:
            "AI experienced a revival with the development of expert systems like MYCIN (for medical diagnosis) and DENDRAL chemical analysis). These used rule-based approaches to mimic human decision-making in specific domains, leading renewed interest funding research.",
    },
    {
        date: "2019",
        name: "Lycée Jeunes-Filles, Bizerte",
        degree: "Baccalaureate",
        logo: LJFB,
        content:
            "IBM's Deep Blue became the first computer system to defeat a reigning world chess champion, Garry Kasparov, in six-game match. This milestone demonstrated AI's potential outperform humans complex strategic games and captured public's imagination.",
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

                            <Card className="my-5 border-none shadow-none">
                                <CardContent className="px-0 xl:px-2">
                                    <div
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

export {Education};
