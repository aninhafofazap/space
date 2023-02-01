import React from "react";
import twitter from "./twitter.svg"
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";

import styles from "./footer.module.scss"

function Rodape (){
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icon}>
                <a href="https://www.linkedin.com/in/anavictoria-gomes/">
                    <img src={linkedin} alt="Ícone do Linkedin"/>
                </a>
                <a href="https://www.instagram.com/vick.anaaaa/">
                    <img src={instagram} alt="ícone do Instagram"/>
                </a>
                <a href="https://twitter.com/AnaVickz">
                    <img src={twitter} alt="ícone do Twitter"/>
                </a>
            </div>
            <p>Desenvolvido por Ana Victória</p>
        </footer>
    )
}


export default Rodape;