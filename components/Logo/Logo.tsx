import React from "react";
import styles from "./Logo.module.scss";

interface LogoProps {
  visible?: boolean;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ visible, onClick }) => {
  return (
    <>
      {visible && (
        <div className={styles.logo} onClick={() => onClick}>
          <span>IНФО</span>
          <h1>КРАЙ</h1>
        </div>
      )}
    </>
  );
};

export default Logo;
