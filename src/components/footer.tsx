import {Button} from "@/components/ui/button.tsx";
import {LuGithub, LuLinkedin} from "react-icons/lu";
import {SiNotion} from "react-icons/si";


const YEAR = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="pb-8">
            <div className="container mx-auto">
                <div
                    className="flex flex-row flex-wrap items-center !justify-center gap-x-10 gap-y-2 md:!justify-between">
                    <p className="text-foreground text-center text-sm font-medium">
                        All rights reserved. Copyright &copy; {YEAR} Ghaith Saidani.
                    </p>
                    <div className="flex gap-1">
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a href="https://www.linkedin.com/in/ghaithsaidani/" aria-label="linkedin" target="_blank">
                                <LuLinkedin className="h-4 w-4"/>
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a href="https://github.com/ghaithsaidani" aria-label="GitHub" target="_blank">
                                <LuGithub className="h-4 w-4"/>
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                            <a href="https://www.notion.so/marketplace/profiles/ghaithsaidani" aria-label="notion"
                               target="_blank">
                                <SiNotion className="h-4 w-4"/>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
