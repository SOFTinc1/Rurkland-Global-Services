"use client"
import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { usePathname } from "next/navigation"; // Import usePathname

import HamburgerIcon from "../../public/icon/hamburger.svg";
import CloseIcon from "../../public/icon/hamburger.svg";
import Location from "../../public/icon/location.svg";
import Call from "../../public/icon/call.svg";
import SMS from "../../public/icon/sms.svg";
import Logo from "../../public/icon/logo.svg";

import Button from "../Button/Button";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => pathname === path;

  return (
    <div className={styles.container}>
      <div className={styles.col_1}>
        <Marquee gradient={false} speed={100}>
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
        </Marquee>
      </div>

      <div className={styles.col_2}>
        <a href='/'>
          <Image src={Logo} className={styles.logo} />
        </a>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <Image src={menuOpen ? CloseIcon : HamburgerIcon} alt="Menu" />
        </div>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <Link href='/'>
            <span className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>
              Home
            </span>
          </Link>
          <Link href='/services'>
            <span className={`${styles.link} ${isActive('/services') ? styles.active : ''}`}>
              Our Services
            </span>
          </Link>
          <Link href="#contact">
            <Button backgroundColor="transparent" textColor="#4158EE" border="1px solid #4158EE">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
