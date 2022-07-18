import Image from "next/image";
import styles from '../section04/section04.module.scss'

const Section04 = () => {
    return (
        <section className={styles.section04}>
            <h2 className={styles.ourPersonals}>Nossos professores</h2>
            <div className={styles.sect04Content}>
                <figure className={styles.personal}>
                    <div className={styles.personalImg}>
                        <Image
                            src={'/personalLucasTrigueiro.jpeg'}
                            layout={'fill'}
                            alt={'Lucas Trigueiro'}
                        />
                    </div>
                    <div className={styles.personalInfo}>
                        <p>Lucas Trigueiro</p>
                    </div>
                </figure>
                <figure className={styles.personal}>
                    <div className={styles.personalImg}>
                        <Image
                            src={'/personalBrunoVerissimo.jpeg'}
                            layout={'fill'}
                            alt={'Bruno Verissimo'}
                        />
                    </div>
                    <div className={styles.personalInfo}>
                        <p>Bruno Verissímo</p>
                    </div>
                </figure>
                <figure className={styles.personal}>
                    <div className={styles.personalImg}>
                        <Image
                            src={'/personalMarceloSousa.jpeg'}
                            layout={'fill'}
                            alt={'Marcelo Sousa'}
                        />
                    </div>
                    <div className={styles.personalInfo}>
                        <p>Marcelo Sousa</p>
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Section04;