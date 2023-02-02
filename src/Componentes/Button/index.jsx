import React from "react";
import style from "./botao.module.scss";

function Botao({ children }) {
  return <button className={style.botao}>{children}</button>;
}

export default Botao;
