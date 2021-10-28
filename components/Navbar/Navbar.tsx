import React, { FC, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import styles from "./Navbar.module.scss";
import Link from "next/link";
// import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import ArrowSVG from "../../IconsSVG/ArrowSVG";
import BurgerSVG from "../../IconsSVG/BurgerSVG";
import Dropdown from "../Dropdown/Dropdown";

const Navbar: FC = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const closeMobileMenu = () => setShowNavMenu(false);
  // const location = useLocation();

  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <a>
          {/* <Logo visible={location.pathname === "/" ? false : true} /> */}
          <Logo visible onClick={() => setShowNavMenu(false)} />
        </a>
      </Link>

      <BurgerSVG
        className={styles.navBar__burgerIcon}
        onClick={() => {
          setShowNavMenu(!showNavMenu);
        }}
        state={showNavMenu}
      />

      <ul
        className={
          showNavMenu
            ? `${styles.navBar__menu} ${styles.active}`
            : styles.navBar__menu
        }
      >
        <NavbarLink
          name="Про Компанию"
          path="/"
          closeMobileMenu={closeMobileMenu}
        />
        <NavbarLink
          name="Послуги"
          path="#"
          dropdown={[
            {
              name: "Організація семінарів",
              path: "/seminar",
            },
            {
              name: "Організація Вебінарів",
              path: "/vebinar",
            },
            {
              name: "Організація конференцій",
              path: "/conference",
            },
            {
              name: "Організація виставок",
              path: "/exhibition",
            },
          ]}
          closeMobileMenu={closeMobileMenu}
        />
        <NavbarLink
          name="Event послуги"
          path="#"
          dropdown={[
            {
              name: "Корпоративний Teambuilding",
              path: "/team-building",
            },
            {
              name: "Тематичні вечірки",
              path: "/parties",
            },
            {
              name: "Фотосесії",
              path: "/photo-shoots",
            },
          ]}
          closeMobileMenu={closeMobileMenu}
        />
        <NavbarLink
          name="Контакт"
          path="/contact"
          closeMobileMenu={closeMobileMenu}
        />
      </ul>
    </nav>
  );
};

interface NavbarLinkProps {
  name: string;
  path: string;
  dropdown?: Array<{ name: string; path: string }>;
  closeMobileMenu: () => void;
}

const NavbarLink: FC<NavbarLinkProps> = ({
  name,
  path,
  dropdown,
  closeMobileMenu,
}) => {
  const [triggerDropdown, setTriggerDropdown] = useState(false);
  let domNode = useClickOutside(() => setTriggerDropdown(false));

  return (
    <li ref={domNode} className={styles.navBar__link}>
      <span
        onClick={
          dropdown
            ? () => setTriggerDropdown(!triggerDropdown)
            : closeMobileMenu
        }
      >
        <Link href={path}>{name}</Link>
        {dropdown && <ArrowSVG rotateAngle={triggerDropdown ? -180 : 0} />}
      </span>
      {dropdown && (
        <Dropdown
          links={dropdown}
          trigger={triggerDropdown}
          toggleTrigger={() => setTriggerDropdown(false)}
          closeMobileMenu={closeMobileMenu}
        />
      )}
    </li>
  );
};

export default Navbar;
