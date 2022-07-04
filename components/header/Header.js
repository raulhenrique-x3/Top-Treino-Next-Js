import Image from "next/image";
import { useState } from "react";
import styles from '../header/header.module.scss'

const Header = () => {

    const [active, setActive] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <Image
                        src={'/topTreinoLogo.png'}
                        width={'400'}
                        height={'400'}
                        layout={'responsive'}
                        alt={'Top Treino Logo'}
                        className={styles.LogoImg} />
                </div>
                <button
                    className={styles.menuButton}
                    onClick={() => setActive(!active)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={styles.biList} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
            <div className={styles.menuItem}>
                <nav className={active ? styles.active : styles.unactive}>
                    <ul className={styles.navList}>
                        <li>Nossa estrutura</li>
                        <li>Nossos planos</li>
                        <li>Localização</li>
                        <li>Contatos</li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header;