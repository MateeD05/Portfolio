import { skills } from "../data/cvData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/skills.module.css";

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section
      className={`${styles.section} fade-in`}
      aria-labelledby="skills-heading"
      ref={ref}
    >
      <h2 id="skills-heading" className="section-heading">
        Habilidades técnicas
      </h2>
      <ul className={styles.list}>
        {skills.map((skill) => (
          <li key={skill} className={styles.chip}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
