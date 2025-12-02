import {useMediaQuerySize} from "@/hooks/useMediaQuerySize.tsx";
import {Cloud, CodeXml, InfinityIcon} from "lucide-react";
import {OrbitingCircles} from "@/components/ui/orbiting-circles.tsx";
import {cn} from "@/lib/utils.ts";
import {
    SiAngular,
    SiAnsible,
    SiArgo,
    SiDocker,
    SiExpress,
    SiGithub,
    SiGitlab,
    SiGnubash,
    SiGrafana,
    SiHelm,
    SiJavascript,
    SiJenkins,
    SiKubernetes,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPrometheus,
    SiQemu,
    SiReact,
    SiSpring,
    SiTekton,
    SiTerraform,
    SiTypescript,
    SiVagrant,
    SiVault,
    SiVmware
} from "react-icons/si";
import {useState} from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {AnimatePresence, motion} from "motion/react";
import {FaAws, FaDev} from "react-icons/fa6";
import {VscAzure} from "react-icons/vsc";
import MultiChoicesButton from "@/components/ui/multi-choices-button.tsx";

const Skills = () => {
    const {isLG} = useMediaQuerySize()

    const tabs = [
        {
            name: 'DevOps',
            value: 'devops',
            icon: InfinityIcon,
            content: (
                <>
                    <div className={"flex flex-col gap-2 mb-10 lg:mb-0"}>
                        <h2 className={"text-2xl font-semibold md:text-3xl lg:text-4xl"}>Build, Automate & Deliver</h2>
                        <p className={"text-muted-foreground"}>I design fast, reliable, and scalable CI/CD pipelines
                            using modern DevOps tools to streamline software delivery.</p>
                        <div
                            className={"flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-muted py-6 px-0 lg:px-5 gap-5 rounded-lg mt-5 lg:mt-18"}>
                            <h4 className={"text-lg font-medium"}>Want to know more about me?</h4>
                            <MultiChoicesButton/>
                        </div>
                    </div>
                    <div
                        className="relative flex h-[350px] lg:h-[450px] w-full lg:flex-1/2 flex-col items-center justify-center overflow-visible">
                        <OrbitingCircles iconSize={isLG ? 70 : 50} radius={isLG ? 220 : 150}>
                            <div
                                className={cn("rounded-full bg-[#2496ED] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiDocker size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-foreground grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiGithub size={isLG ? 25 : 15} className={"text-background"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#FFEC6E] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiVault size={isLG ? 25 : 15} color={"black"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#FC6D26] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiGitlab size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#326CE5] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiKubernetes size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#E6522C] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiPrometheus size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#F46800] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiGrafana size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                        </OrbitingCircles>
                        <div
                            className={"size-20 lg:size-24 absolute bg-foreground rounded-full grid place-items-center text-background"}>
                            {/*<Infinity size={70}/>*/}
                            <InfinityIcon size={isLG ? 60 : 50}/>
                        </div>
                        <OrbitingCircles iconSize={isLG ? 150 : 50} radius={isLG ? 120 : 80} reverse>
                            <div
                                className={cn("rounded-full bg-[#D24939] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiJenkins size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            {/*<Icons.jenkins/>*/}
                            <div
                                className={cn("rounded-full bg-[#FD495C] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiTekton size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#0F1689] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiHelm size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#EF7B4D] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiArgo size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                        </OrbitingCircles>
                    </div>
                </>
            )
        },
        {
            name: 'Cloud & Infra',
            value: 'cloudAndInfra',
            icon: Cloud,
            content: (
                <>
                    <div className={"flex flex-col gap-2 mb-10 lg:mb-0"}>
                        <h2 className={"text-2xl font-semibold md:text-3xl lg:text-4xl"}>Secure, Scalable &
                            Cloud-Ready</h2>
                        <p className={"text-muted-foreground"}>I create and manage robust cloud infrastructures,
                            leveraging automation and IaC to ensure performance and reliability.</p>
                        <div
                            className={"flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-muted py-6 px-0 lg:px-5 gap-5 rounded-lg mt-5 lg:mt-18"}>
                            <h4 className={"text-lg font-medium"}>Want to know more about me?</h4>
                            <MultiChoicesButton defaultSelected={"1"}/>
                        </div>
                    </div>
                    <div
                        className="relative flex h-[350px] lg:h-[450px] w-full flex-col items-center justify-center overflow-visible lg:flex-1/2">
                        <OrbitingCircles iconSize={isLG ? 70 : 50} radius={isLG ? 220 : 150}>
                            <div
                                className={cn("rounded-full bg-[#4EAA25] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiGnubash size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#FCC624] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiLinux size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#ff9900] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <FaAws size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#0883ff] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <VscAzure size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#844FBA] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiTerraform size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#EE0000] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiAnsible size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                        </OrbitingCircles>
                        <div
                            className={"size-20 lg:size-24 absolute bg-foreground rounded-full grid place-items-center text-background"}>
                            {/*<Infinity size={70}/>*/}
                            <Cloud size={isLG ? 60 : 50}/>
                        </div>
                        <OrbitingCircles iconSize={isLG ? 150 : 50} radius={isLG ? 120 : 80} reverse>
                            <div
                                className={cn("rounded-full bg-[#1868F2] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiVagrant size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            {/*<Icons.jenkins/>*/}
                            <div
                                className={cn("rounded-full bg-[#FF6600] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiQemu size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#607078] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiVmware size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                        </OrbitingCircles>
                    </div>
                </>
            )
        },
        {
            name: 'Development',
            value: 'development',
            icon: CodeXml,
            content: (
                <>
                    <div className={"flex flex-col gap-2 mb-10 lg:mb-0"}>
                        <h2 className={"text-2xl font-semibold md:text-3xl lg:text-4xl"}>Clean Code & Smart
                            Solutions</h2>
                        <p className={"text-muted-foreground"}>I develop responsive, efficient, and scalable
                            applications using modern frameworks and best engineering practices.</p>
                        <div
                            className={"flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-muted py-6 px-0 lg:px-5 gap-5 rounded-lg mt-5 lg:mt-18"}>
                            <h4 className={"text-lg font-medium"}>Want to know more about me?</h4>
                            <MultiChoicesButton defaultSelected={"2"}/>
                        </div>
                    </div>
                    <div
                        className="relative flex h-[350px] lg:h-[450px] w-full flex-col items-center justify-center overflow-visible lg:flex-1/2">
                        <OrbitingCircles iconSize={isLG ? 70 : 50} radius={isLG ? 220 : 150}>
                            <div
                                className={cn("rounded-full bg-[#F7DF1E] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiJavascript size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#3178C6] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiTypescript size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#61DAFB] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiReact size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#de0837] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiAngular size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#6DB33F] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiSpring size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-foreground grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiExpress size={isLG ? 25 : 15} className={"text-background"}/>
                            </div>
                        </OrbitingCircles>
                        <div
                            className={"size-20 lg:size-24 absolute bg-foreground rounded-full grid place-items-center text-background"}>
                            {/*<Infinity size={70}/>*/}
                            <FaDev size={isLG ? 50 : 40}/>
                        </div>
                        <OrbitingCircles iconSize={isLG ? 70 : 50} radius={isLG ? 120 : 80} reverse>
                            <div
                                className={cn("rounded-full bg-[#4479A1] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiMysql size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            {/*<Icons.jenkins/>*/}
                            <div
                                className={cn("rounded-full bg-[#4169E1] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiPostgresql size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                            <div
                                className={cn("rounded-full bg-[#47A248] grid place-items-center", isLG ? "size-14" : "size-10")}>
                                <SiMongodb size={isLG ? 25 : 15} color={"white"}/>
                            </div>
                        </OrbitingCircles>
                    </div>
                </>
            )
        },
    ]

    const [activeTab, setActiveTab] = useState('devops')


    return (
        <section id={"skills"} className={"py-10 lg:py-24"}>
            <div className="container">
                <h2 className="mb-3 text-neutral-950 mb-10 text-3xl font-bold tracking-tighter sm:text-6xl dark:text-neutral-50">Skills</h2>
                <Tabs value={activeTab} onValueChange={setActiveTab} className='flex justify-between'>
                    <TabsList className='h-fit gap-2 rounded-xl p-1 w-56'>
                        {tabs.map(({icon: Icon, name, value}) => {
                            const isActive = activeTab === value

                            return (
                                <motion.div
                                    key={value}
                                    layout
                                    className={cn(
                                        'flex h-8 items-center justify-center overflow-hidden rounded-md w-full',
                                        isActive ? 'flex-1' : 'flex-none'
                                    )}
                                    onClick={() => setActiveTab(value)}
                                    initial={false}
                                    animate={{
                                        width: isActive ? 120 : 32
                                    }}
                                    transition={{
                                        type: 'tween',
                                        stiffness: 400,
                                        damping: 25
                                    }}
                                >
                                    <TabsTrigger value={value} asChild>
                                        <motion.div
                                            className='flex h-8 w-full items-center justify-center cursor-pointer'
                                            animate={{filter: 'blur(0px)'}}
                                            exit={{filter: 'blur(2px)'}}
                                            transition={{duration: 0.25, ease: 'easeOut'}}
                                        >
                                            <Icon className='aspect-square size-4 shrink-0'/>
                                            <AnimatePresence initial={false}>
                                                {isActive && (
                                                    <motion.span
                                                        className='font-medium'
                                                        initial={{opacity: 0, scaleX: 0.8}}
                                                        animate={{opacity: 1, scaleX: 1}}
                                                        transition={{duration: 0.25, ease: 'easeOut'}}
                                                        style={{originX: 0}}
                                                    >
                                                        {name}
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </TabsTrigger>
                                </motion.div>
                            )
                        })}
                    </TabsList>

                    {tabs.map(tab => (
                        <TabsContent key={tab.value} value={tab.value}
                                     className={"flex flex-col lg:flex-row justify-center items-center w-full lg:gap-52 mt-5"}>
                            {tab.content}

                            {/*<p className='text-neutral-500 text-sm dark:text-neutral-400'>{tab.content}</p>*/}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}

export default Skills
