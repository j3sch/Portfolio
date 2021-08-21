import education from '~/data/education';
import practica from '~/data/practica';
import DataTable from '~/ui/aboutMe/DataTable';

export default function AboutMe(): JSX.Element {
	return (
		<>
			<div
				className="w-screen h-auto min-h-screen p-6 md:p-12 lg:p-24"
				id="aboutMe"
			>
				<h1>Schulbildung</h1>
				<DataTable data={education} />
			</div>
			<div
				className="w-screen h-auto min-h-screen p-6 md:p-12 lg:p-24"
				id="aboutMe"
			>
				<h1>Praktikas</h1>
				<DataTable data={practica} />
			</div>
		</>
	);
}
