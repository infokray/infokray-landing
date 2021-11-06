import React, { useRef, useState } from "react";
import styles from "./emailInput.module.scss";
// import emailjs from "emailjs-com"
// import sgMail from "@sendgrid/mail"
type Props = {
  handleClose: () => void;
};

const EmailInput: React.FC<Props> = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const alertRef = useRef<any>();
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  let mes = [
    "Повідомлення відправлено!",
    "Сталася помилка! Спробуйте пізніше.",
  ];

  let sendEmail = (e: any) => {
    scrollTop();
    e.preventDefault();
    let promise = new Promise((resolve, reject) => {
      let rand = Math.random();
      if (rand < 0.33)
        setTimeout(() => {
          resolve({ status: "OK", message: "Повідомлення відправлено!" });
        }, 1000);
      else if (rand >= 0.33 || rand < 0.66)
        setTimeout(() => {
          resolve({
            status: "BAD",
            message: "Сталася помилка! Спробуйте пізніше.",
          });
        }, 1000);
      else if (rand >= 0.66)
        setTimeout(() => {
          reject({
            error: "ERR110",
            message: "Сталася помилка! Спробуйте пізніше.",
          });
        }, 1000);
    });

    promise
      .then((res: any) => {
        fireAlert(res);
      })
      .catch((e: any) => fireAlert(e));
  };

  const fireAlert = (res) => {
    alertRef.current.innerHTML = res.message;
    if (res.status === "OK") alertRef.current.style.color = "green";
    else alertRef.current.style.color = "red";
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setTimeout(() => handleClose(), 500);
    }, 3000);
  };

  return (
    <>
      <form onSubmit={sendEmail} id="form" className={styles.emailForm}>
        <div className={`${styles.emailInput} ${styles.emailInput__container}`}>
          <div className={styles.emailInput__smallInputs}>
            <div className={styles.emailInput__smallInputsContainer}>
              <p>Имя</p>
              <input
                type="text"
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
            <div className={styles.emailInput__smallInputsContainer}>
              <p>E-Mail</p>
              <input
                type="email"
                name="email"
                placeholder="name@gmail.com"
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
            <div className={styles.emailInput__smallInputsContainer}>
              <p>Телефон</p>
              <input
                type="tel"
                name="number"
                placeholder="+38 (000) 000-00-03"
                onChange={(ev) => setPhone(ev.target.value)}
              />
            </div>
          </div>
          <div className={styles.emailInput__bigInputs}>
            <textarea
              placeholder="Повiдомления"
              name="message"
              onChange={(ev) => setMessage(ev.target.value)}
            />
          </div>
          <div className={styles.emailInput__btns}>
            <button
              type="button"
              onClick={() => {
                handleClose();
                scrollTop();
              }}
              className={styles.emailInput__closeBtn}
            >
              Закрити
            </button>
            <button
              type="submit"
              onClick={sendEmail}
              className={styles.emailInput__submitBtn}
            >
              ВIДПРАВИТИ
            </button>
          </div>
        </div>
      </form>
      <div
        className={`${styles.alert} ${isSubmitted ? styles.alertActive : ""}`}
        ref={alertRef}
      >
        Success! The message was sent.
      </div>
    </>
  );
};

export default EmailInput;
