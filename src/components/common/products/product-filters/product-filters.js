import React from "react";
import {Radio} from "../../../ui";
import styles from "./product-filter.module.scss"

export const ProductFilters = ({data, onChange, filter}) => {
  return (
    <div className={styles.list}>
      <Radio text="all"
             value="all"
             checked={filter === "all"}
             onChange={onChange}
      />
      {data.map(dataItem => (
        <Radio
          key={dataItem}
          text={dataItem}
          value={dataItem}
          onChange={onChange}
          checked={filter === dataItem}
        />
      ))}
    </div>
  )
}