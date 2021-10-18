import React, { FC } from "react";
import styles from "./Dropdown.module.scss";
import ArrowSVG from "../../IconsSVG/ArrowSVG";
import Link from "next/link";

interface DropdownProps {
  links?: Array<{ name: string; path: string }>;
  trigger: boolean;
  toggleTrigger: () => void;
  closeMobileMenu: () => void;
}

const Dropdown: FC<DropdownProps> = ({
  links,
  trigger,
  toggleTrigger,
  closeMobileMenu,
}) => {
  return (
    <ul
      className={
        trigger ? `${styles.dropdownLinks} ${styles.dropdownLinksOpen}` : `${styles.dropdownLinks}`
      }
    >
      {links &&
        links.map((item, i) => {
          return (
            <li className={styles.dropdownLinks__link} key={i}>
              <Link
                href={`${item.path}`}
                
              >
                <a onClick={() => {
                  toggleTrigger();
                  closeMobileMenu();
                }}>
                <ArrowSVG rotateAngle={-90} />
                <span>{item.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Dropdown;
