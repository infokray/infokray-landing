import React, { FC } from 'react';

interface BurgerSVGProps extends React.SVGProps<SVGSVGElement> {
	state: boolean;
}

const BurgerSVG: FC<BurgerSVGProps> = (props) => {
	const {state, ...rest} = props

	
	return (
		<svg
			
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...rest}
			
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d={state ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
			/>
		</svg>
	);
};

export default BurgerSVG;