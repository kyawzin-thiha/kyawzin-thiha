import styles from './experience.module.scss';

type Experience = {
    time: string;
    title: string;
    description: string;
    tags: string[];
}

export default function Experience({experience}: { experience: Experience }) {
    return (
        <div className={styles['experience-card']}>
            <div className={styles['timeline-container']}>
                <span>{experience.time}</span>
            </div>
            <div className={styles['info-container']}>
                <div className={styles['title']}>
                    <h3>{experience.title}</h3>
                </div>
                <div className={styles['description']}>
                    {experience.description}
                </div>
                <div className={styles['topics']}>
                    {
                        experience.tags.map((tag, index) => (
                            <span key={index}> {tag} </span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}