import React from "react";
import open from "./open.png"
import favorito from "./favorito.png";

import styles from "./card.module.scss"

import fotos from './fotos.json';
function Card (){
    return (
        <ul className={styles.cards}>
        {
            fotos.map((foto => {
                return (
                    <li key={foto.id} className={styles.card}>
                        <img 
                        className={styles.imagem} src={foto.imagem} alt={foto.titulo}
                        />
                        <p className={styles.descricao}>{foto.titulo}</p>
                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <img src={favorito} alt="ícone favoritar"/>
                                <img src={open} alt="ícone abrir modal"/>
                            </span>
                        </div>
                    </li>   
                );
            }))
        }
    </ul>
    )
}


export default Card;