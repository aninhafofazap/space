import React from "react";
import styles from "./tags.module.scss"

function Tags(){
    return(
        <div className={styles.tags}>
            <p>Busque por tags:</p>
            <ul className={styles.tags__list}>
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    )
}

export default Tags;