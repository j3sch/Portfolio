import { ExternalLinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';

interface props {
	btnName: string;
	url: string;
}

export default function OpenContactLinkBtn({ btnName, url }: props) {
	return (
		<div className="p-2">
			<Link href={url}>
				<button className="bg-white ring-1 hover:ring-2 ring-gray-300 rounded-lg  w-[35rem] h-24 flex items-center text-center justify-center text-2xl">
					<ExternalLinkIcon className="text-gray-400 w-11 h-11 p-1" />
					{btnName}
				</button>
			</Link>
		</div>
	);
}
