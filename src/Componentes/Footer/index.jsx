import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

import styles from "./footer.module.scss";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icon}>
        <a href="https://www.linkedin.com/in/anavictoria-gomes/">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/vick.anaaaa/">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/AnaVickz">
          <FaTwitter size={24} />
        </a>
      </div>
      <p>Desenvolvido por Ana Victória</p>
    </footer>
  );
}

export default Rodape;
