import Link from 'next/link';

interface props {
	name: string;
	url: string;
}

export default function Button({ name, url }: props) {
	return (
		<div className="p-2">
			<Link href={url}>
				<button className="bg-white ring-1 hover:ring-2 ring-gray-300 rounded-lg  w-[rem] h-24 flex items-center text-center justify-center text-xl">
					{name}
				</button>
			</Link>
		</div>
	);
}
