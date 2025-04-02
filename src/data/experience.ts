import SKILLS from "./skills";

const EXPERIENCE = [
    {
        company: "Self-Employed",
        duration: "2023 - Present",
        description:
            "Supporting start-ups by creating great web applications. Key projects: Sneakit — marketplace for buying and reselling limited edition sneakers using Laravel and Vue, Kavo — React application to manage large shop orders from a Discord channel, utilizing AI to manage data inputs and match buyers and sellers",
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
            SKILLS.tools.stripe,
            SKILLS.backend.mongo,
            SKILLS.backend.node,
        ],
    },
];

export default EXPERIENCE;
