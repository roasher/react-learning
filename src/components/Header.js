import React from "react";
import {ThemeContext, themes} from "../theme-context";
import styles from '../App.module.scss';

class Header extends React.Component {
  render() {
    const theme = this.context;
    return (
      <div>
        <div>
          {`is mobile: ${this.props.isMobile}`}
        </div>
        <header
          style={{
            color: themes[theme].color,
            background: themes[theme].background
          }}
          className={styles.header}
        >
          {!this.props.isMobile && <h1>Products List</h1>}
        </header>
      </div>
    );
  }
}

Header.contextType = ThemeContext

export default Header;