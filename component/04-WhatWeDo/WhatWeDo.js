import React from "react";
import Image from "next/image";
import styles from "./WhatWeDo.js.module.css";

import OilAndGas from "../../public/icon/oilandgas.svg";
import Refining from "../../public/icon/refining.svg";
import Truck from "../../public/icon/truck.svg";
import Button from "../Button/Button";

// import Button from "../Button/Button";

const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <p className={styles.partners_par}>OUR SERVICES</p>
        <h4 className={styles.banner_h4}>What We Do</h4>

      </div>

      <div className={styles.col2}>

        <div className={styles.card}>
          <Image src={OilAndGas} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>OIL & GAS EXPLORATION</h2>
          <p className={styles.wedo_P}>Our Exploration & Production (E&P) services focus on identifying, assessing, and extracting natural resources with precision and care. Utilizing advanced seismic technology, geological analysis, and risk management techniques, we ensure that each exploration project is both efficient and sustainable.</p>
        </div>

        <div className={styles.card}>
          <Image src={Refining} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>REFINING & PROCESSING</h2>
          <p className={styles.wedo_P}>Our refining and processing operations take raw materials from the wellhead to the market, ensuring high-quality output that meets rigorous industry standards. With state-of-the-art processing facilities and an unwavering commitment to safety, we efficiently transform crude oil and natural gas into valuable products.</p>
        </div>

        <div className={styles.card}>
          <Image src={Truck} alt="" className={styles.project_img} />
          <h2 className={styles.wedo_h2}>TRANSPORTATION & DISTRIBUTION</h2>
          <p className={styles.wedo_P}>Efficient, safe, and reliable logistics are essential to delivering our products and services. Our logistics and distribution network spans across Nigeria and beyond, utilizing advanced infrastructure and technology to ensure the timely and secure movement of oil and gas products.</p>
        </div>

      </div>

      <Button border="1px solid #4158EE" backgroundColor="transparent" padding="12px 50px">View More</Button>
    </div>
  );
};

export default WhatWeDo;