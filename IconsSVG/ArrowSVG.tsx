import React, { FC } from "react";

interface ArrowSVGProps extends React.SVGProps<SVGSVGElement> {
	rotateAngle?: number;
}

const ArrowSVG: FC<ArrowSVGProps> = (props) => {
	const {rotateAngle, ...rest} = props

	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="arrow-svg"
			style={{
				transform: `rotate(${rotateAngle}deg)`,
				transition: "all 0.3s ease",
			}}
			{...rest}
		>
			<path
				d="M15.8333 7.5L9.99996 13.3333L4.16663 7.5"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowSVG;
