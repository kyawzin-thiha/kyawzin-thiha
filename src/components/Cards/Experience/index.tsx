import styles from './experience.module.scss';

export default function Experience() {
    return (
        <div className={styles['experience-card']}>
            <div className={styles['timeline-container']}>
                <span>June 2022 - Present</span>
            </div>
            <div className={styles['info-container']}>
                <div className={styles['title']}>
                    <h3>Software Engineer - Self Employed</h3>
                </div>
                <div className={styles['description']}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </div>
                <div className={styles['topics']}>
                    <span>React</span>
                    <span>React</span>
                    <span>React</span>
                </div>
            </div>
        </div>
    );
}