import { education } from "../data/cvData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/education.module.css";

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section
      className={`${styles.section} fade-in`}
      aria-labelledby="education-heading"
      ref={ref}
    >
      <h2 id="education-heading" className="section-heading">
        Formación académica
      </h2>
      <ul className={styles.list}>
        {education.map((item) => (
          <li key={item.degree} className={styles.item}>
            <div className={styles.header}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <span className={styles.period}>{item.period}</span>
            </div>
            <p className={styles.institution}>{item.institution}</p>
            <p className={styles.detail}>
              {item.status}
              {item.detail && ` — ${item.detail}`}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
