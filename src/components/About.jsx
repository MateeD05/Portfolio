import { about } from "../data/cvData";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <h2 id="about-heading" className={styles.heading}>
        Sobre mí
      </h2>
      <p className={styles.text}>{about.text}</p>
    </section>
  );
}
