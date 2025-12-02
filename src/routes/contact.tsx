import {createFileRoute} from '@tanstack/react-router'
import {Contact, Footer} from "@/components";

export const Route = createFileRoute('/contact')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <section>
            <Contact/>
            <Footer/>
        </section>
    )
}
