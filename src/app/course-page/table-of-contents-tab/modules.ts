
export interface Modules{
    title: string; 
    submodules: string[];
}

export const MODULES : Modules[] = [
    {
        title: "Introduction and Architecture",
        submodules: [],
    },
    {
        title: "HTML Basics",
        submodules: [
            "Introduction and structure",
            "Basic Tags",
            "Images",
            "Tables",
            "Lists",
            "Forms",
            "Colours and Characters",
        ] 
    },
    {
        title: "CSS Basics",
        submodules: [
            "Introduction and structure",
            "Basics",
            "Selectors (Classes, ids etc.)",
            "Display Types (Flex, inline etc.)",
            "Colours",            
        ] 
    },
]