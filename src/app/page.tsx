import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="container flex flex-col">
                <div className="flex justify-between gap-12 pt-14">
                    <header className="">
                        <h1 className="text-pal-brown">Jakub Sidorowicz</h1>

                        <p className="bitter font-medium text-xl text-whote mt-2">
                            Software Engineer
                        </p>
                        <div className="flex flex-row gap-4 mt-12 text-pal-blue text-xl">
                            <FaLinkedin />
                            <FaGithub />
                            <FaEnvelope />
                        </div>
                    </header>
                    <div className="max-w-3xl">
                        <section>
                            <h3>About me</h3>
                            <div className="leading-7">
                                <p>
                                    I&apos;m a passionate and results-driven
                                    developer, living in Vienna, Austria. I
                                    began my{" "}
                                    <Link href="/experience">career</Link> in
                                    advertising agencies, where I established
                                    myself as a passionate and dedicated Web
                                    developer. After few years my career led me
                                    into the start-up scene. With a strong
                                    motivation to solve real-world problems — I
                                    specialize in building scalable web
                                    applications for high traffic.
                                </p>
                                <p>
                                    A strong advocate for agile methodologies, I
                                    thrive in fast-paced, collaborative
                                    environments and continuously seek
                                    innovative and efficient solutions. A
                                    regular attendee of developer conferences —
                                    always exploring new technologies. Iny my
                                    free time I enjoy climbing, skiing and other
                                    sports like yoga or running.
                                </p>
                            </div>
                        </section>
                        <section>
                            <h3>Experience</h3>
                            <ol>
                                <li></li>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
            <div className="mt-auto flex justify-center items-end overflow-hidden">
                <div className="w-1/2 flex items-end justify-end">
                    <div className="city"></div>
                </div>
                <div className="w-1/2 text-pal-white text-sm pl-7 pb-4 opacity-70">
                    <div className="max-w-md">
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
                        and Sass. Deployed on Vercel. Feel free to check the
                        public{" "}
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
                </div>
            </div>
            {/* <footer className="bg-pal-white text-pal-darkblue py-4">
                <div className="container">&copy; 2025 Jakub Sidorowicz</div>
            </footer> */}
        </div>
    );
}
