import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";


import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className={styles.container}>
      <p className={styles.banner_par}>Welcome to Rurkland Global Services</p>
      <h1 className={styles.banner_h1}>Oil & Gas Experts</h1>
      <Button backgroundColor="transparent" textColor="#fff" border="1px solid #fff" padding="12px 50px">Explore</Button>
    </div>
  );
};

export default Banner;
