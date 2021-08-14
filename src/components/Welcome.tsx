import { RoughNotationGroup } from 'react-rough-notation';
import { TextHighlight } from '~/ui/TextHighlight';
import { useEffect, useState } from 'react';
import { shuffleArray } from '~/lib/shuffleArray';
import { LIGHT_COLORS } from '~/lib/constants';

// Shuffle our colors and store them in state so the order is persisted during
// React re-renders

export default function Welcome() {
	const [colors, setColors] = useState<string[]>([]);

	useEffect(() => {
		setColors(shuffleArray(LIGHT_COLORS));
	}, []);

	return (
		<div className="w-screen container overflow-hidden" id="welcome">
			<RoughNotationGroup show={true}>
				<h1 className="sm:w-[60%]">
					Hey, ich bin <br />
					<TextHighlight color={colors[0]}>Jens Schlegel</TextHighlight>
				</h1>
				<p className="sm:w-[60%] text-2xl md:text-4xl lg:text-5xl px-6 md:px-12 lg:px-24 font-mono leading-tight">
					Ich bin Softwareentwickler und studiere{' '}
					<TextHighlight color={colors[1]}>"Mobile Medien"</TextHighlight> an
					der{' '}
					<TextHighlight color={colors[2]}>Hochschule der Medien</TextHighlight>{' '}
					in <TextHighlight color={colors[3]}>Stuttgart.</TextHighlight>
				</p>
			</RoughNotationGroup>
		</div>
	);
}
