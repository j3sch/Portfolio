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

	function handleTouchStart(e: any) {
		disableScroll();
		setTouchStart(e.targetTouches[0].clientX);
	}

	function handleTouchMove(e: any) {
		disableScroll();
		setTouchEnd(e.targetTouches[0].clientX);
	}

	function disableScroll() {
		let x = window.scrollX;
		let y = window.scrollY;
		window.onscroll = function () {
			window.scrollTo(x, y);
		};
	}

	function enableScroll() {
		window.onscroll = function () {};
	}

	function handleTouchEnd() {
		if (touchStart - touchEnd > 75) {
			// do your stuff here for left swipe
			if (currentCardIndex < maxIndexCards) {
				setCurrentCardIndex(currentCardIndex++);
				setCurrentCardIndex(currentCardIndex++);
			}
		}

		if (touchStart - touchEnd < -75) {
			// do your stuff here for right swipe
			if (currentCardIndex > 0) {
				setCurrentCardIndex(currentCardIndex--);
				setCurrentCardIndex(currentCardIndex--);
			}
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
				onTouchStart={(e) => handleTouchStart(e)}
				onTouchMove={(e) => handleTouchMove(e)}
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
