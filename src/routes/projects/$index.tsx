import {createFileRoute} from '@tanstack/react-router'
import {singleProjects} from "@/const/single-projects-pages.tsx";
import {SingleProject} from "@/components/single-project.tsx";


export const Route = createFileRoute('/projects/$index')({
    component: RouteComponent,
})

function RouteComponent() {
    const {index} = Route.useParams()
    const projectIndex = Number(index) - 1
    const project = singleProjects[projectIndex]

    if (!project) return <div>Project not found</div>

    return <SingleProject {...project}/>
}
