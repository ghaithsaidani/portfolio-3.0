import {createFileRoute} from '@tanstack/react-router'
import {Project} from "@/components/project.tsx";
import {singleProjects} from "@/const/projects.ts";


export const Route = createFileRoute('/projects/$index')({
    component: RouteComponent,
})

function RouteComponent() {
    const {index} = Route.useParams()
    const projectIndex = Number(index) - 1
    const project = singleProjects[projectIndex]

    if (!project) return <div>Project not found</div>

    return <Project name={project.name} image={project.image}/>
}
