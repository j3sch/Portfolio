import Image from 'next/image';

export default function Footer() {
	return (
		<div className="w-full h-40 bg-gray-100 flex text-center text-lg justify-center items-center">
			<Image src="/Impressum.png" alt="impressum" width={306} height={104} />
		</div>
	);
}
