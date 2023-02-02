import React from "react";
// import home from '../../assets/icones/home.png'
import styles from "./main.module.scss";
import icons from "./icons.json";
import Icones from "./Icones";

function Menu() {
  return (
    <nav className={styles.main}>
      {
        <ul className={styles.main__list}>
          {icons.map((icon) => (
            <Icones key={icon.id} icone={icon} style={styles} />
          ))}
        </ul>
      }
    </nav>
  );
}

export default Menu;
