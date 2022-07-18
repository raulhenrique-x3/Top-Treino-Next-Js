import Image from "next/image";
import styles from '../section01/section01.module.scss'


const Section01 = () => {
    return (
        <section className={styles.section01}>
            <div className={styles.section01Content}>
                {/* <svg className={styles.svgScreen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0c0f5e" fillOpacity="1" d="M0,0L1440,192L1440,320L0,320Z"></path>
                </svg> */}
                <div className={styles.section01h1}>
                    <h1 className={styles.txtH1}>Mais que uma academia, somos
                        <br />uma fábrica de CAMPEÕES!
                    </h1>
                    <div className={styles.section01Buttons}>
                        <a href="#planos"><button className={styles.sect01Button}>Planos</button></a>
                        <a><button className={styles.sect02Button}>Contatos</button></a>
                    </div>
                </div>

                <div className={styles.gymBackGround}>
                    <Image
                        src={'/gymBackGround.png'}
                        layout={'fill'}
                        className={styles.gymBg}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Section01;