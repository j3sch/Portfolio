import React from 'react';
import { RoughNotation } from 'react-rough-notation';

export const TextHighlight = ({
	color,
	children,
}: {
	color: string;
	children: string;
}) => {
	const animationDuration = Math.floor(30 * children.length);

	return (
		<RoughNotation
			type="highlight"
			multiline={true}
			padding={[0, 2]}
			iterations={1}
			animationDuration={animationDuration}
			color={color}
		>
			{children}
		</RoughNotation>
	);
};
