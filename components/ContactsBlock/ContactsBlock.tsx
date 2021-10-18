import React, { FC } from "react";
import styles from "./ContactsBlock.module.scss";

const ContactsBlock: FC<{ mbottom?: string }> = ({ mbottom }) => {
  return (
    <div
      className={styles.contactsBlock}
      style={mbottom && { marginBottom: mbottom }}
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
