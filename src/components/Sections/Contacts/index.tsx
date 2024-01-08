'use client';

import Lottie from 'lottie-react';
import Cocktail from '@/resources/animations/cocktail-drink.json';
import Container from '@/components/Cards/Container';
import styles from './contacts.module.scss';

export default function Contacts() {
    return (
        <Container id={'contacts'} className={'contacts'}>
            <div className={styles['title']}>
                <h3>
                    Interested in collaborating with me?
                </h3>
                <p>
                    I&apos;m always open to discussing product design work or partnership opportunities.
                </p>
            </div>
            <div className={styles['action']}>
                <a href="mailto: kyaw.z.thiha@gmail.com">
                    <button>
                        <div className={styles['animation']}>
                            <Lottie
                                animationData={Cocktail}
                                loop={true}
                            />
                        </div>
                        <p>Start a conversation</p>
                    </button>
                </a>
            </div>
        </Container>
    );
}