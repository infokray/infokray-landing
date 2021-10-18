import { NextPage } from "next";
import React from "react";
import ConferenceFragment from "../components/BackgroundFragments/ConferenceFragment";
import SeminarFragmentLeft from "../components/BackgroundFragments/SeminarFragmentLeft";
import ContactsBlock from "../components/ContactsBlock/ContactsBlock";
import CTAButton from "../components/CTAButton/CTAButton";
import ExhibitionIllustration from "../components/Illustrations/ExhibitionIllustration";
import SVGRightElement from "../components/Illustrations/SVGRightElement";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Exhibition: NextPage = () => {
  let isMobile = useDeviceDetect();

  return (
    <>
      <div className="page-content__container">
        <div className="page-content__text-content">
          <h1 className="page-content__header">Організація виставок</h1>
          <p className="page-content__paragraph vebinar__paragraph">
            <h2>Виставка</h2>
            це заздалегідь запланована демонстрація експонатів, які
            представляють собою єдинеціле. Її дієвість заснована на приверненні
            уваги і візуальному способі інформування та переконання. На
            виставках, крім демонстрації товарів, налагоджуються ділові
            контакти, укладаються угоди, організовуються продажі. Виставки
            дозволяють проводити аналіз ринків збуту і реакції споживачів,
            вивчати продукцію конкурентів. В рамках виставок організовуються
            також семінари, симпозіуми тазустрічі на різні актуальні теми.
            <h2>Виставка-продаж</h2>
            форма виставкової діяльності, яка поєднує рекламу з продажем товарів
            тавивченням виробничими фірмами поглядів покупців. Ми з радістю
            організуємо для вас торгівельну або інформаційно-ознайомчу виставку»
          </p>
          <CTAButton />
        </div>
        <div className="page-content__illustrations">
          <ExhibitionIllustration className="page-content__illustration" />
          <SVGRightElement Icon={ConferenceFragment} />
        </div>
      </div>
      <ContactsBlock />
      {!isMobile && <SeminarFragmentLeft className="seminar__fragment-left" />}
    </>
  );
};

export default Exhibition;
