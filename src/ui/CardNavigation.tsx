import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
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
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	function handleTouchStart(e) {
		setTouchStart(e.targetTouches[0].clientX);
	}

	function handleTouchMove(e) {
		setTouchEnd(e.targetTouches[0].clientX);
	}

	function handleTouchEnd() {
		if (touchStart - touchEnd > 150) {
			// do your stuff here for left swipe
			setCurrentCardIndex(currentCardIndex--);
			setCurrentCardIndex(currentCardIndex--);
		}

		if (touchStart - touchEnd < -150) {
			// do your stuff here for right swipe
			setCurrentCardIndex(currentCardIndex++);
			setCurrentCardIndex(currentCardIndex++);
		}
	}

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
			<div
				className="flex space-x-0 sm:space-x-9"
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
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
