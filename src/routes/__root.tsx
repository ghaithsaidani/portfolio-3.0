import {createRootRoute, Outlet} from "@tanstack/react-router";
import {ThemeProvider} from "@/providers/theme-provider.tsx";
import {AnimatedNavbar} from "@/components";
import {Toaster} from "@/components/ui/sonner";

const RootLayout = () => (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AnimatedNavbar>
            <Outlet/>
            {/*<TanStackRouterDevtools />*/}
        </AnimatedNavbar>
        <Toaster position={"bottom-right"}/>
    </ThemeProvider>

)

export const Route = createRootRoute({
    component: RootLayout,
})