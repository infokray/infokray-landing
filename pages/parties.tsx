import { NextPage } from "next";
import React from "react";
import PartiesFragment from "../components/BackgroundFragments/PartiesFragment";
import SeminarFragmentLeft from "../components/BackgroundFragments/SeminarFragmentLeft";
import ContactsBlock from "../components/ContactsBlock/ContactsBlock";
import CTAButton from "../components/CTAButton/CTAButton";
import PartiesIllustration from "../components/Illustrations/PartiesIllustration";
import SVGRightElement from "../components/Illustrations/SVGRightElement";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Parties: NextPage = () => {
  let isMobile = useDeviceDetect();

  return (
    <>
      <div className="page-content__container">
        <div className="page-content__text-content">
          <h1 className="page-content__header">Тематичні вечірки</h1>
          <p className="page-content__paragraph">
            Якщо ви хочете провести корпоративну подію в неординарний спосіб, то
            проведення тематичних корпоративних вечірок – варіант для вас. Він
            принесе максимум радості і залишиться в пам’яті масою приємних
            спогадів. Організувати вечірку в певній темі може здатися складною
            справою, але команда «Інфокрай» готова підказати найбільш прості
            варіанти. Вони обов’язково сподобаються всім учасникам!
          </p>
          <CTAButton />
        </div>
        <div className="page-content__illustrations">
          <PartiesIllustration className="page-content__illustration" />
          <SVGRightElement Icon={PartiesFragment} />
        </div>
      </div>
      <ContactsBlock bottom={60} />
      {!isMobile && <SeminarFragmentLeft className="seminar__fragment-left" />}
    </>
  );
};

export default Parties;
