import React, { ReactNode } from "react";
import styles from "./contactBox.module.scss";

type ContactBoxProps = {
  header: string;
  svg: ReactNode;
  body: string;
  btnText: any | null;
  handler: () => void;
};

const ContactBox: React.FC<ContactBoxProps> = ({
  header,
  svg,
  body,
  btnText,
  handler,
}) => {
  return (
    <div className={styles.contactBox__container}>
      <div className={styles.contactBox__svg}>{svg}</div>
      <div className={styles.contactBox__header}>{header}</div>
      <div className={styles.contactBox__textContent}>
        <p>{body}</p>
      </div>
      {btnText && (
        <div className={styles.contactBox__link} onClick={handler}>
          {btnText}
        </div>
      )}
    </div>
  );
};

export default ContactBox;
