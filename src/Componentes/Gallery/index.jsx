import React from "react";
import Tags from "../Tags";
import styles from "./gallery.module.scss"

import Card from "../Card";

function Galeria(){
    return (
        <section className={styles.galeria}>
            <h2>
            Navegue pela galeria
            </h2>
            <Tags/>
            <Card/>
        </section>
    )
}

export default Galeria;