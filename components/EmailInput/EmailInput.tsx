import React, { useRef, useState } from "react";
import styles from "./emailInput.module.scss";

type Props = {
  handleClose: () => void;
};

const EmailInput: React.FC<Props> = ({ handleClose }) => {
  const alertRef = useRef<any>();
  const submitRef = useRef<any>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [values, setValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  let validate = (name, value) => {
    let errs: any = {...errors}
    switch (name) {
      case 'email':
        if(!value || !/\S+@\S+\.\S+/.test(value)) errs.email = true;
        else errs.email = false
        break;
      case 'phone':
        if (!value || !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)) errs.phone = true;
        else errs.phone = false
        break;
      case 'name':
        if (!value) errs.name = true;
        else errs.name = false
        break;
      case 'message':
        if (!value) errs.message = true;
        else errs.message = false
        break;
      default: 
        return errs;
    }
   
    return errs;
  }

  let handleChange = (event) => {
    setValues(values => ({ ...values, [event.target.name]: event.target.value}))
    setErrors(validate(event.target.name, event.target.value));
  }
  
  let sendEmail = (e: any) => {
    scrollTop();
    e.preventDefault();

    for(let property in values) {
      validate(property, values[property])
    }

    for(let property in errors) {
      if(errors[property]) return alert("Будь ласка, заповніть форму дійсними даними");
    }


    fetch('/api/email',{
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json'}
    }).then(res => res.json()).then(data => fireAlert(data))

  };

  const fireAlert = (res) => {
    alertRef.current.innerHTML = res.message;
    if (res.status === "OK") {alertRef.current.style.color = "green"; setValues({})}
    else alertRef.current.style.color = "red";
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if(res.status === "OK") setTimeout(() => handleClose(), 500);
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
                className={`${errors.name && styles.inputError}`}
                value={values.name || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.emailInput__smallInputsContainer}>
              <p>E-Mail</p>
              <input
                type="email"
                name="email"
                placeholder="name@gmail.com"
                className={`${errors.email && styles.inputError}`}
                value={values.email || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.emailInput__smallInputsContainer}>
              <p>Телефон</p>
              <input
                type="tel"
                name="phone"
                placeholder="+38 (000) 000-00-03"
                className={`${errors.phone && styles.inputError}`}
                value={values.phone || ''}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.emailInput__bigInputs}>
            <textarea
              placeholder="Повiдомления"
              name="message"
                className={`${errors.message && styles.inputError}`}
                value={values.message || ''}
                onChange={handleChange}
              required
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
              ref={submitRef}
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
