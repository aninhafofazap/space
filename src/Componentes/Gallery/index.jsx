import React from "react";
import Tags from "../Tags";
import styles from "./gallery.module.scss"
import open from "./open.png"
import favorito from "./favorito.png";

import fotos from './fotos.json';

function Galeria(){
    return (
        <section>
            <h2>
            Navegue pela galeria
            </h2>
            <Tags/>
            <ul>
                {
                    fotos.map((foto => {
                        return (
                            <li key={foto.id} className={styles.galeria__card}>
                                <img 
                                className={styles.galeria__imagem} src={foto.imagem} alt={foto.titulo}
                                />
                                <p className={styles.galeria__descricao}>{foto.titulo}</p>
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
        </section>
    )
}

export default Galeria;