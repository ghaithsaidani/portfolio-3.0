import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarLogo,
    NavBody,
    NavItems,
} from "@/components/ui/resizable-navbar";
import {type ReactNode, useState} from "react";
import {AnimatedThemeToggler} from "@/components/ui/animated-theme-toggler.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {MonitorIcon, MoonIcon, SunIcon} from "lucide-react";

interface NavProps {
    name: string
    link: string;
}

const AnimatedNavbar = ({children}: { children: ReactNode }) => {
    const navItems: NavProps[] = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Projects",
            link: "/",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo/>
                    <NavItems items={navItems}/>
                    <AnimatedThemeToggler className={"z-20"}/>
                    {/*<div className="flex items-center gap-4">

                        <NavbarButton variant="primary">Book a call</NavbarButton>
                    </div>*/}
                    {/*<NavbarButton></NavbarButton>*/}
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo/>
                        <div className={"flex gap-5 items-center justify-center"}>
                            <AnimatedThemeToggler className={"z-20"}/>
                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </div>

                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        {/*<div className="flex w-full flex-col gap-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-label="Select theme" size="icon" variant="outline">
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="min-w-32">
                                    <DropdownMenuItem>
                                        <SunIcon aria-hidden="true" className="opacity-60" size={16}/>
                                        <span>Light</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <MoonIcon aria-hidden="true" className="opacity-60" size={16}/>
                                        <span>Dark</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <MonitorIcon aria-hidden="true" className="opacity-60" size={16}/>
                                        <span>System</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>*/}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            {children}
        </div>
    );
}

export default AnimatedNavbar;


