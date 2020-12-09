import React from 'react';

export const PageTitle = ({ children }) => {
  if (!children) return null;
  return <h1>{children}</h1>;
};
