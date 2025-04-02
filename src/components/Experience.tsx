import { EXPERIENCE } from "@/data/experience";
import styles from "@/styles/Experience.module.scss";

export default function Experience() {
    return (
        <section>
            <h3>Experience</h3>
            <ol className={styles.timeline}>
                {EXPERIENCE.map((exp, index) => (
                    <li key={index} className="mb-8">
                        <h4 className="font-semibold">{exp.company}</h4>
                        {exp.role && (
                            <div className="text-pal-blue text-sm">
                                {exp.role}
                            </div>
                        )}
                        <div
                            className={`${styles.timeline__duration} text-sm my-1 font-semibold`}
                        >
                            {exp.duration}
                        </div>
                        <p className="mt-0">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2.5">
                            {exp.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="inline-flex bg-pal-green text-pal-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
            {/* <Link href="/experience">
                View all experience &raquo;
            </Link> */}
        </section>
    );
}
