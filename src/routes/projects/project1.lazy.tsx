import {createLazyFileRoute} from '@tanstack/react-router'
import {Project} from "@/components/project.tsx";
import {Kubepilot} from "@/assets";

export const Route = createLazyFileRoute('/projects/project1')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Project name={"First Project"} image={Kubepilot}/>
}
