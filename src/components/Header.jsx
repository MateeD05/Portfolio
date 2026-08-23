import { personalInfo } from "../data/cvData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import DarkModeToggle from "./DarkModeToggle";
import styles from "../styles/header.module.css";

export default function Header() {
  const ref = useScrollAnimation();

  return (
    <header className={`${styles.header} fade-in`} ref={ref}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div />
          <DarkModeToggle />
        </div>
        <h1 className={styles.name}>{personalInfo.name}</h1>
        <p className={styles.title}>{personalInfo.title}</p>

        <div className={styles.actions}>
          <a
            href={personalInfo.cvPdf}
            download
            className={styles.btn}
            aria-label="Descargar CV en PDF"
          >
            Descargar CV
          </a>

          <nav className={styles.links} aria-label="Enlaces sociales">
            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.link}
              aria-label="Enviar email"
            >
              Email
            </a>
            <a
              href={personalInfo.linkedin}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
