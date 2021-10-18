import React, { FC } from "react";
import styles from "./CTAButton.module.scss";
import Link from "next/link";

const CTAButton: FC = () => {
  return (
    <div className={styles.ctaBtn}>
      <Link href="/contact">
        <a className={styles.ctaBtn__btn}>Налагодити зв&lsquo;язок</a>
      </Link>
    </div>
  );
};

export default CTAButton;
