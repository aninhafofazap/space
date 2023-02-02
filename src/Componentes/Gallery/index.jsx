import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./gallery.module.scss";
import Card from "../Card";
import fotos from "../Card/fotos.json";

function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((valor) => valor.tag))];

  const filtrarFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    });

    setItens(novasFotos);
    console.log(filtrarFotos, "oi");
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
      <Card itens={itens} styles={styles} />
    </section>
  );
}

export default Galeria;
