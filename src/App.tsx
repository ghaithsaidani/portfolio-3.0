import {NavbarDemo} from "@/components/NavbarDemo.tsx";
import {ThemeProvider} from "@/providers/theme-provider.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <NavbarDemo/>
        </ThemeProvider>
    )
}

export default App
