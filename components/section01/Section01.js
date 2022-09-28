import Image from "next/image";
import styles from "../section01/section01.module.scss";

const Section01 = () => {
  return (
    <section className={styles.section01}>
      <div className={styles.section01Content}>
        <div className={styles.section01h1}>
          <h1 className={styles.txtH1}>
            Mais que uma academia, somos
            <br />
            uma fábrica de <p className={styles.champions}>CAMPEÕES!</p>
          </h1>
          <button className={styles.ourPlansButton}>
            <a href="#sect02"></a> Conheça nossos planos!
          </button>
        </div>

        <div className={styles.gymBackGround}>
          <Image
            src={"/gymBackGround.png"}
            layout={"fill"}
            className={styles.gymBg}
            priority
            alt="imagemDaAcademia"
            objectFit={"cover"}
          />
        </div>
      </div>
    </section>
  );
};

export default Section01;
