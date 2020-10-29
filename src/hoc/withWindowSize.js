import React from "react";

const withWindowSize = (Component) => {
  const isMobile = window.innerWidth < 768;
  return (props) => {
    return (
      <Component isMobile={isMobile} {...props}/>
    )
  }
}

export default withWindowSize;