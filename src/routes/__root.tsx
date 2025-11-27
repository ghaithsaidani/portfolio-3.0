import {createRootRoute, Outlet} from "@tanstack/react-router";
import {ThemeProvider} from "@/providers/theme-provider.tsx";
import {AnimatedNavbar} from "@/components/animated-navbar.tsx";


const RootLayout = () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AnimatedNavbar>
            <Outlet/>
            {/*<TanStackRouterDevtools />*/}
        </AnimatedNavbar>
    </ThemeProvider>
)

export const Route = createRootRoute({
    component: RootLayout,
})