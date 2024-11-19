import React from "react";
import Image from "next/image";
import styles from "./Progress.module.css";

import Man from "../../public/static/man.png";


import Button from "../Button/Button";

const Progress = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <p className={styles.partners_par}>OUR STORY</p>
        <h4 className={styles.banner_h4}>Empowering Progress <br /> Honoring People and Planet</h4>
        <p className={styles.banner_P}>Founded in the heart of Nigeria, Rurkland global services was built on the belief that energy is more than just a resource—it’s a force for positive change. What began as a small venture has grown into a trusted industry leader, but our mission has remained constant: to drive sustainable progress while uplifting communities and protecting the environment. In every project, we see the opportunity to make a lasting impact. From the bustling city centers to the remote villages, we bring energy that powers industries, fuels homes, and lights the path to a better future. Guided by our values of integrity, innovation, and respect, we strive to connect resources to needs and people to opportunity.</p>
        <p className={styles.banner_P}>In every project, we see the opportunity to make a lasting impact. From the bustling city centers to the remote villages, we bring energy that powers industries, fuels homes, and lights the path to a better future. Guided by our values of integrity, innovation, and respect, we strive to connect resources to needs and people to opportunity.</p>
      </div>

      <div className={styles.col2}>
        <Image src={Man} alt="" className={styles.project_img} />
      </div>
    </div>
  );
};

export default Progress;