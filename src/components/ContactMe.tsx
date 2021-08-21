import CopyToClipboard from '~/ui/contactMe/ContactFields';

export default function ContactMe(): JSX.Element {
	return (
		<div className="w-screen h-screen p-6 md:p-12 lg:p-24" id="contactMe">
			<h1>Kontaktiere mich</h1>
			<div className="flex flex-col items-center h-3/4 justify-evenly">
				<CopyToClipboard name="jens.schlegel@protonmail.com" />
			</div>
		</div>
	);
}
