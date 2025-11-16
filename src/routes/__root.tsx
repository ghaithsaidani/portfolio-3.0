import {createRootRoute, Outlet} from "@tanstack/react-router";
import {ThemeProvider} from "@/providers/theme-provider.tsx";


const RootLayout = () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet/>
        {/*<TanStackRouterDevtools />*/}
    </ThemeProvider>
)

export const Route = createRootRoute({
    component: RootLayout,
})