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
              className={styles.gmap_iframe}
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1975.0509481250754!2d-34.97016542135604!3d-8.091090568341295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAcademia!5e0!3m2!1spt-BR!2sbr!4v1659890755493!5m2!1spt-BR!2sbr"
              width="300"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05;
