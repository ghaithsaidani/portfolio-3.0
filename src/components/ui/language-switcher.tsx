import {useId} from "react";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {useTranslation} from "react-i18next";

const languages = [
    {flag: "🇬🇧", label: "English", value: "en"},
    {flag: "🇩🇪", label: "German", value: "de"},
    {flag: "🇫🇷", label: "French", value: "fr"}
];

export default function LanguageSwitcher() {
    const id = useId();
    const {i18n} = useTranslation();
    return (
        <div className="*:not-first:mt-2">
            <Select defaultValue={i18n.language}
                    onValueChange={(value) => i18n.changeLanguage(value)}>
                <SelectTrigger
                    className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-neutral-500/80 dark:[&>span_svg]:text-neutral-400/80 focus:!ring-0 focus:!border-border"
                    id={id}
                >
                    <SelectValue placeholder="Select Language"/>
                </SelectTrigger>
                <SelectContent
                    className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-neutral-500/80 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 dark:[&_*[role=option]>span>svg]:text-neutral-400/80">
                    {languages.map((language) => (
                        <SelectItem key={language.value} value={language.value}
                                    onSelect={() => i18n.changeLanguage(language.value)}>
                            <span className="text-lg leading-none">{language.flag}</span>{""}
                            {/*<span className="truncate">{language.label}</span>*/}
                        </SelectItem>
                    ))}

                </SelectContent>
            </Select>
        </div>
    );
}
