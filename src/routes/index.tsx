import { createFileRoute } from '@tanstack/react-router'
import {AnimatedNavbar} from "@/components/animated-navbar.tsx";
import {Hero} from "@/components/hero.tsx";
import {Experience} from "@/components/experience.tsx";
import {Certificates} from "@/components/certificates.tsx";
import {Gallery} from "@/components/gallery.tsx";
import Contact from "@/components/contact.tsx";
import {Footer} from "@/components/footer.tsx";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <AnimatedNavbar>
            <main>
                <Hero/>
                <Experience/>
                <Certificates/>
                <Gallery/>
                {/*<Content/>*/}
                <Contact/>
                <Footer/>
                {/*<Content1/>*/}
            </main>
        </AnimatedNavbar>
    )
}