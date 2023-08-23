import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
};

function Category(props) {
  const data = getData(props.params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{props.params.category}</h1>
      {data?.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
