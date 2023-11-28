import React, { useReducer, useEffect } from "react";
import Button from "../../button";
import CardLogin from "../../card-login";
import CardMenu from "../../card-menu";

import { LOGIN_CADASTRO } from "../../../constants";

import styles from "../style.module.css";
import ContentMenu from "../../menu-content";

const reducer = (state, action) => {
  switch (action.type) {
    case "ShowSideSheet":
      return { ...state, showSideSheetLogin: !showSideSheetLogin };
    case "ShowMenuBar":
      return { ...state, showMenuBar: !showMenuBar };
    default:
      return state;
  }
};

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, {
    showSideSheetLogin: false,
    showMenuBar: false,
  });
  // const [showSideSheetLogin, setShowSideSheetLogin] = useState(false);
  // const [showMenuBar, setShowMenuBar] = useState(false);

  useEffect(() => {
    if (state.showSideSheetLogin) {
      dispatch({ type: "ShowSideSheet" });
    }

    if (state.showMenuBar) {
      dispatch({ type: "ShowMenuBar" });
    }
  }, []);

  const handleClickLogin = () => {
    dispatch({ type: "ShowSideSheet" });
  };

  const handleClickMenu = () => {
    dispatch({ type: "ShowMenuBar" });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarMenu}>
          <Button onClick={handleClickMenu} textButton={"Menu"} />
          {state.showMenuBar && (
            <CardMenu closeMenu={handleClickMenu}>
              <ContentMenu />
            </CardMenu>
          )}
        </div>
        <div>jSon FORMATED</div>
        <div className={styles.navbarLoginInfo}>
          <Button onClick={handleClickLogin} textButton="Login" />
          {state.showSideSheetLogin && (
            <CardLogin closeLogin={handleClickLogin}>
              <div className={styles.loginContent}>
                <header className={styles.header}>{LOGIN_CADASTRO}</header>
                <form>
                  <label>Username</label>
                  <input></input>
                  <br></br>
                  <label>Password</label>
                  <input type="Password"></input>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
