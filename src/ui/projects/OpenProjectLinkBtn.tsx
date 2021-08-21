import Link from 'next/link';

interface Props {
	name: string;
	url: string;
}

export default function Button(props: Props): JSX.Element {
	const { url, name } = props;
	return (
		<div className="p-2">
			<Link href={url}>
				<button
					type="button"
					className="bg-white ring-1 hover:ring-2 ring-gray-300 rounded-lg  w-full h-16 flex items-center text-center justify-center text-xl"
				>
					{name}
				</button>
			</Link>
		</div>
	);
}
