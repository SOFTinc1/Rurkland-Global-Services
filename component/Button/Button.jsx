import React from 'react';
import styles from './Button.module.css';

const Button = ({ backgroundColor, textColor, border, padding, children }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#fff',
    color: textColor || '#4158EE',
    border: border || "none",
    padding: padding || "10px 20px"
  };

  return (
    <button className={styles.container} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;