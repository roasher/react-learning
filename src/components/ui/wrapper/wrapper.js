import React from 'react';
import clsx from 'clsx';
import styles from './wrapper.module.scss';

export const Wrapper = ({ children, className }) => <div className={clsx(styles.wrapper, className)}>{children}</div>;
