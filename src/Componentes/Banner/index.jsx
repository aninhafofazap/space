import React from "react";
import banner from './banner.png'
import style from './Banner.module.scss'

function Banner (){
    return (
        <div className={style.banner}>
            <h1>A galeria mais completa de fotos do espaço!</h1>
            <img src={banner} alt="Imagem da terra vista do espaço"/>
        </div>
    )
}


export default Banner;