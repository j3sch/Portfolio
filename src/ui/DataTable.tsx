import { Fade } from 'react-awesome-reveal';
import clsx from 'clsx';

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
							<div className="flex items-center px-6 sm:w-[90%] lg:w-3/4 2xl:w-[58%] text-md md:text-lg ">
								<p className="text-black md:pl-16 w-12 sm:w-56 text-center">
									{item.year}
								</p>
								<div
									className={`${
										item.year.includes('.') ? 'pl-20' : 'pl-12'
									} md:pl-20 py-3 w-full`}
								>
									<p>{item.name}</p>
									<p>{item.address}</p>
									<p>{item.graduation}</p>
								</div>
							</div>
						) : (
							<div className="flex border-t-2 items-center sm:w-[90%] px-6 lg:w-3/4 2xl:w-[58%]  border-gray-500 text-md md:text-lg border-opacity-30">
								<p className="text-black md:pl-16 w-12 sm:w-56 text-center cls">
									{item.year}
								</p>
								<div
									className={`${
										item.year.includes('.') ? 'pl-20' : 'pl-12'
									} md:pl-20 py-3 w-full`}
								>
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
