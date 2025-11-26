import { useMediaQuery } from "@uidotdev/usehooks";

export const useMaxLogos = () => {
    const isMD = useMediaQuery("(min-width: 768px)");

    if (isMD) return 8;
    return 3;
};
