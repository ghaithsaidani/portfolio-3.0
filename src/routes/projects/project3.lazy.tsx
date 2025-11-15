import { createLazyFileRoute } from '@tanstack/react-router'
import {Project} from "@/components/project.tsx";

export const Route = createLazyFileRoute('/projects/project3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Project name={"Third Project"}/>
}
