import {createFileRoute} from '@tanstack/react-router'
import {Certificates, Contact, Education, Experience, Footer, Hero, Projects, Skills} from "@/components";


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
            <Skills/>
            <Certificates/>

            {/*<Content/>*/}
            <Contact/>
            <Footer/>
            {/*<Content1/>*/}
        </main>
    )
}