import React, { useState } from "react";
import styles from "./style.module.css";

const CardLogin = ({ children }) => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.sideSheet}>
          <main className={styles.cardContent}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default CardLogin;
