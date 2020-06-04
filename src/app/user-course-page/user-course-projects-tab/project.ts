export interface Project {
    title: string; 
    image: string;
    description: string; //make sure that description is always a maximum of 200 words
}

export const MINIPROJECTS: Project[] = [
    {
        title: "Simple Server", 
        image: "../../assets/images/CoursePage/server.png", 
        description: "A server is a computer program or a device that provides functionality for other programs or devices, called clients.",
    },
    {
        title: "Angular Component", 
        image: "../../assets/images/CoursePage/angular.png", 
        description: "Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.",
    },
    {
        title: "Single Page Application", 
        image: "../../assets/images/CoursePage/SPA.png", 
        description: "An SPA is a web app/website that interacts with the web browser by dynamically rewriting the current web page with data from the web server.",
    },

]

export const COURSEPROJECTS: Project[] = [
    {
        title: "Online Notes Manager Webpage", 
        image: "../../assets/images/CoursePage/notes.png", 
        description: "A web page is a specific collection of information provided by a website and displayed to a user in a web browser.",
    },
]