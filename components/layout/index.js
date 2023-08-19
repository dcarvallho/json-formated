import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

import style from "./style.module.css";

const Wrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
