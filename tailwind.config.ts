import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",

                "pal-red": "var(--pal-red)",
                "pal-white": "var(--pal-white)",
                "pal-brown": "var(--pal-brown)",
                "pal-green": "var(--pal-green)",
                "pal-blue": "var(--pal-blue)",

                "pal-darkblue": "var(--pal-darkblue)",
                "pal-peru": "var(--pal-peru)",
            },
        },
        container: {
            // you can configure the container to be centered
            center: true,

            // or have default horizontal padding
            padding: "1rem",

            // default breakpoints but with 40px removed
            screens: {
                sm: "600px",
                md: "728px",
                lg: "984px",
                xl: "1240px",
                "2xl": "1496px",
            },
        },
    },
    plugins: [],
} satisfies Config;
