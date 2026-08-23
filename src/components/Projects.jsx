import { projects } from "../data/cvData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import styles from "../styles/projects.module.css";

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section
      className={`${styles.section} fade-in`}
      aria-labelledby="projects-heading"
      ref={ref}
    >
      <h2 id="projects-heading" className="section-heading">
        Proyectos destacados
      </h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={`Captura de ${project.name}`}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tech}>
                {project.technologies.map((tech) => (
                  <li key={tech} className={styles.techItem}>
                    {tech}
                  </li>
                ))}
              </ul>
              {project.url && (
                <a
                  href={project.url}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ${project.name} en vivo`}
                >
                  Ver sitio →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
