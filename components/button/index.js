import React from "react";
import styles from "./style.module.css";

const Button = ({ onClick, textButton }) => {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        {textButton}
      </button>
    </>
  );
};

export default Button;
