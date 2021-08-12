import { DuplicateIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';

interface props {
	name: string;
}

export default function Button({ name }: props) {
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		const clickeds = setTimeout(() => {
			setClicked(false);
		}, 2000);
		return () => {
			clearTimeout(clickeds);
		};
	});

	return (
		<div>
			{clicked === true ? (
				<button className="bg-gray-400 bg-opacity-30 text-5xl rounded-lg w-[82rem] h-28 flex items-center text-center justify-center">
					<p className="px-6">Text kopiert</p>
				</button>
			) : (
				<button
					className="bg-gray-100 text-5xl rounded-lg w-[82rem] h-28 flex items-center text-center relative justify-center pr-16"
					onClick={() => {
						navigator.clipboard.writeText(name);
						setClicked(true);
					}}
				>
					<p className="px-6 text-center self-center"> {name}</p>
					<div className="w-20 bg-gray-400 bg-opacity-30 p-2 h-28 rounded-r-lg flex items-center justify-center absolute right-0">
						<DuplicateIcon className="text-gray-500" />
					</div>
				</button>
			)}
		</div>
	);
}
