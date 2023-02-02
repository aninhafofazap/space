import styles from "./home.module.scss";

import Header from "Componentes/Header";
import Menu from "Componentes/Main";
import Banner from "Componentes/Banner";
import Galeria from "Componentes/Gallery";
import Populares from "Componentes/Populares";
import Footer from "Componentes/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
