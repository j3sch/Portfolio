import { Dispatch, SetStateAction } from 'react';
import { DuplicateIcon } from '@heroicons/react/outline';

interface props {
	btnName: string;
	copyText: string;
	setClicked: Dispatch<SetStateAction<boolean>>;
}

export default function CopyClipboardBtn({ btnName, copyText, setClicked }: props) {
	return (
		<div className="p-2">
			<button
				className="bg-white ring-1 hover:ring-2 ring-gray-300 rounded-lg  w-[35rem] h-24 flex items-center text-center justify-center text-2xl"
				onClick={() => {
					navigator.clipboard.writeText(copyText);
					setClicked(true);
				}}
			>
				<DuplicateIcon className="text-gray-400 w-11 h-11 p-1" />
				{btnName}
			</button>
		</div>
	);
}
