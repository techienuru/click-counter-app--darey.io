import React from "react";
import styles from "./button.module.css";

const Button = ({ title, onclick, type }) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {title}
    </button>
  );
};

export default Button;
