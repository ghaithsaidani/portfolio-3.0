import { createFileRoute } from '@tanstack/react-router'
import {Content} from "@/components/content.tsx";

export const Route = createFileRoute('/project1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Content/>
}
