import React from "react";
import styles from "./Logo.module.scss";

interface LogoProps {
  visible?: boolean;
}

const Logo: React.FC<LogoProps> = ({ visible }) => {
  return (
    <>
      {visible && (
        <div className={styles.logo}>
          <span>IНФО</span>
          <h1>КРАЙ</h1>
        </div>
      )}
    </>
  );
};

export default Logo;
