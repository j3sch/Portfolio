import CopyToClipboard from '~/ui/ContactFields';

export default function ContactMe() {
	return (
		<div className="w-screen h-screen p-6 md:p-12 lg:p-24" id="contactMe">
			<h1>Kontaktiere mich</h1>
			<div className="flex flex-col items-center h-4/5 justify-evenly">
				<CopyToClipboard name="jens.schlegel@protonmail.com" />
			</div>
		</div>
	);
}
