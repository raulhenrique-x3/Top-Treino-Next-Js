import styles from "../section05/section05.module.scss";

const Section05 = () => {
  return (
    <section className={styles.section05} id="sect05">
      <h2 className={styles.local}>Localização</h2>
      <div className={styles.sect05Cont}>
        <div className={styles.localInfo}>
          <ul className={styles.listStyle}>
            <li className={styles.list}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={styles.biGeoAltFill}
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              Rua Sete de Setembro, 91 A, 1° andar;
            </li>
            <li className={styles.list}>Cavaleiro;</li>
            <li className={styles.list}>Jaboatão dos Guararapes - PE;</li>
            <li className={styles.list}>(Próximo ao Supermercado Du Valle).</li>
          </ul>
        </div>

        <div className={styles.mapouter}>
          <div className={styles.gmap_canvas}>
            <iframe
              title="Localização da academia"
              className={styles.gmap_iframe}
              width="100%"
              frameBorder="0"
              scrolling="yes"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Academia Top Treino - Rua Sete de Setembro - Cavaleiro, Jaboatão dos Guararapes - PE&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
