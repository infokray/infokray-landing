import { NextPage } from "next";
import React from "react";
import PartiesFragment from "../components/BackgroundFragments/PartiesFragment";
import SeminarFragmentLeft from "../components/BackgroundFragments/SeminarFragmentLeft";
import ContactsBlock from "../components/ContactsBlock/ContactsBlock";
import CTAButton from "../components/CTAButton/CTAButton";
import PhotoShootsIllustration from "../components/Illustrations/PhotoShootsIllustration";
import SVGRightElement from "../components/Illustrations/SVGRightElement";
import useDeviceDetect from "../hooks/useDeviceDetect";

const PhotoShoots: NextPage = () => {
  let isMobile = useDeviceDetect();

  return (
    <>
      <div className="page-content__container">
        <div className="page-content__text-content">
          <h1 className="page-content__header">Фотосессії</h1>
          <p className="page-content__paragraph">
            Завоювати довіру – складне завдання, незалежно від того чи продаєте
            ви товар, або створюєтеособистий бренд в соцмережах. Якісне
            корпоративне фото допоможе привернути увагу, створити правильне
            перше враження і налагодити особистий зв&#39;язок з людьми, які
            відвідують ваш сайт. Ми допоможемо створити корпоративне фото для
            вас і всього колективу, яке відображає фірмовийстиль організації.
            Більше ніяких банальних поз і натягнутих посмішок! Ми повністю
            продумаємостилістику фотосесії, що відповідає вашому бренду і
            запропонуємо вам кілька варіантів фотозйомки.
          </p>
          <CTAButton />
        </div>
        <div className="page-content__illustrations">
          <PhotoShootsIllustration className="page-content__illustration" />
          <SVGRightElement Icon={PartiesFragment} />
        </div>
      </div>
      <ContactsBlock bottom={60} />
      {!isMobile && <SeminarFragmentLeft className="seminar__fragment-left" />}
    </>
  );
};

export default PhotoShoots;
