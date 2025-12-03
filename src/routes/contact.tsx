import {createFileRoute} from '@tanstack/react-router'
import {Contact, Footer} from "@/components";

export const Route = createFileRoute('/contact')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <section className={"flex flex-col h-[90vh] gap-20 lg:justify-center"}>
            <Contact/>
            <Footer/>
        </section>
    )
}
