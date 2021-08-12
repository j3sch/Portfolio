import CopyToClipboard from '~/ui/CopyToClipboard';

export default function ContactMe() {
	return (
		<div className="w-screen h-screen" id="contactMe">
			<h1>Kontaktiere mich</h1>
			<div className="flex flex-col items-center h-1/2 justify-evenly text-5xl ">
				<CopyToClipboard name="jens.schlegel@protonmail.com" />
				<CopyToClipboard name="https://www.linkedin.com/in/jens-s-15368116b" />
			</div>
		</div>
	);
}
