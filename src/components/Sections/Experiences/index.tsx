import Container from '@/components/Cards/Container';
import Experience from '@/components/Cards/Experience';
import getAllExperiences from '@/lib/experience';
import ContainerStyles from '@/components/Cards/Container/container.module.scss';
import styles from './experiences.module.scss';

export default function Experiences() {
    const experiences = getAllExperiences();

    return (
        <Container id={'experiences'} className={'experiences'}>
            <div className={ContainerStyles.title}>
                <h2>
                    {'<Experiences/>'}
                </h2>
                <hr/>
            </div>
            <div className={styles['experiences-list']}>
                {
                    experiences.map((experience, index) => (
                        <Experience key={index} experience={experience}/>
                    ))
                }
            </div>
        </Container>
    );
}