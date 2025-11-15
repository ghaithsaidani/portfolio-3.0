import { createLazyFileRoute } from '@tanstack/react-router'
import {Project} from "@/components/project.tsx";

export const Route = createLazyFileRoute('/projects/project2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Project name={"Second Project"}/>
}
