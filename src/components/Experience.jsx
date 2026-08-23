import { experience } from "../data/cvData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/experience.module.css";

export default function Experience() {
  const ref = useScrollAnimation();

  return (
    <section
      className={`${styles.section} fade-in`}
      aria-labelledby="experience-heading"
      ref={ref}
    >
      <h2 id="experience-heading" className="section-heading">
        Experiencia laboral
      </h2>
      <ul className={styles.list}>
        {experience.map((item) => (
          <li key={item.role} className={styles.item}>
            <div className={styles.header}>
              <h3 className={styles.role}>{item.role}</h3>
              <span className={styles.period}>{item.period}</span>
            </div>
            <p className={styles.company}>{item.company}</p>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
