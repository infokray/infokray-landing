import { NextPage } from "next";
import React from "react";
import TeamBuildingFragment from "../components/BackgroundFragments/TeamBuildingFragment";
import ContactsBlock from "../components/ContactsBlock/ContactsBlock";
import CTAButton from "../components/CTAButton/CTAButton";
import SVGRightElement from "../components/Illustrations/SVGRightElement";
import TeamBuildingIllustration from "../components/Illustrations/TeamBuildingIllustration";

const TeamBuilding: NextPage = () => {
  return (
    <>
      <div className="page-content__container">
        <div className="page-content__teamBuilding">
          <h1 className="page-content__header">Корпоративний Teambuilding</h1>
          <p className="page-content__paragraph">
            Ми надаємо послуги з організації виставок, конференцій, форумів,
            семінарів, бізнес-тренінгів, воркшопів тощо. Також Ви можете
            замовити у нас організацію корпоративного тімбілдингу та організацію
            корпоративних подій і святкувань.» «Основною метою Тімбілдингу є
            створення єдиної команди. Важно переоцінити ефективну та злагоджену
            роботу згуртованого колективу, де панує здорова атмосфера ділового
            співробітництва та єднання в рамках компанії, де всі допомагають
            один одному і переслідують одну мету. І навпаки – як важко працювати
            в склочному колективі серед інтриг і пліток. Тімбілдинг має на меті
            подолати проблеми комунікаційного плану взаємодії та спільної
            роботи. Організація і проведення подібного заходу вирішує цілий
            комплекс проблем:
            <ul>
              <li>
                <span>1.</span>{" "}
                <p>
                  Підготовка робочого колективу до ефективної командної
                  взаємодії
                </p>
              </li>
              <li>
                <span>2.</span>{" "}
                <p>
                  Привчання співробітників долати поставлені завдання спільно
                </p>
              </li>
              <li>
                <span>3.</span>
                <p>
                  Робота з конфліктами в колективі, встановлення довірчих
                  відносин між співробітниками
                </p>
              </li>
              <li>
                <span>4.</span> <p>Підвищення мотивації співробітників</p>
              </li>
              <li>
                <span>5.</span> <p>Формування єдності та командного духу</p>
              </li>
              <li>
                <span>6.</span> <p>Пошук лідерів в колективі</p>
              </li>
              <li>
                <span>7.</span>
                <p>
                  Встановлення нових контактів між працівниками, адаптація
                  новеньких
                </p>
              </li>
              <li>
                <span>8.</span>
                <p>Розкриття потенціалу кожного з співробітників</p>
              </li>
              <li>
                <span>9.</span>
                <p>Стимулювання пошуку нестандартних рішень проблеми</p>
              </li>
              <li>
                <span>10.</span>
                <p>Психологічне розвантаження колективу</p>
              </li>
            </ul>
          </p>
          <div>
            <p className="page-content__paragraph">
              Таким чином, групу найманих працівників ви можете перетворити в
              команду, що об’єднана загальними ідеями, завданнями та
              корпоративними цінностями. Розважальний аспект Тімбілдингу
              вторинний, але і він грає важливу роль. Співробітники мають
              можливість перевести дух, оглянутися навколо і побачити, з якими
              чудовими людьми їх доводиться працювати!
            </p>
            <CTAButton />
            <div className="page-content__illustrations">
              <SVGRightElement Icon={TeamBuildingFragment} />
              <TeamBuildingIllustration
                className="page-content__illustration"
                style={{ margin: "0 auto" }}
              />
            </div>
            <ContactsBlock bottom={140} right={0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamBuilding;
