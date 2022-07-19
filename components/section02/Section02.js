import styles from '../section02/section02.module.scss'

const Section02 = () => {
    return (
        <section className={styles.Section02} id='sect02'>
            <h2 className={styles.ourPlans}>Nossos planos</h2>
            <main className={styles.Section02Main}>
                <figure className={styles.plansInfoFig}>
                    <h3 className={styles.planosInfo}>Mensal<br /><p>(1 Mês)</p></h3>
                    <p className={styles.priceInfo}>R$60</p>
                    <a href={'https://api.whatsapp.com/send?phone=+5581986838081&text=Olá! Vim atráves do site e estou interessado no plano mensal!'}>
                        <button className={styles.buyButton}>Obter</button>
                    </a>
                </figure>
                <figure className={styles.plansInfoFig}>
                    <h3 className={styles.planosInfo}>Trimestral<br /><p>(3 Meses)</p></h3>
                    <p className={styles.priceInfo}>R$165</p>
                    <a href={'https://api.whatsapp.com/send?phone=+5581986838081&text=Olá! Vim atráves do site e estou interessado no plano trimestral!'}>
                        <button className={styles.buyButton}>Obter</button>
                    </a>
                </figure>
                <figure className={styles.plansInfoFig}>
                    <h3 className={styles.planosInfo}>Semestral<br /><p>(6 Meses)</p></h3>
                    <p className={styles.priceInfo}>R$300</p>
                    <a href={'https://api.whatsapp.com/send?phone=+5581986838081&text=Olá! Vim atráves do site e estou interessado no plano semestral!'}>
                        <button className={styles.buyButton}>Obter</button>
                    </a>
                </figure>
                <figure className={styles.plansInfoFig}>
                    <h3 className={styles.planosInfo}>Anual<br /><p>(1 Ano)</p></h3>
                    <p className={styles.priceInfo}>R$540</p>
                    <a href={'https://api.whatsapp.com/send?phone=+5581986838081&text=Olá! Vim atráves do site e estou interessado no plano anual!'}>
                        <button className={styles.buyButton}>Obter</button>
                    </a>
                </figure>
            </main>
        </section>
    )
}

export default Section02;