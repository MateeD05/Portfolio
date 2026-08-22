import { experience } from "../data/cvData";
import styles from "../styles/experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={styles.heading}>
        Experiencia laboral
      </h2>
      <ul className={styles.list}>
        {experience.map((item, index) => (
          <li key={index} className={styles.item}>
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
