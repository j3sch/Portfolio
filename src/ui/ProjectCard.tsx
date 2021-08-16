import Image from 'next/image';
import OpenProjectLinkBtn from './OpenProjectLinkBtn';

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
				{website !== undefined && (
					<OpenProjectLinkBtn name="Webseite" url={website} />
				)}
				{github !== undefined && (
					<OpenProjectLinkBtn name="Github" url={github} />
				)}
			</div>
			<div className="px-12 py-6 flex items-start flex-col  space-y-3 group-hover:hidden">
				<p className="text-2xl">{title}</p>
				<p>{description}</p>
			</div>
		</div>
	);
}
