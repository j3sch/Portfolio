import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Dispatch, SetStateAction } from 'react';

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
		<div className="items-center flex flex-shrink justify-center">
			<button
				className="hidden sm:flex"
				onClick={() => {
					if (currentCardIndex > 0) {
						setCurrentCardIndex(currentCardIndex--);
						setCurrentCardIndex(currentCardIndex--);
					}
				}}
			>
				<ChevronLeftIcon className="w-16 h-16 mr-3" />
			</button>
			<div className="flex space-x-0 sm:space-x-9">
				{children}
			</div>
			<button
				className="hidden sm:flex"
				onClick={() => {
					if (currentCardIndex < maxIndexCards) {
						setCurrentCardIndex(currentCardIndex++);
						setCurrentCardIndex(currentCardIndex++);
					}
				}}
			>
				<ChevronRightIcon className="w-16 h-16 ml-3" />
			</button>
		</div>
	);
}
