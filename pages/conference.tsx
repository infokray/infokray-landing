import { NextPage } from "next";
import React from "react";
import ConferenceFragment from "../components/BackgroundFragments/ConferenceFragment";
import SeminarFragmentLeft from "../components/BackgroundFragments/SeminarFragmentLeft";
import ContactsBlock from "../components/ContactsBlock/ContactsBlock";
import CTAButton from "../components/CTAButton/CTAButton";
import ConferenceIllustration from "../components/Illustrations/ConferenceIllustration";
import SVGRightElement from "../components/Illustrations/SVGRightElement";
import useDeviceDetect from "../hooks/useDeviceDetect";

const Conference: NextPage = () => {

	let isMobile = useDeviceDetect();

	return (

		<>
			<div className="page-content__container">
				<div className="page-content__text-content">
					<h1 className="page-content__header">Організація конференцій</h1>
					<p className="page-content__paragraph">
						Ми надаємо послуги з організації виставок, конференцій, форумів,
						семінарів, бізнес-тренінгів, воркшопів тощо. Також Ви можете
						замовити у нас організацію корпоративного тімбілдингу та організацію
						корпоративних подій і святкувань.»«Одним з основних заходів для
						обміну інформацією з різних питань серед великої кількості людей є
						конференція. Конференція – це форма організації наукової діяльності,
						при якій відбувається обмін інформацією через представлення своїх
						досягнень і цілей. Саме такийзахід має перевагу в порівнянні з
						семінарами та тренінгами. Основними перевагами конференцій є те, що
						виступи всіх учасників на споріднені темидозволяють більш
						багатогранно розглянути різні питання, таким чином обговорюються
						різніпідходи до розв’язання однієї проблеми. Ми проводимо як очні
						так і віртуальні конференції.»
					</p>
					<CTAButton />
				</div>
				<div className="page-content__illustrations">
					<ConferenceIllustration className="page-content__illustration" />
					<SVGRightElement Icon={ConferenceFragment} />
				</div>
			</div>
			<ContactsBlock />
			{!isMobile && <SeminarFragmentLeft className="seminar__fragment-left" />}
		</>
	)
}

export default Conference