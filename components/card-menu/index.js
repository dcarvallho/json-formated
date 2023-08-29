import React from "react";
import Button from "../button";
import style from "./style.module.css";

const CardMenu = ({ children, closeMenu }) => {
  return (
    <>
      <div className={style.backgroundMenu} onClick={closeMenu}>
        <div className={style.cardMenu}>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default CardMenu;
