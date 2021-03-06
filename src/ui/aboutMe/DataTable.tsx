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
							<div className={'pl-16 py-3 w-full'}>
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
							className="flex items-center border-t-2 w-full px-2 sm:px-4 lg:px-6 lg:w-3/4 2xl:w-[58%]  border-gray-500 text-md md:text-lg border-opacity-30"
						>
							<p className="text-black md:pl-12 xl:pl-24 w-12 sm:w-80 text-center">
								{item.year}
							</p>
							<div className={'pl-16  py-3 w-full'}>
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
