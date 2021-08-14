import { Fade } from 'react-awesome-reveal';

export default function DataTable({
	data,
}: {
	data: {
		id: number;
		year: string;
		name: string;
		address: string;
		graduation?: string;
	}[];
}) {
	return (
		<Fade>
			<div className="flex flex-col items-center mt-14">
				{data.map(
					(item: {
						id: number;
						year: string;
						name: string;
						address: string;
						graduation?: string;
					}) => {
						return item.id === 1 ? (
							<div className="flex items-center px-6 md:w-1/2  text-lg ">
								<p className="text-black pl-6 md:pl-20">{item.year}</p>
								<div className="pl-6 md:pl-20 py-3">
									<p>{item.name}</p>
									<p>{item.address}</p>
									<p>{item.graduation}</p>
								</div>
							</div>
						) : (
							<div className="flex border-t-2 items-center px-6 md:w-1/2  border-gray-500 text-lg border-opacity-30">
								<p className="text-black pl-6 md:pl-20">{item.year}</p>
								<div className="pl-6 md:pl-20 py-3">
									<p>{item.name}</p>
									<p>{item.address}</p>
									<p>{item.graduation}</p>
								</div>
							</div>
						);
					},
				)}
			</div>
		</Fade>
	);
}
