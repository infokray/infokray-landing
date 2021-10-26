import React, { FC, useEffect, useState } from "react";
import styles from "./contactsBlock.module.scss";

type ContactBlockProps = {
  bottom?: number;
  right?: number;
  left?: number;
  top?: number;
};

const ContactsBlock: FC<ContactBlockProps> = ({ bottom, right, left, top }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
  }, []);
  return (
    <div
      className={styles.contactsBlock}
      style={{
        bottom: `${bottom}px`,
        right: `${right}px`,
        left: `${left}px`,
        top: `${top}px`,
      }}
    >
      <ul>
        <h2>Контакты</h2>
        <li>
          <p>
            ТОВ &quot;<b>Iнфокрай</b>&quot;
          </p>
        </li>
        <li>
          <p>
            <b>E-mail</b>: infokray@urk.net
          </p>
        </li>
        <li>
          <p>
            <b>Тел.</b>: +38 (067) 368-46-03
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ContactsBlock;
