import React from "react";
import styles from "./tags.module.scss";
import fotos from "../Card/fotos.json";

function Tags({ tags, filtrarFotos, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Busque por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={filtrarFotos}>
              {tag}
            </li>
          );
        })}

        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}

export default Tags;
