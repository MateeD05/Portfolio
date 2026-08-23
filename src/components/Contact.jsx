import { personalInfo } from "../data/cvData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section
      className={`${styles.section} fade-in`}
      aria-labelledby="contact-heading"
      ref={ref}
    >
      <h2 id="contact-heading" className={styles.heading}>
        Contacto
      </h2>
      <p className={styles.invite}>
        ¿Tenés un proyecto en mente? Hablemos.
      </p>
      <ul className={styles.list}>
        <li>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.link}
            aria-label="Enviar email a Mateo"
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
            aria-label="Perfil de LinkedIn de Mateo"
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
            aria-label="Perfil de GitHub de Mateo"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
