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

                "pal-black": "var(--pal-black)",
                "pal-red": "var(--pal-red)",
                "pal-white": "var(--pal-white)",
                "pal-brown": "var(--pal-brown)",
                "pal-green": "var(--pal-green)",
                "pal-blue": "var(--pal-blue)",
                "pal-darkblue": "var(--pal-darkblue)",
                "pal-peru": "var(--pal-peru)",
            },
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    },
} satisfies Config;
