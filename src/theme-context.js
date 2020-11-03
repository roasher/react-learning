import {createContext} from "react";

export const themes = {
  light: {
    color: "#000",
    background: "#fff"
  },
  dark: {
    color: "#fff",
    background: "#000"
  }
};

export const ThemeContext = createContext(themes.light);