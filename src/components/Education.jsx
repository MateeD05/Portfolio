import { education } from "../data/cvData";
import styles from "../styles/education.module.css";

export default function Education() {
  return (
    <section className={styles.section} aria-labelledby="education-heading">
      <h2 id="education-heading" className={styles.heading}>
        Formación académica
      </h2>
      <ul className={styles.list}>
        {education.map((item, index) => (
          <li key={index} className={styles.item}>
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
