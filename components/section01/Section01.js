import Image from "next/image";
import styles from '../section01/section01.module.scss'


const Section01 = () => {
    return (
        <section className={styles.section01}>
            <div className={styles.atletaJoaoImg}>
                <Image
                    src={'/joaoTopTreino.png'}
                    width={500}
                    height={500}
                    layout={'fill'}
                    alt={'Atleta João Vinicius'}
                    className={styles.joaoTopTreino} />
                    
                <h1 className={styles.sect01Title}>Mais que uma <br/>academia, <br/>uma fábrica de <br/>CAMPEÕES!</h1>
            </div>


        </section>
    )
}

export default Section01;