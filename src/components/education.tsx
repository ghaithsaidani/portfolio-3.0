import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FSB, LJFB, Marburg, Sesame } from "@/assets";
import { useTranslation } from "react-i18next";

type University = {
    key: string;
    logo: string;
};

const educationsData: University[] = [
    { key: "marburg", logo: Marburg },
    { key: "sesame", logo: Sesame },
    { key: "fsb", logo: FSB },
    { key: "ljfb", logo: LJFB },
];

const Education = () => {
    const { t } = useTranslation("education");

    return (
        <section id="education" className="bg-white py-32 dark:bg-neutral-950">
            <div className="container">
                <h1 className="text-neutral-950 mb-10 text-center text-3xl font-bold tracking-tighter sm:text-6xl dark:text-neutral-50">
                    {t("title")}
                </h1>

                <div className="relative mx-auto max-w-4xl">
                    <Separator
                        orientation="vertical"
                        className="bg-neutral-100 absolute left-2 top-4 dark:bg-neutral-800"
                    />

                    {educationsData.map((entry, index) => (
                        <div key={index} className="relative mb-10 pl-8">
                            <div className="bg-neutral-950 absolute left-0 top-3.5 flex size-4 items-center justify-center rounded-full dark:bg-neutral-50" />

                            <div className="flex">
                                <img src={entry.logo} className="h-12" />
                                <div className="flex flex-col ml-4">
                                    <h4 className="text-xl font-bold tracking-tight">
                                        {t(`${entry.key}.name`)}
                                    </h4>
                                    <h6 className="text-muted-foreground">
                                        {t(`${entry.key}.degree`)}
                                    </h6>
                                </div>
                            </div>

                            <h5 className="text-md -left-34 text-neutral-500 top-3 rounded-xl tracking-tight xl:absolute dark:text-neutral-400">
                                {t(`${entry.key}.date`)}
                            </h5>

                            <Card className="my-5 border-none shadow-none bg-transparent">
                                <CardContent className="px-0 xl:px-2">
                                    <p
                                        className="prose dark:prose-invert text-neutral-950 dark:text-neutral-50"
                                        dangerouslySetInnerHTML={{ __html: t(`${entry.key}.content`) }}
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
