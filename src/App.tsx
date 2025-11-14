import {AnimatedNavbar} from "@/components/animated-navbar.tsx";
import {ThemeProvider} from "@/providers/theme-provider.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AnimatedNavbar/>
        </ThemeProvider>
    )
}

export default App
