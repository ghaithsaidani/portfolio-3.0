import {createFileRoute} from '@tanstack/react-router'
import {Certificates, Contact, Education, Experience, Footer, Hero, Projects, Skills} from "@/components";
import {Suspense} from "react";


export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <Suspense fallback={<main/>}>
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
        </Suspense>
    )
}