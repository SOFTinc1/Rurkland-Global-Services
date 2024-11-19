import React from "react";
import Image from "next/image";
import styles from "./WorkProcess.module.css";

import Headphone from "../../public/icon/headphone.svg";
import Screw from "../../public/icon/screw.svg";
import Purse from "../../public/icon/Purse.svg";

// import Button from "../Button/Button";

const WorkProcessServices = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <h4 className={styles.banner_h4}>Our Featured</h4>
      </div>

      <div className={styles.col2}>

        <div className={styles.card}>
          <Image src={Headphone} alt="" className={styles.project_img} />
          <h1 className={styles.wedo_h1}>Support 24/7</h1>
        </div>

        <div className={styles.card}>
          <Image src={Screw} alt="" className={styles.project_img} />
          <h1 className={styles.wedo_h1}>Maintenance</h1> 
        </div>

        <div className={styles.card}>
          <Image src={Purse} alt="" className={styles.project_img} />
          <h1 className={styles.wedo_h1}>Full Services</h1> 
        </div>

      </div>
    </div>
  );
};

export default WorkProcessServices;