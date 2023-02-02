// import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./gallery.module.scss";
import Card from "../Card";

function Galeria() {
  // const [itens, setItens] = useState();
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Card styles={styles} />
    </section>
  );
}

export default Galeria;
