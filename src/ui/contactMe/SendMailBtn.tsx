import { MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';
interface Props {
	mail: string;
}

export default function SendMailBtn(props: Props): JSX.Element {
	const { mail } = props;
	return (
		<div className="p-2 pr-1">
			<Link href={`mailto:${mail}`}>
				<a className="bg-white ring-1 hover:ring-2 ring-gray-300 rounded-lg w-[9rem] sm:w-[13.75rem] md:w-[17.25rem] lg:w-[20rem] xl:w-[33rem] h-16 md:h-20 lg:h-24 flex items-center text-center justify-center text-lg sm:text-2xl">
					<MailIcon className="text-gray-400 w-11 h-11 p-1" />
					Email versenden
				</a>
			</Link>
		</div>
	);
}
