import { useMediaQuery } from "@uidotdev/usehooks";

export const useMediaQuerySize = () => {
    const isSM = useMediaQuery("only screen and (max-width : 768px)");
    const isMD = useMediaQuery(
        "only screen and (min-width : 769px) and (max-width : 992px)"
    );
    const isLG = useMediaQuery(
        "only screen and (min-width : 993px)"
    );
    const isXL = useMediaQuery(
        "only screen and (min-width : 1201px)"
    );

    return {isSM, isMD, isLG, isXL}
};
