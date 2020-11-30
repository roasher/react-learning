import React from "react";
import styles from "./radio.module.scss"
import clsx from "clsx";

export const Radio = ({className, value, text, onChange, checked}) => (
  <label className={clsx(styles.radio, className)}>
    <input type="radio" value={value} onChange={onChange} checked={checked}/>
    <span>{text}</span>
  </label>
)