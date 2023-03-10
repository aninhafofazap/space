import logo from "./logo.png";
import search from "./search.png";
import menu from "./menu.png";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Space" />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="ícone de busca" />
      </div>
      <img src={menu} alt="ícone menu" />
    </header>
  );
}

export default Header;
