import React from "react";
import styles from "./layout.module.scss"
import {Header} from "../header";
import {Footer} from "../footer";
import {PageTitle} from "../page-title";
import {MainContent} from "../main-content";

export const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <PageTitle>Page Title</PageTitle>
      <MainContent>
        <aside>Aside content</aside>
        <main>{children}</main>
      </MainContent>
      <Footer/>
    </div>
  )
}