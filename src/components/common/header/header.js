import React from "react";
import styles from './header.module.scss'
import {Wrapper} from "../../ui";
import {Cart} from "./cart";
import {Navigation} from "./navigation";
import {Logo} from "./logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.leftSide}>
          <Logo/>
          <Navigation/>
        </div>
        <div>
          <input type="text"
                 value=""
                 placeholder="search"/>
        </div>
        <div>
          <Cart/>
        </div>
      </Wrapper>
    </header>
  )
}