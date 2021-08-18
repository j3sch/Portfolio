import Image from 'next/image';
import OpenProjectLinkBtn from './OpenProjectLinkBtn';
import { Fade } from 'react-awesome-reveal';
interface Props {
	image: string;
	title: string;
	description: string;
	github?: string;
	website?: string;
}

export default function CardProjects(props: Props) {
	const { image, title, description, github, website } = props;

	return (
		<Fade>
			<div className="group bg-[#F2F3F5] w-80 h-96 rounded-xl p-0.5 relative">
				<div className="relative w-full h-40 group-hover:hidden">
					<Image
						src={image}
						alt="Bild vom Projekt"
						layout={'fill'}
						objectFit={'cover'}
						priority
						className="rounded-t-xl"
					/>
				</div>
				<div className="group-hover:inline hidden">
					{website !== undefined && (
						<OpenProjectLinkBtn name="Webseite" url={website} />
					)}
					{github !== undefined && (
						<OpenProjectLinkBtn name="Github" url={github} />
					)}
				</div>
				<div className="px-6 py-4 flex items-start flex-col  space-y-3 group-hover:hidden">
					<p className="text-2xl">{title}</p>
					<p>{description}</p>
				</div>
			</div>
		</Fade>
	);
}
