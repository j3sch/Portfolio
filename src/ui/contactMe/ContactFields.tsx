import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import CopyClipboardBtn from '~/ui/contactMe/CopyClipboardBtn';
import SendMailBtn from '~/ui/contactMe/SendMailBtn';

interface Props {
	name: string;
}

export default function ContactFields(props: Props): JSX.Element {
	const { name } = props;
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		const clickedTimer = setTimeout(() => {
			setClicked(false);
		}, 2000);
		return () => {
			clearTimeout(clickedTimer);
		};
	});

	return (
		<div>
			{clicked === true ? (
				<div className="bg-gray-400 bg-opacity-30 text-4xl rounded-lg w-[19.5rem] sm:w-[29rem] md:w-[36rem] lg:w-[41.5rem] xl:w-[65rem] h-20 md:h-24 lg:h-28 flex items-center text-center justify-center">
					<p className="px-6">Text kopiert</p>
				</div>
			) : (
				<div className="bg-gray-100 group rounded-lg w-full xl:w-[67.5rem] xl:mr-8 h-20 md:h-24 lg:h-28 flex items-center text-center relative justify-center">
					<p className="text-center m-5 sm:m-12 md:m-14 lg:m-[5.5rem] self-center group-hover:hidden text-xl sm:text-[1.7rem] md:text-[2.14rem] lg:text-4xl">
						{name}
					</p>
					<div className="group-hover:flex w-full hidden">
						<Fade duration={500}>
							<SendMailBtn mail={name} />
							<CopyClipboardBtn copyText={name} setClicked={setClicked} />
						</Fade>
					</div>
				</div>
			)}
		</div>
	);
}
