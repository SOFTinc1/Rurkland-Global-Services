import React from "react";
import Image from "next/image";
import styles from "./Difference.module.css";

import VerifyImg from "../../public/icon/verify.svg";

const Difference = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_upper}>
        <p className={styles.difference_par}>UNIQUE WITH CLASS</p>
        <h4 className={styles.banner_h4}>Why We’re Different</h4>
        <p className={styles.difference_p}>Our commitment to flexible solutions, transparent costs, and advanced technology creates operating conditions that empower growth and productivity. We understand your needs because we share your vision of sustainable and impactful business.</p>
      </div>

      <div className={styles.container_lower}>
        <p className={styles.difference_par2}>View Services</p>
        <div className={styles.highlight}>
          <Image src={VerifyImg} className={styles.highlight_icon} />
          <h4 className={styles.banner_h2}>Flexible Solution</h4>
        </div>
        <div className={styles.highlight}>
          <Image src={VerifyImg} className={styles.highlight_icon} />
          <h4 className={styles.banner_h2}>Improved Operating Conditions</h4>
        </div>
        <div className={styles.highlight}>
          <Image src={VerifyImg} className={styles.highlight_icon} />
          <h4 className={styles.banner_h2}>Transparent Costs</h4>
        </div>
      </div>

    </div>
  );
};

export default Difference;