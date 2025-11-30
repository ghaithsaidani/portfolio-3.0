import {createFileRoute} from '@tanstack/react-router'
import {Experience} from "@/components/experience.tsx";
import {Certificates} from "@/components/certificates.tsx";
import {Projects} from "@/components/projects.tsx";
import Contact from "@/components/contact.tsx";
import {Footer} from "@/components/footer.tsx";
import {Education} from "@/components/education.tsx";
import {Hero} from "@/components/hero.tsx";
import ExpandableTabsDemo from "@/components/shadcn-studio/tabs/tabs-28.tsx";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <main>
            <Hero/>
            <Experience/>
            <Education/>
            <Projects/>
            <ExpandableTabsDemo/>
            <Certificates/>

            {/*<Content/>*/}
            <Contact/>
            <Footer/>
            {/*<Content1/>*/}
        </main>
    )
}