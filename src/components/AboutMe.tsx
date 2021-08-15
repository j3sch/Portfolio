import education from '~/data/education';
import practica from '~/data/practica';
import DataTable from '~/ui/DataTable';

export default function AboutMe() {
	return (
		<>
			<div
				className="w-screen h-[200vh] sm:h-screen p-6 md:p-12 lg:p-24"
				id="aboutMe"
			>
				<h1>Schulbildung</h1>
				<DataTable data={education} />
			</div>
			<div
				className="w-screen h-[150vh] sm:h-screen p-6 md:p-12 lg:p-24"
				id="aboutMe"
			>
				<h1>Praktikas</h1>
				<DataTable data={practica} />
			</div>
		</>
	);
}
