import React from "react";
import Image from "next/image";
import styles from "./Progress.module.css";

import Man from "../../public/static/man.png";

const ProgressService = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <p className={styles.partners_par}>OVERVIEW</p>
        <h4 className={styles.banner_h4}>Industris Service</h4>
        <p className={styles.banner_P}>Our industries are experiencing basic challenges. From climate change and geopolitics to the energy market, we are facing new reality. Some people consider them a threat. At Industris, we believe our job is to turn them into opportunities. That’s why we look for new ways to use our expertise in the energy industry, discover new opportunities and promote innovation around the world. Our ambition is to become the world’s most efficient industrial solutions and services provider.</p>
      </div>

      <div className={styles.col2}>
        <Image src={Man} alt="" className={styles.project_img} />
      </div>
    </div>
  );
};

export default ProgressService;