import Header from "../Componentes/Header";
import Menu from "../Componentes/Main";


import styles from './home.module.scss'
import Banner from '../Componentes/Banner';
import Footer from "../Componentes/Footer";


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
        <Footer/>
        </>
    )
}

export default Home;