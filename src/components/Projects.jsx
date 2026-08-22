import { projects } from "../data/cvData";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <h2 id="projects-heading" className={styles.heading}>
        Proyectos destacados
      </h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article key={index} className={styles.card}>
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
                {project.technologies.map((tech, i) => (
                  <li key={i} className={styles.techItem}>
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
