import { NextPage } from "next";
import React from "react";
import SeminarFragment from "../components/BackgroundFragments/SeminarFragment";
import SeminarFragmentLeft from "../components/BackgroundFragments/SeminarFragmentLeft";
import ContactsBlock from "../components/ContactsBlock/ContactsBlock";
import CTAButton from "../components/CTAButton/CTAButton";
import SeminarIllustration from "../components/Illustrations/SeminarIllustration";
import SVGRightElement from "../components/Illustrations/SVGRightElement";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Seminar: NextPage = () => {
  let isMobile = useDeviceDetect();

  return (
    <>
      <div className="page-content__container">
        <div className="page-content__text-content">
          <h1 className="page-content__header">Організація семінарів</h1>
          <p className="page-content__paragraph">
            «Семінари або бізнес-тренінги – це можливість підвищити загальний
            професіоналізм робочої команди, розкрити таланти кожного, прищепити
            навички роботи в колективі і підвищити лояльність як співробітників,
            так і ділових партнерів. Програми тренінгів складаються з
            теоретичних і практичних уроків, які дозволяють домогтися бажаного
            результату в самі стислі терміни. Будь-яка сфера діяльності вимагає
            від фахівця певних навичок і вмінь. Адже ведення бізнесу – це
            справжнє мистецтво, яке не так просто опанувати, і спеціалізовані
            бізнес тренінги дозволяють внайкоротші терміни освоїти основи
            ведення бізнесу, набути навичок управління персоналом і вирішення
            найскладніших бізнес-задач.»
          </p>
          <CTAButton />
        </div>
        <div className="page-content__illustrations">
          <SeminarIllustration className="page-content__illustration seminar__illustration" />
          <SVGRightElement Icon={SeminarFragment} />
        </div>
      </div>
      <ContactsBlock bottom={50} />
      {!isMobile && <SeminarFragmentLeft className="seminar__fragment-left" />}
    </>
  );
};

export default Seminar;
