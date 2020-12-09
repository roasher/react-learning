import React from 'react';
import styles from './main-content.module.scss';

export const MainContent = ({ children }) => <div className={styles.mainContent}>{children}</div>;
