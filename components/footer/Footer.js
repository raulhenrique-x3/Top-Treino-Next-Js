import styles from '../footer/footer.module.scss';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>© 2022, Todos os direitos reservados.</p>
            <div className={styles.dev}>
                <p>Desenvolvedor:</p>
                <div className={styles.developer}>
                    <Image
                        src={'/logotitle.png'}
                        layout={'fill'}
                    />
                </div>
            </div>

        </footer>
    )
};

export default Footer;

// className={styles.}