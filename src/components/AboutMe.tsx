import education from '~/data/education';
import internships from '~/data/internships';
import DataTable from '~/ui/aboutMe/DataTable';

export default function AboutMe(): JSX.Element {
	return (
		<>
			<div
				className="w-screen h-auto min-h-screen p-4 md:p-12 lg:p-24"
				id="aboutMe"
			>
				<h1>Schulbildung</h1>
				<DataTable data={education} />
			</div>
			<div
				className="w-screen h-auto min-h-screen p-4 md:p-12 lg:p-24"
				id="aboutMe"
			>
				<h1>Praktika</h1>
				<DataTable data={internships} />
			</div>
		</>
	);
}
