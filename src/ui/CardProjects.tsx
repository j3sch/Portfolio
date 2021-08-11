import { Fade } from 'react-awesome-reveal';
interface Props {
	image: string;
	title: string;
	description: string;
}
import Image from 'next/image';

export default function Card(props: Props) {
	const { image, title, description } = props;

	return (
		<Fade>
			<div className="bg-[#F2F3F5] w-80 h-96 rounded-lg p-0.5">
				<div className="relative w-full h-40">
					<Image
						src={image}
						alt="Bild vom Projekt"
						layout={'fill'}
						objectFit={'cover'}
                        priority
                        className="rounded-t-lg"
					/>
				</div>
				<div className="px-12  py-6 flex items-start flex-col  space-y-3">
					<p className="text-2xl">{title}</p>
					<p>{description}</p>
				</div>
			</div>
		</Fade>
	);
}
