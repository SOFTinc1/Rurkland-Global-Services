import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

import Location from "../../public/icon/location.svg";
import Call from "../../public/icon/call.svg";
import SMS from "../../public/icon/sms.svg";
import Logo from "../../public/icon/logo.svg";

import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col_1}>
        <div className={styles.help_header}>
          <Image src={Location} className={styles.help_header_icon}/>
          <span className={styles.help_header_title}>2B Olawale Onitiri Cole Street Off Admiralty Road Lekki Phase 1</span>
        </div>

        <div className={styles.help_header}>
          <Image src={Call} className={styles.help_header_icon}/>
          <span className={styles.help_header_title}>+2348083463626</span>
        </div>

        <div className={styles.help_header}>
          <Image src={SMS} className={styles.help_header_icon}/>
          <span className={styles.help_header_title}>info@rurklandglobalcom</span>
        </div>
      </div>

      <div className={styles.col_2}>
        <a href='/'>
          <Image src={Logo} className={styles.logo}/>
        </a>
        <div className={styles.links}>
          <span className={styles.link}>Home</span>
          <span className={styles.link}>Our Services</span>
          <Button backgroundColor="transparent" textColor="#4158EE" border="1px solid #4158EE">Get a Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
