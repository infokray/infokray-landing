import { NextPage } from "next";
import React from "react";
import SeminarFragmentLeft from "../components/BackgroundFragments/SeminarFragmentLeft";
import VebinarFragment from "../components/BackgroundFragments/VebinarFragment";
import ContactsBlock from "../components/ContactsBlock/ContactsBlock";
import CTAButton from "../components/CTAButton/CTAButton";
import SVGRightElement from "../components/Illustrations/SVGRightElement";
import VebinarIllustration from "../components/Illustrations/VebinarIllustration";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Vebinar: NextPage = () => {
  let isMobile = useDeviceDetect();

  return (
    <>
      <div className="page-content__container">
        <div className="page-content__text-content">
          <h1 className="page-content__header">Організація вебінарів</h1>
          <div className="page-content__paragraph vebinar__paragraph">
            <span>
              «Вебінар – це семінар, тренінг, будь який вид навчання чи ділового
              спілкування, що проводиться в мережі Інтернет в режимі реального
              часу. Під час проведення вебінару кожен учасник, як ведучій так і
              всі інші учасники, знаходяться біля своїх комп’ютерів.
            </span>
            <h2>Переваги вебінарів:</h2>
            <ul>
              <li>Вам не потрібно нікуди їхати, щоб потрапити на тренінг.</li>
              <li>
                Все, що Вам потрібно - це тільки компи’ютер з доступом до
                Інтернету.
              </li>
              <li>
                В певний час Ви лише заходите по спеціальному посиланню та
                слухаєте семінар в реальному часі.
              </li>
              <li>
                Ви можете задати будь-яке запитання лектору в реальному часі.
              </li>
              <li>
                Якщо Ви боїтеся, що можете щось пропустити, після закінчення
                вебінару Ви зможете отримати відеозапис вебінару.»
              </li>
            </ul>
          </div>
          <CTAButton />
        </div>
        <div
          className="page-content__illustrations"
          style={{ marginBottom: "100px" }}
        >
          <VebinarIllustration className="page-content__illustration" />
          <SVGRightElement Icon={VebinarFragment} />
        </div>
      </div>
      <ContactsBlock right={0} bottom={30} />
      {!isMobile && <SeminarFragmentLeft className="seminar__fragment-left" />}
    </>
  );
};

export default Vebinar;
