import { RoughNotationGroup } from 'react-rough-notation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TextHighlight from '~/ui/TextHighlight';
import shuffleArray from '~/lib/shuffleArray';
import LIGHT_COLORS from '~/lib/LIGHT_COLORS';

// Shuffle our colors and store them in state so the order is persisted during
// React re-renders

export default function Welcome(): JSX.Element {
	const [colors, setColors] = useState<string[]>([]);

	useEffect(() => {
		setColors(shuffleArray(LIGHT_COLORS));
	}, []);

	return (
		<div className="flex container w-screen flex-col md:flex-row space-y-10 xl:space-y-0 lg:space-y-20">
			<div
				className="space-y-12 flex w-full flex-col text-center md:text-left overflow-hidden p-6 md:p-12 lg:p-24"
				id="welcome"
			>
				<RoughNotationGroup show>
					<h1 className="w-full leading-tight">
						Hey, ich bin <br />
						<TextHighlight color={colors[0]}>Jens Schlegel</TextHighlight>
					</h1>
					<p className="w-full md:w-[60%] lg:w-[55%] xl:w-[55%] 2xl:w-[50%] text-2xl font-sans md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
						Ich bin Softwareentwickler und studiere{' '}
						<TextHighlight color={colors[1]}>"Mobile Medien"</TextHighlight> an
						der{' '}
						<TextHighlight color={colors[2]}>
							Hochschule der Medien
						</TextHighlight>{' '}
						in <TextHighlight color={colors[3]}>Stuttgart.</TextHighlight>
					</p>
				</RoughNotationGroup>
			</div>
			<div className="flex w-72 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] 2xl:w-full relative md:absolute md:right-12 xl:right-20 2xl:right-32 justify-end self-center md:self-start xl:self-center">
				<Image
					src="/19.08.21 komp with shape.png"
					alt="Bild vom Projekt"
					width={550}
					height={678}
					priority
				/>
			</div>
		</div>
	);
}
