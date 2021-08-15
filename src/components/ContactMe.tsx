import CopyToClipboard from '~/ui/ContactFields';

export default function ContactMe() {
	return (
		<div className="w-screen h-screen p-6 md:p-12 lg:p-24" id="contactMe">
			<h1>Kontaktiere mich</h1>
			<div className="flex flex-col items-center h-1/2 justify-evenly text-xl sm:text-2xl md:text-3xl lg:text-4xl">
				<CopyToClipboard name="jens.schlegel@protonmail.com" />
			</div>
		</div>
	);
}
