import education from '~/data/education';
import practica from '~/data/practica';
import DataTable from '~/ui/DataTable';

export default function AboutMe() {
	return (
		<>
			<div className="w-screen h-[120vh] sm:h-screen" id="aboutMe">
				<h1>Schulbildung</h1>
				<DataTable data={education} />
			</div>
			<div className="w-screen h-screen" id="aboutMe">
				<h1>Praktikas</h1>
				<DataTable data={practica} />
			</div>
		</>
	);
}
