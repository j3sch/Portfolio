import React from 'react';
import { RoughNotation } from 'react-rough-notation';

interface Props {
	color: string;
	children: string;
}

export default function TextHighlight(props: Props): JSX.Element {
	const { color, children } = props;
	const animationDuration = Math.floor(30 * children.length);

	return (
		<RoughNotation
			type="highlight"
			multiline
			padding={[0, 2]}
			iterations={1}
			animationDuration={animationDuration}
			color={color}
		>
			{children}
		</RoughNotation>
	);
}
