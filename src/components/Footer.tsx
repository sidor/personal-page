export default function Footer() {
    return (
        <div className="container container--footer md:flex-row-reverse md:gap-24 mt-auto">
            <main className="main">
                <div className="md:max-w-md opacity-60 text-sm pb-2 xl:pb-3 leading-5">
                    Made with love in Vienna using{" "}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Next.js (new tab)"
                    >
                        Next.js
                    </a>
                    ,{" "}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Tailwind CSS (new tab)"
                    >
                        Tailwind CSS
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://sass-lang.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Sass CSS extension (new tab)"
                    >
                        Sass
                    </a>
                    . Deployed on Vercel. Feel free to use the public{" "}
                    <a
                        href="https://github.com/sidor/personal"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Repository of this page (new tab)"
                    >
                        repository
                    </a>{" "}
                    on Github.
                </div>
            </main>
            <div className="side relative">
                <div className="overflow-hidden w-full">
                    <div className="city"></div>
                </div>
            </div>
        </div>
    );
}
