import React, { useState, useEffect } from "react";
import Button from "../../button";
import CardLogin from "../../card-login";
import styles from "../style.module.css";
import { LOGIN_CADASTRO } from "../../../constants";

const Navbar = () => {
  const [showSideSheet, setShowSideSheet] = useState(false);

  useEffect(() => {
    setShowSideSheet(false);
  }, []);

  const handleClickLogin = () => {
    setShowSideSheet(!showSideSheet);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarMenu}>Menu</div>
        <div>jSon FORMATED</div>
        <div className={styles.navbarLoginInfo}>
          <Button onClick={handleClickLogin} textButton="Login" />
        </div>
      </nav>
      {showSideSheet && (
        <CardLogin>
          <div className={styles.loginContent}>
            <header className={styles.header}>{LOGIN_CADASTRO}</header>
            <form>
              <label>Username</label>
              <input></input>
              <br></br>
              <label>Password</label>
              <input></input>
              <br></br>
              <Button textButton="Entrar" />
            </form>
            <footer>
              <span>
                É novo por aqui? Cadastre-se já! <a href="">Cadastro</a>
              </span>
            </footer>
          </div>
        </CardLogin>
      )}
    </>
  );
};

export default Navbar;
