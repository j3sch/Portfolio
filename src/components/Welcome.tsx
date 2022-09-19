import { RoughNotationGroup } from 'react-rough-notation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TextHighlight from '~/ui/welcome/TextHighlight';
import shuffleArray from '~/lib/shuffleArray';
import LIGHT_COLORS from '~/lib/LIGHT_COLORS';
import profilPicture from 'public/images/2022 with shape1.png';

export default function Welcome(): JSX.Element {
	const [colors, setColors] = useState<string[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setColors(shuffleArray(LIGHT_COLORS));
	}, []);

	return (
		<div className="flex container w-screen flex-col md:flex-row space-y-10 xl:space-y-0 lg:space-y-20">
			<div
				className="space-y-12 flex w-full flex-col text-center md:text-left overflow-hidden p-4 md:p-12 lg:p-24"
				id="welcome"
			>
				<RoughNotationGroup show>
					<h1 className="w-full leading-tight">
						Hey, ich bin <br />
						<TextHighlight color={colors[0]}>Jens Schlegel</TextHighlight>
					</h1>
					<p className="w-full md:w-[60%] lg:w-[55%] xl:w-[55%] 2xl:w-[50%] text-2xl font-sans md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
						Ich bin Webentwickler und studiere{' '}
						<TextHighlight color={colors[1]}>Mobile Medien</TextHighlight> an
						der{' '}
						<TextHighlight color={colors[2]}>
							Hochschule der Medien
						</TextHighlight>{' '}
						in <TextHighlight color={colors[3]}>Stuttgart.</TextHighlight>
					</p>
				</RoughNotationGroup>
			</div>
			<div className="flex w-72 sm:w-[21rem] lg:w-[25rem] xl:w-[32rem] 2xl:w-full relative md:absolute md:right-12 xl:right-20 2xl:right-32 justify-end self-center md:self-start xl:self-center">
				<Image
					src={profilPicture}
					alt="Profil picture"
					width={550}
					height={678}
					priority
					placeholder="blur"
					className={isLoaded ? 'unblur' : ''}
					onLoadingComplete={() => setIsLoaded(true)}
				/>
				<style jsx global>{`
					.unblur {
						animation: unblur 0.4s ease-in;
					}

					@keyframes unblur {
						from {
							filter: blur(30px);
						}
						to {
							filter: blur(0);
						}
					}
				`}</style>
			</div>
		</div>
	);
}
