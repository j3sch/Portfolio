import CardProjects from '~/ui/CardProjects';
import projects from '~/data/projects';

export default function Skills() {
	return (
		<div className="w-screen h-screen space-y-16" id="projects">
			<h1>Projekte</h1>
			<div className="flex items-center justify-center space-x-10">
				{projects.map((item) => {
					return (
						<CardProjects
							image={item.image}
							title={item.title}
							description={item.description}
						/>
					);
				})}
			</div>
		</div>
	);
}
