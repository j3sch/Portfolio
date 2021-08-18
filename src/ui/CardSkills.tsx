import { ReactNode } from 'react';
import { Fade } from 'react-awesome-reveal';
interface Props {
	Icon: ReactNode;
	title: string;
	skills: string[];
}
import Image from 'next/image';

export default function Card(props: Props) {
	const { Icon, title, skills } = props;

	return (
		<Fade>
			<div className="bg-[#F2F3F5] w-80 h-96 rounded-xl flex items-start justify-center flex-col p-12  space-y-6">
				{Icon}
				<p className="text-2xl">{title}</p>
				<div className="flex">
					{skills.map((item) => {
						return (
							<div className="px-1">
								<Image
									src={item}
									alt="Icon von Skill Kategorie"
									width={32}
									height={32}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</Fade>
	);
}
