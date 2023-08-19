import React from "react";
import style from "../style.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navbarMenu}>Menu</div>
        <div>jSon FORMATED</div>
        <div className={style.navbarLoginInfo}>Itallo Minati</div>
      </nav>
    </>
  );
};

export default Navbar;
