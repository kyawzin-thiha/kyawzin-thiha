import styles from './project.module.scss';

type Project = {
    id: string,
    name: string,
    description: string,
    languages: string[],
    topics: string[],
    repository: string,
    thumbnail: string,
}

export default function ProjectCard({project}: { project: Project }) {

    const languageColors: { [key: string]: string } = {
        CSS: '#563d7c',
        SCSS: '#c6538c',
        Shell: '#89e051',
        Bash: '#4eaa25',
        JavaScript: '#f1e05a',
        TypeScript: '#2b7489',
        Node: '#026e00',
        Java: '#b07219',
        Python: '#3572A5',
        HTML: '#e34c26'
    };

    return (
        <a href={project.repository} target={'_blank'} className={styles['project-card']}>
            <div className={styles['img-container']}>
                <img src={project.thumbnail} alt={'Sample Image'}/>
            </div>
            <div className={styles['info-container']}>
                <div className={styles['name']}>
                    <h3>{project.name}</h3>
                </div>
                <div className={styles['description']}>
                    <p>{project.description}</p>
                </div>
                <div className={styles['topics']}>
                    {
                        project.topics.map((topic, index) => (
                            <span key={index}> {topic} </span>
                        ))
                    }
                </div>
                <div className={styles['languages']}>
                    {project.languages.map((language, index) => (
                        <span key={language}>
							<div className={styles['color-circle']}
                                 style={{backgroundColor: languageColors[language] || 'yellow'}}></div>
							<span>{language}</span>
						</span>
                    ))}
                </div>
            </div>
        </a>
    );
}