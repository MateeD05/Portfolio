import { personalInfo } from "../data/cvData";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.heading}>
        Contacto
      </h2>
      <ul className={styles.list}>
        <li>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.link}
          >
            {personalInfo.email}
          </a>
        </li>
        <li>
          <a
            href={personalInfo.linkedin}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={personalInfo.github}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
