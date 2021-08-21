import { ReactNode } from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

interface Props {
	Icon: ReactNode;
	title: string;
	skills: string[];
}

export default function CardSkills(props: Props): JSX.Element {
	const { Icon, title, skills } = props;

	return (
		<Fade>
			<div className="bg-[#F2F3F5] w-72 sm:w-80 h-96 rounded-xl flex items-start justify-center flex-col p-12  space-y-6">
				{Icon}
				<p className="text-2xl">{title}</p>
				<div className="flex">
					{skills.map((item) => {
						return (
							<div key={item} className="px-1">
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
