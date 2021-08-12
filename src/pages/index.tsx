import AboutMe from '~/components/AboutMe';
import ContactMe from '~/components/ContactMe';
import Skills from '~/components/Skills';
import Projects from '~/components/Projects';
import Welcome from '~/components/Welcome';

export default function Home(): JSX.Element {
	return (
		<main className="overflow-hidden">
			<Welcome />
			<AboutMe />
			<Skills />
			<Projects />
			<ContactMe />
		</main>
	);
}
