import { MailIcon } from '@heroicons/react/outline';

interface props {
	btnName: string;
	mail: string;
}

export default function SendMailBtn({ btnName, mail }: props) {
	return (
		<div className="p-2 pr-1">
			<button
				className="bg-white ring-1 hover:ring-2 ring-gray-300 rounded-lg w-[8.75rem] sm:w-[13.75rem] md:w-[17.25rem] lg:w-[20rem] xl:w-[33rem] h-16 md:h-24 flex items-center text-center justify-center text-lg sm:text-2xl"
				onClick={() => {
					window.open('mailto:' + mail);
				}}
			>
				<MailIcon className="text-gray-400 w-11 h-11 p-1" />
				{btnName}
			</button>
		</div>
	);
}
