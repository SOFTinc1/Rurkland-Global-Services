import React from "react";
import Image from "next/image";
import styles from "./WorkProcess.module.css";

import OilAndGas from "../../public/icon/purse.svg";
import Refining from "../../public/icon/Lab.svg";
import Truck from "../../public/icon/Rocket.svg";
import Truck2 from "../../public/icon/CR.svg";

// import Button from "../Button/Button";

const WorkProcess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <p className={styles.partners_par}>OUR SERVICES</p>
        <h4 className={styles.banner_h4}>Our Work Process</h4>
        <p className={styles.partners_p}>Over the course of our years of hard work with many diverse projects. We have worked out the best working process.</p>
      </div>

      <div className={styles.col2}>

        <div className={styles.card}>
          <Image src={OilAndGas} alt="" className={styles.project_img} />
          <p className={styles.wedo_p}>01</p>
          <h1 className={styles.wedo_h1}>Receive and Evaluate the Project Overview</h1>
        </div>

        <div className={styles.card}>
          <Image src={Refining} alt="" className={styles.project_img} />
          <p className={styles.wedo_p}>02</p>
          <h1 className={styles.wedo_h1}>Research and Detailed Planning</h1> 
        </div>

        <div className={styles.card}>
          <Image src={Truck} alt="" className={styles.project_img} />
          <p className={styles.wedo_p}>03</p>
          <h1 className={styles.wedo_h1}>Deploy and Complete the Project</h1>
        </div>

        <div className={styles.card}>
          <Image src={Truck2} alt="" className={styles.project_img} />
          <p className={styles.wedo_p}>04</p>
          <h1 className={styles.wedo_h1}>Evaluation and Project Handover</h1>
        </div>

      </div>
    </div>
  );
};

export default WorkProcess;