import styles from "../scss/styles.module.scss";
import React, { useState } from "react";
import Image from "next/image";

function Filters({ filters }) {
  const [activeFilter, setactiveFilter] = useState(1);
  const [visible, setVisible] = useState(false);

  const onSelectFilter = (index) => {
    setactiveFilter(index);
  };
  const arrow_click_handler = () => {
    setVisible(!visible);
  };
  
  return (
    <div className={styles.filters_block}>
      <div className={styles.filters_dropdown}>
        <div
          className={
            visible ? styles.filter_container : styles.filter_container_closed
          }
        >
          <span className={styles.filter}>Оттенок цветов</span>
          <div
            id="arrowContainer"
            onClick={() => {
              arrow_click_handler();
            }}
            className={styles.arrow_container}
          >
            <Image
              className={styles.arrow}
              src="/arrowDown.svg"
              height={7}
              width={12}
              quality={40}
              alt=""
            />
          </div>
        </div>
        <ul
          className={
            visible === true
              ? styles.filter_values
              : (styles.filter_values, styles.not_displayed)
          }
        >
          {filters &&
            filters.map((element, index) => (
              <li
                className={activeFilter === index ? styles.activeFilter : ""}
                onClick={() => {
                  onSelectFilter(index);
                }}
                key={`${element}_${index}`}
              >
                {element}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export { Filters };
