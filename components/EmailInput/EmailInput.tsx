import React, { useState } from "react";
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

  let sendEmail = (e: any) => {
    e.preventDefault();
    // emailjs.sendForm('service_plez7kr', 'template_m7ax64k', e.target, 'user_4hgg0NfxixNGD32qLzmdX')
    //   .then(res => {
    //     console.log(res);
    //     setIsSubmitted(true);
    //     setTimeout(() => setIsSubmitted(false), 3000);
    //   })
    //   .catch(err => console.log(err))
    // setIsSubmitted(true);
    // setTimeout(() => {setIsSubmitted(false)}, 3000);
  };

  let testModal = (e: any) => {
    e.preventDefault();

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
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
              onClick={handleClose}
              className={styles.emailInput__closeBtn}
            >
              Закрити
            </button>
            <button
              type="submit"
              onClick={testModal}
              className={styles.emailInput__submitBtn}
            >
              ВIДПРАВИТИ
            </button>
          </div>
        </div>
      </form>
      <div
        className={`${styles.alert} ${isSubmitted ? styles.alertActive : ""}`}
      >
        Success! The message was sent.
      </div>
    </>
  );
};

export default EmailInput;
