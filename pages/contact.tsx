import { NextPage } from "next";
import React, { useState } from "react";
import ContactFragment from "../components/BackgroundFragments/ContactFragment";
import ContactBox from "../components/ContactBox/ContactBox";
import EmailInput from "../components/EmailInput/EmailInput";
import LocationSVG from "../IconsSVG/LocationSVG";
import MessageSVG from "../IconsSVG/MessageSVG";
import PhoneSVG from "../IconsSVG/PhoneSVG";

const Contact: NextPage = () => {
  const [inputToggler, setInputToggler] = useState<string>("");

  return (
    <div className="contactpage">
      <div className="contactpage_box__container">
        <ContactBox
          header="Адреса"
          svg={<LocationSVG />}
          body={
            "Понеділок – П’ятниця \n 09:00 - 17:00 ул. \n Чигорина д.49, оф.3 \n 01042 Киев \n Украина"
          }
          btnText={"Location"}
          handler={() => console.log("clicked")}
        />
        <ContactBox
          header="Дзвонити"
          svg={<PhoneSVG />}
          body={"Розклад роботи: \n Понеділок – П’ятниця \n 09:00 - 17:00"}
          btnText="+38 (067) 368-46-03"
          handler={() => console.log("clicked")}
        />
        <ContactBox
          header="Відправити повідомлення"
          svg={<MessageSVG />}
          body="Напишіть нам, і наша команда відповість на всі ваші запитання та підтримає вас"
          btnText="написати Повідомлення"
          handler={() => {
            setInputToggler("inputfield__show");
            if (window.innerWidth > 1400) {
              window.scrollTo({
                top: 1000,
                behavior: "smooth",
              });
            }
          }}
        />
      </div>
      <div className={`contactpage_email_container ${inputToggler}`}>
        <EmailInput handleClose={() => setInputToggler("")} />
      </div>
      <ContactFragment className="contactpage_fragment" />
    </div>
  );
};

export default Contact;
