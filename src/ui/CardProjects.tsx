import { Fade } from 'react-awesome-reveal';
interface Props {
	image: string;
	title: string;
	description: string;
	github?: string;
	website: string;
}
import Image from 'next/image';
import OpenProjectLinkBtn from './OpenProjectLinkBtn';

export default function CardProjects(props: Props) {
	const { image, title, description, github, website } = props;

	return (
		<Fade>
			<div className="group bg-[#F2F3F5] w-80 h-96 rounded-lg p-0.5 relative">
				<div className="relative w-full h-40 group-hover:hidden">
					<Image
						src={image}
						alt="Bild vom Projekt"
						layout={'fill'}
						objectFit={'cover'}
						priority
						className="rounded-t-lg"
					/>
				</div>
				<div className="group-hover:inline hidden">
					<Fade duration={500}>
						<OpenProjectLinkBtn name="Webseite" url={website} />
						{github !== '' || github !== undefined &&
							<OpenProjectLinkBtn name="Github" url={github} />
						}
					</Fade>
				</div>
				<div className="px-12  py-6 flex items-start flex-col  space-y-3 group-hover:hidden">
					<p className="text-2xl">{title}</p>
					<p>{description}</p>
				</div>
			</div>
		</Fade>
	);
}
