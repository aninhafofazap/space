import React from "react";
// import home from '../../assets/icones/home.png'
import styles from './main.module.scss'
 import icones from "./icones.json";
import Icone from './Icones'


function Menu(){
  console.log(icones)
    return (
        <nav className={styles.main}>
        <ul className={styles.main__list}>
          {icones.map(icone => (<Icone key={icone.id} icone={icone} style={styles}/>))}
        </ul>
    </nav>
    )
}

export default Menu;