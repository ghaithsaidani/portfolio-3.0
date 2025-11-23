import { useMediaQuery } from "@uidotdev/usehooks";

export const useMaxLogos = () => {
    const is2XL = useMediaQuery("(min-width: 1536px)");
    const isMD = useMediaQuery("(min-width: 768px)");

    if (is2XL) return 10;
    if (isMD) return 8;
    return 3;
};
