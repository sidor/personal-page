export const SKILLS = {
    frontend: {
        javascript: "JavaScript",
        typescript: "TypeScript",
        react: "React",
        vue: "Vue.js",
        next: "Next.js",
        gatsby: "Gatsby",
        tailwind: "Tailwind CSS",
        sass: "Sass",
        styledComponents: "Styled Components",
        seo: "SEO Optimization",
        storyBook: "Storybook",
    },
    backend: {
        node: "Node.js",
        laravel: "Laravel",
        php: "PHP",
        graphql: "GraphQL",
        mongo: "MongoDB",
        mysql: "MySQL",
    },
    testing: {
        jest: "Jest",
        mocha: "Mocha",
        karma: "Karma",
    },
    tools: {
        jira: "Jira",
        figma: "Figma",
        firebase: "Firebase",
        vercel: "Vercel",
        github: "GitHub",
        bitbucket: "Bitbucket",
    },
    methodologies: {
        agile: "Agile",
        kanban: "Kanban",
        scrum: "Scrum",
    },
};

export const EXPERIENCE = [
    {
        company: "Self-Employed",
        role: "Gun for hire",
        duration: "2023 - Present",
        description:
            "Supporting start-ups by creating great web applications. Key projects — Kavo, Sneakit.",
        skills: [
            SKILLS.frontend.react,
            SKILLS.frontend.vue,
            SKILLS.frontend.tailwind,
            SKILLS.backend.node,
            SKILLS.backend.laravel,
        ],
    },
    {
        company: "Miracl GmbH",
        role: "Senior Software Engineer",
        duration: "2021 - 2023",
        description:
            "Led the development of a product website and survey with mortgage comparison tool, which presented financing options from multiple banks. Focused on optimizing user engagement, iterating the user flow to encourage data input for a seamless loan process.",
        skills: [
            SKILLS.frontend.react,
            SKILLS.frontend.gatsby,
            SKILLS.frontend.styledComponents,
            SKILLS.backend.graphql,
            SKILLS.backend.node,
            SKILLS.tools.firebase,
        ],
    },
    {
        company: "TREAM Limited",
        role: "Senior Software Engineer",
        duration: "2018 - 2021",
        description:
            "Developed a subscription-based fitness video platform with shared income for trainers from around the world.",
        skills: [
            SKILLS.frontend.next,
            SKILLS.frontend.styledComponents,
            SKILLS.frontend.storyBook,
            SKILLS.backend.mongo,
            SKILLS.backend.node,
        ],
    },
];
