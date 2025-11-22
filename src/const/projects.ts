import type {ProjectItem, ProjectPageProps} from "@/types/project.ts";
import {
    AmanaInsurances,
    CloudWebAppBuilder,
    ConfledisInternship,
    HRIndustries,
    InfogeranceInternship,
    Kubepilot,
    MicroservicesProvision,
    MondeEnBouche,
    PDS,
    Portfolio2,
    XsustainInternship
} from "@/assets";

const singleProjects: ProjectPageProps[] = [
    {name: "1st Project", image: Kubepilot},
    {name: "2nd Project", image: MicroservicesProvision},
    {name: "3rd Project", image: PDS},
    {name: "4th Project", image: CloudWebAppBuilder},
    {name: "5th Project", image: HRIndustries},
    {name: "6th Project", image: XsustainInternship},
    {name: "7th Project", image: MondeEnBouche},
    {name: "8th Project", image: Portfolio2},
    {name: "9th Project", image: AmanaInsurances},
    {name: "10th Project", image: ConfledisInternship},
    {name: "11th Project", image: InfogeranceInternship},
]


const projects: ProjectItem[] = [
    {
        id: "item-1",
        title: "Build Modern UIs",
        summary:
            "Create stunning user interfaces with our comprehensive design system.",
        url: "/projects/$index",
        params: {index: "1"},
        image: Kubepilot,
    },
    {
        id: "item-2",
        title: "Computer Vision Technology",
        summary:
            "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
        url: "/projects/$index",
        params: {index: "2"},
        image: MicroservicesProvision,
    },
    {
        id: "item-3",
        title: "Machine Learning Automation",
        summary:
            "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
        url: "/projects/$index",
        params: {index: "3"},
        image: PDS,
    },
    {
        id: "item-4",
        title: "Predictive Analytics",
        summary:
            "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
        url: "/projects/$index",
        params: {index: "4"},
        image: CloudWebAppBuilder,
    },
    {
        id: "item-5",
        title: "Neural Network Architecture",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "5"},
        image: HRIndustries,
    },
    {
        id: "item-6",
        title: "Neural Network Architecture",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "6"},
        image: XsustainInternship,
    },
    {
        id: "item-7",
        title: "Neural Network Architecture",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "7"},
        image: MondeEnBouche,
    },
    {
        id: "item-8",
        title: "Neural Network Architecture",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "8"},
        image: Portfolio2,
    },
    {
        id: "item-9",
        title: "Neural Network Architecture",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "9"},
        image: AmanaInsurances,
    },
    {
        id: "item-10",
        title: "Neural Network Architecture",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "10"},
        image: ConfledisInternship,
    },
    {
        id: "item-11",
        title: "Neural Network Architecture",
        summary:
            "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
        url: "/projects/$index",
        params: {index: "11"},
        image: InfogeranceInternship,
    },
]

export {singleProjects, projects}