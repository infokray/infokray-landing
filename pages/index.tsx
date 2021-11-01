import { NextPage } from "next";
import React from "react";
import HomeFragment from "../components/BackgroundFragments/HomeFragment";
import ContactsBlock from "../components/ContactsBlock/ContactsBlock";
import CTAButton from "../components/CTAButton/CTAButton";
import HomeIllustration from "../components/Illustrations/HomeIllustration";
import Logo from "../components/Logo/Logo";

const Home: NextPage = () => {
  return (
    <>
      <div className="page-content__container" style={{ marginTop: "60px" }}>
        <div className="page-content__text-content">
          <h1 className="page-content__header">
            <span className="header_welcome">ЛАСКОВО ПРОСИМО В</span>
            <Logo visible={true} />
          </h1>
          <p className="page-content__paragraphMain">
            Ми надаємо послуги з організації виставок, конференцій, форумів,
            семінарів, бізнес-тренінгів, воркшопів тощо. Також Ви можете
            замовити у нас організацію корпоративного тімбілдингу та організацію
            корпоративних подій і святкувань.»
          </p>
          <CTAButton />
        </div>

        <HomeIllustration className="page-content__illustration" />
      </div>
      <ContactsBlock bottom={60} left={0} />
      <HomeFragment className="page-content__fragment" />
    </>
  );
};

export default Home;
