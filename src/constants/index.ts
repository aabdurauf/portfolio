import {
    sass,
    npm,
    bootstrap,
    css,
    git,
    html,
    javascript,
    reactjs,
    tailwind,
    typescript,
    colorFlipper,
    portfolioRS,
    todoApp,
    lumiaClone,
    weatherApp,
    github,
    lofi,
    itransition
} from "../assets"


const navLinks = [
    {
        id: "about",
        title: "nav.about",
    },
    {
        id: "experience",
        title: "nav.experience",
    },
    {
        id: "projects",
        title: "nav.projects",
    },
    {
        id: "contact",
        title: "nav.contact",
    },
]

const technologies = [
    {
        name: "HTML",
        icon: html
    },
    {
        name: "CSS",
        icon: css
    },
    {
        name: "Scss",
        icon: sass
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Bootsrap",
        icon: bootstrap,
    },
    {
        name: "npm",
        icon: npm,
    },
    {
        name: "GitHub",
        icon: github,
    },
];

const experiences = [
    {
        title: "experience.experiences.itransition.title",
        company_name: "experience.experiences.itransition.company_name",
        icon: itransition,
        date: "experience.experiences.itransition.date",
        points: [
            "experience.experiences.itransition.points.0",
            "experience.experiences.itransition.points.1"
        ]
    }
]

const projects = [
    {
        name: "projects.projectCards.lofi.title",
        deploy: "https://lofi-five-sigma.vercel.app/",
        description: "projects.projectCards.lofi.description",
        tags: [
            {
                name: "next",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "rtk",
                color: "green-text-gradient",
            },
        ],
        image: lofi,
        source_code_link: "https://github.com/aabdurauf/lofi",
    },
    {
        name: "projects.projectCards.lumia.title",
        deploy: "https://aabdurauf.github.io/lumia-clone/",
        description: "projects.projectCards.lumia.description",
        tags: [
            {
                name: "html",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
        ],
        image: lumiaClone,
        source_code_link: "https://github.com/aabdurauf/lumia-clone",
    },
    {
        name: "projects.projectCards.weather.title",
        deploy: "https://weather-app-aabdurauf.netlify.app/",
        description: "projects.projectCards.weather.description",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
        ],
        image: weatherApp,
        source_code_link: "https://github.com/aabdurauf/weather-app/",
    },
    {
        name: "projects.projectCards.todo.title",
        deploy: "https://todo-app-aabdurauf.netlify.app/",
        description: "projects.projectCards.todo.description",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "blue-text-gradient",
            },
            {
                name: "less",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
        ],
        image: todoApp,
        source_code_link: "https://github.com/aabdurauf/todo-app",
    },
    {
        name: "projects.projectCards.rsCV.title",
        deploy: "https://aabdurauf.github.io/rsschool-cv/",
        description: "projects.projectCards.rsCV.description",
        tags: [
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
        ],
        image: portfolioRS,
        source_code_link: "https://github.com/aabdurauf/rsschool-cv",
    },
    {
        name: "projects.projectCards.colorGen.title",
        deploy: "https://aabdurauf.github.io/random-color-generator/",
        description: "projects.projectCards.colorGen.description",
        tags: [
            {
                name: "html",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: colorFlipper,
        source_code_link: "https://github.com/aabdurauf/random-color-generator",
    },
]


export { navLinks, technologies, projects, experiences }
