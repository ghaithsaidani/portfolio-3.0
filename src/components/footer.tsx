import {Button} from "@/components/ui/button.tsx";
import {LuGithub, LuInstagram, LuTwitter, LuYoutube} from "react-icons/lu";


const YEAR = new Date().getFullYear()

export function Footer() {
    return (
        <footer className="pt-16 pb-8">
            <div className="container mx-auto">
                <div
                    className="flex flex-row flex-wrap items-center !justify-center gap-x-10 gap-y-2 md:!justify-between">
                    <p className="text-foreground text-center text-sm font-medium">
                        All rights reserved. Copyright &copy; {YEAR} Ghaith Saidani.
                    </p>
                    <div className="flex gap-1">
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a href="#" aria-label="Twitter">
                                <LuTwitter className="h-4 w-4"/>
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a href="#" aria-label="YouTube">
                                <LuYoutube className="h-4 w-4"/>
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a href="#" aria-label="Instagram">
                                <LuInstagram className="h-4 w-4"/>
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a href="#" aria-label="GitHub">
                                <LuGithub className="h-4 w-4"/>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
