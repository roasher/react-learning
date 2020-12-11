import React from 'react';
import clsx from 'clsx';
import styles from './radio.module.scss';

export const Radio = ({ className, value, text, onChange, checked }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={clsx(styles.radio, className)}>
    <input type="radio" value={value} onChange={onChange} checked={checked} />
    <span>{text}</span>
  </label>
);
