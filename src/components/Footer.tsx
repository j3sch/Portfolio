import Image from 'next/image';

export default function Footer() {
	return (
		<div className="w-full h-28 bg-gray-100 flex text-center text-lg justify-center items-center">
			<Image src="/images/Impressum.png" alt="impressum" width={220} height={80} />
		</div>
	);
}
