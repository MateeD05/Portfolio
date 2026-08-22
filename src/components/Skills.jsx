import { skills } from "../data/cvData";
import styles from "../styles/skills.module.css";

export default function Skills() {
  return (
    <section className={styles.section} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={styles.heading}>
        Habilidades técnicas
      </h2>
      <ul className={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.chip}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
