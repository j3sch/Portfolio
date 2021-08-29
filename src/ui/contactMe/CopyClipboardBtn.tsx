import { Dispatch, SetStateAction, MouseEvent } from 'react';
import { DuplicateIcon } from '@heroicons/react/outline';

interface Props {
	copyText: string;
	setClicked: Dispatch<SetStateAction<boolean>>;
}

export default function CopyClipboardBtn(props: Props): JSX.Element {
	const { copyText, setClicked } = props;

	function handleClick(event: MouseEvent) {
		event.preventDefault();
		navigator.clipboard.writeText(copyText);
		setClicked(true);
	}

	return (
		<div className="p-2 pl-1">
			<button
				type="button"
				className="bg-white ring-1 hover:ring-2 ring-gray-300 rounded-lg w-[9rem] sm:w-[13.75rem] md:w-[17.25rem] lg:w-[20rem] xl:w-[33rem] h-16 md:h-20 lg:h-24 flex items-center text-center justify-center text-lg sm:text-2xl"
				onClick={handleClick}
			>
				<DuplicateIcon className="text-gray-400 w-11 h-11 p-1" />
				Text kopieren
			</button>
		</div>
	);
}
