import React from "react";
import home from '../../assets/icones/home.png'
import maisCurtidas from '../../assets/icones/mais-curtidas.png'
import maisVistas from '../../assets/icones/mais-vistas.png'
import novas from '../../assets/icones/novas.png'
import surpreendaMe from '../../assets/icones/surpreenda.png'
import styles from './main.module.scss'



function Menu(){
    return (
        <nav className={styles.main}>
        <ul className={styles.main__list}>
            <li className={styles.main__item}>
                <img src={home} alt=""/>
                <a href="/">Ínicio</a>
            </li>
            <li className={styles.main__item}>
                <img src={maisCurtidas} alt=""/>
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.main__item}>
                <img src={maisVistas} alt=""/>
                <a href="/">Mais vistas</a>
            </li>
            <li className={styles.main__item}>
                <img src={novas} alt=""/>
                <a href="/">Novas</a>
            </li>
            <li className={styles.main__item}>
                <img src={surpreendaMe} alt=""/>
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
    )
}

export default Menu;