import styles from "../footer/footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2022, Todos os direitos reservados.</p>
      <a href="https://raul-henrique-dev.vercel.app/">
        <div className={styles.dev}>
          <p>Desenvolvedor:</p>
          <div className={styles.developer}>
            <Image src={"/logotitle.png"} layout={"fill"} alt="Logo Raul Henrique" />
          </div>
        </div>
      </a>
    </footer>
  );
};

export default Footer;

// className={styles.}
