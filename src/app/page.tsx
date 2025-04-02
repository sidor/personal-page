import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import SKILLS from "@/data/skills";
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
                            {process.env.NEXT_PUBLIC_NAME}
                        </Link>
                    </h1>
                    <h2 className="bitter font-medium text-xl text-whote mt-2">
                        Software Engineer
                    </h2>
                    <div className="media flex flex-row gap-4 mt-6 md:mt-12 text-xl">
                        {process.env.NEXT_PUBLIC_LINKEDIN_PROFILE && (
                            <a
                                href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Opens linkedin profile (new tab)"
                            >
                                <FaLinkedin />
                            </a>
                        )}
                        {process.env.NEXT_PUBLIC_GITHUB_PROFILE && (
                            <a
                                href={process.env.NEXT_PUBLIC_GITHUB_PROFILE}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Opens github user profile (new tab)"
                            >
                                <FaGithub />
                            </a>
                        )}
                        {process.env.NEXT_PUBLIC_EMAIL && (
                            <a
                                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                                rel="noreferrer noopener"
                                aria-label="Opens your email client"
                            >
                                <FaEnvelope />
                            </a>
                        )}
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
        </div>
    );
}
