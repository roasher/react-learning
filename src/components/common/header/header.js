import React from "react";
import styles from './header.module.scss'
import {Wrapper} from "../../ui/wrapper";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <div>Left Side</div>
        <input></input>
        <div>Right Side</div>
      </Wrapper>
    </header>
  )
}