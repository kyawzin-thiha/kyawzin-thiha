import Container from '@/components/Cards/Container';
import ContainerStyles from '@/components/Cards/Container/container.module.scss';

export default function Contacts() {
    return (
        <Container id={'contacts'} className={'contacts'}>
            <div className={ContainerStyles.title}>
                <h2>
                    {'<Contacts/>'}
                </h2>
                <hr/>
            </div>
        </Container>
    );
}