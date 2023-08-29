import React, { useState } from "react";
import styles from "./style.module.css";

const CardLogin = ({ children, closeLogin }) => {
  return (
    <>
      <div className={styles.background} onClick={closeLogin}>
        <div className={styles.sideSheet}>
          <main className={styles.cardContent}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default CardLogin;
