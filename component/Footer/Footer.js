import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

import Logo from "../../public/icon/logo_footer.svg";
import Location from "../../public/icon/location_footer.svg";
import Call from "../../public/icon/call_footer.svg";
import SMS from "../../public/icon/sms_footer.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_upper}>
        <div className={styles.col1}>
          <Image src={Logo} className={styles.logo} />
          <p className={styles.wedo_P}>Drive sustainable progress while uplifting communities and protecting the environment.</p>
        </div>
        <div className={styles.col2}>

          <div className={styles.help_header}>
            <Image src={Location} className={styles.help_header_icon} />
            <span className={styles.help_header_title}>2B Olawale Onitiri Cole Street Off Admiralty Road Lekki Phase 1</span>
          </div>

          <div className={styles.help_header}>
            <Image src={Call} className={styles.help_header_icon} />
            <span className={styles.help_header_title}>+2348083463626</span>
          </div>

          <div className={styles.help_header}>
            <Image src={SMS} className={styles.help_header_icon} />
            <span className={styles.help_header_title}>info@rurklandglobalcom</span>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.container_lower}>
        <p className={styles.wedo_P2}>Rurkland Global Services ©2024, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
