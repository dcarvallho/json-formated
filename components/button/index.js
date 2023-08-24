import React from "react";
import styles from "./style.module.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        Login
      </button>
    </>
  );
};

export default Button;
