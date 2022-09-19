import { Fade } from 'react-awesome-reveal';

interface Props {
	data: {
		year: string;
		name: string;
		type: string;
		graduation?: string;
		activities?: string[];
	}[];
}

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	strokeWidth={1.5}
	stroke="currentColor"
	className="w-6 h-6"
>
	<path
		strokeLinecap="round"
		strokeLinejoin="round"
		d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
	/>
</svg>;
interface Data {
	year: string;
	name: string;
	type: string;
	graduation?: string;
	activities?: string[];
}

export default function DataTable(props: Props): JSX.Element {
	const { data } = props;

	return (
		<Fade>
			<div className="flex flex-col items-center mt-14">
				{data.map((item: Data, i) => {
					return i === 0 ? (
						<div
							key={item.name}
							className="flex items-center justify-end px-2 sm:px-4 lg:px-6 w-full lg:w-3/4 2xl:w-[58%] text-md md:text-lg "
						>
							<p className="text-black md:pl-12 xl:pl-24 w-12 sm:w-80 text-center">
								{item.year}
							</p>
							<div className="pl-16 py-3 w-full">
								<p className="font-semibold">{item.name}</p>
								<p>{item.type}</p>
								<p>{item.graduation}</p>
								<ul className="list-disc list-inside">
									{item.activities?.map((activity) => (
										<li key={activity}>{activity}</li>
									))}
								</ul>
							</div>
						</div>
					) : (
						<div
							key={item.name}
							className="flex items-center border-t-2 w-full px-2 sm:px-4 lg:px-6 lg:w-3/4 2xl:w-[58%]  border-gray-300 text-md md:text-lg border-opacity-30"
						>
							<p className="text-black md:pl-12 xl:pl-24 w-12 sm:w-80 text-center">
								{item.year}
							</p>
							<div className="pl-16  py-3 w-full">
								<p className="font-semibold">{item.name}</p>
								<p>{item.type}</p>
								<p>{item.graduation}</p>
								<ul className="list-disc list-inside">
									{item.activities?.map((activity) => (
										<li key={activity}>{activity}</li>
									))}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</Fade>
	);
}
