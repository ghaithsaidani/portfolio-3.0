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
import {Link} from "@tanstack/react-router";
import {useTranslation} from "react-i18next";

interface NavProps {
    name: string;
    link: string;
}

const AnimatedNavbar = ({children}: { children: ReactNode }) => {
    const {t} = useTranslation();

    const navItems: NavProps[] = [
        {name: t("home"), link: "/#hero"},
        {name: t("projects"), link: "/#projects"},
        {name: t("contact"), link: "/#contact"}
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo/>

                    {/* PASS translated nav items */}
                    <NavItems items={navItems}/>

                    <div className="z-30 flex gap-5">
                        {/*<LanguageSwitcher/>*/}
                        <AnimatedThemeToggler className="z-20"/>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo/>
                        <div className="flex gap-5 items-center justify-center">
                            {/*<LanguageSwitcher/>*/}
                            <AnimatedThemeToggler className="z-20"/>

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
                            <Link
                                key={`mobile-link-${idx}`}
                                to={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            {children}
        </div>
    );
};

export default AnimatedNavbar;
