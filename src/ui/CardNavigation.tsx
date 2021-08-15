import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Dispatch, SetStateAction } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

export default function CardNavigation({
	children,
	setCurrentCardIndex,
	currentCardIndex,
	maxIndexCards,
}: {
	children: any;
	setCurrentCardIndex: Dispatch<SetStateAction<number>>;
	currentCardIndex: number;
	maxIndexCards: number;
}) {
	return (
		<>
			<button
				className="hidden sm:flex"
				onClick={() => {
					if (currentCardIndex > 0) {
						setCurrentCardIndex(currentCardIndex--);
						setCurrentCardIndex(currentCardIndex--);
					}
				}}
			>
				<ChevronLeftIcon className="w-16 h-16" />
			</button>
			{children}
			<button
				className="hidden sm:flex"
				onClick={() => {
					if (currentCardIndex < maxIndexCards) {
						setCurrentCardIndex(currentCardIndex++);
						setCurrentCardIndex(currentCardIndex++);
					}
				}}
			>
				<ChevronRightIcon className="w-16 h-16" />
			</button>
		</>
	);
}
