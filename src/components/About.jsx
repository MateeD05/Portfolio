import { about } from "../data/cvData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/about.module.css";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section
      className={`${styles.section} fade-in`}
      aria-labelledby="about-heading"
      ref={ref}
    >
      <h2 id="about-heading" className="section-heading">
        Sobre mí
      </h2>
      <p className={styles.text}>{about.text}</p>
    </section>
  );
}
