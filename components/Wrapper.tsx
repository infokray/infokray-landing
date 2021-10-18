import React, { FC } from 'react';

const Wrapper: FC = ({children}) => {
	return (
		<div className="wrapper">
			{children}
		</div>
	);
};

export default Wrapper;