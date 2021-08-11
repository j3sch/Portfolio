import CardSkills from '~/ui/CardSkills';
import skills from '~/data/skills';
import selectIcon from '~/lib/selectIcon';

export default function Skills() {
	return (
		<div className="w-screen h-screen space-y-16" id="skills">
			<h1>Skills</h1>
			<div className="flex items-center justify-center space-x-10">
				{skills.map((item) => {
					return (
						<CardSkills
							Icon={selectIcon(item.Icon)}
							title={item.title}
							skills={item.skills}
						/>
					);
				})}
			</div>
		</div>
	);
}
