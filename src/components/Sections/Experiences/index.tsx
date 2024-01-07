import Container from '@/components/Cards/Container';
import ContainerStyles from '@/components/Cards/Container/container.module.scss';
import Experience from '@/components/Cards/Experience';

export default function Experiences() {
    return (
        <Container id={'experiences'} className={'experiences'}>
            <div className={ContainerStyles.title}>
                <h2>
                    {'<Experiences/>'}
                </h2>
                <hr/>
            </div>
            <div>
                <Experience/>
                <Experience/>
                <Experience/>
            </div>
        </Container>
    );
}