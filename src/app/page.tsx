import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SKILLS } from "@/data/experience";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="container pt-14">
                <header className="side">
                    <h1 className="text-pal-brown">
                        <Link
                            href="/"
                            title="Go to homepage"
                            aria-label="Go to homepage"
                        >
                            Jakub Sidorowicz
                        </Link>
                    </h1>
                    <h2 className="bitter font-medium text-xl text-whote mt-2">
                        Software Engineer
                    </h2>
                    <div className="media flex flex-row gap-4 mt-6 md:mt-12 text-xl">
                        <a
                            href="https://www.linkedin.com/in/sidorowicz/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Opens linkedin profile (new tab)"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/sidor/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Opens github user profile (new tab)"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:jakub@sidorowi.cz"
                            rel="noreferrer noopener"
                            aria-label="Opens your email client"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </header>
                <main className="main">
                    <section>
                        <h3>About me</h3>
                        <p>
                            I&apos;m a passionate and results-driven developer,
                            living in Vienna,{" "}
                            <a
                                href="https://www.austria.info/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Repository of this page (new tab)"
                            >
                                Austria
                            </a>
                            . I began my career in advertising agencies, where I
                            established myself as a passionate and dedicated Web
                            developer. After few years my{" "}
                            <Link href="/experience">developer career</Link> led
                            me into the start-up scene. With a strong motivation
                            to solve real-world problems — I specialize in
                            building scalable web applications for high traffic.
                        </p>
                        <p>
                            A strong advocate for{" "}
                            <a
                                href="https://www.agilealliance.org/agile101/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="What is Agile? (new tab)"
                            >
                                {SKILLS.methodologies.agile}
                            </a>{" "}
                            methodologies, I thrive in fast-paced, collaborative
                            environments and continuously seek innovative and
                            efficient solutions. A regular attendee of developer
                            conferences — always exploring new technologies. In
                            my free time I enjoy climbing, skiing and other
                            sports like yoga or running.
                        </p>
                    </section>
                    <Experience />
                </main>
            </div>

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
                            {SKILLS.frontend.next}
                        </a>
                        ,{" "}
                        <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Tailwind CSS (new tab)"
                        >
                            {SKILLS.frontend.tailwind}
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://sass-lang.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Sass CSS extension (new tab)"
                        >
                            {SKILLS.frontend.sass}
                        </a>
                        . Deployed on {SKILLS.tools.vercel}.
                        {/*Feel free to use
                        the public{" "}
                        <a
                            href="https://github.com/sidor/personal"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Repository of this page (new tab)"
                        >
                            repository
                        </a>{" "}
                        on Github.*/}
                    </div>
                </main>
                <div className="side relative">
                    <div className="overflow-hidden w-full">
                        <div className="city"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
