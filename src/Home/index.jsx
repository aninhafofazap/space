import Header from "../Componentes/Header";
import Menu from "../Componentes/Main";
import Banner from "../Componentes/Banner";
import Galeria from "../Componentes/Gallery";
import Footer from "../Componentes/Footer";

import styles from './home.module.scss'



function Home (){
    return (
        <>
        <Header />
        <main>
            <section className={styles.principal}>
        <Menu/>
        <Banner/>
        </section>
        
        </main>
        <div>
            <Galeria/>
        </div>
        <Footer/>
        </>
    )
}

export default Home;