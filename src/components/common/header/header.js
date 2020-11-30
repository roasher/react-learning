import React from "react";
import styles from './header.module.scss'
import {Wrapper} from "../../ui";
import {Cart} from "./cart";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <div>Left Side</div>
        <div>
          <input type="text" value="" placeholder="search"></input>
        </div>
        <div>
          <Cart>Right Side</Cart>
        </div>
      </Wrapper>
    </header>
  )
}