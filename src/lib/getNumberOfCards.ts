import { useWindowWidth } from '@react-hook/window-size';

let width = 0;

export function getNumberOfCards() {
	width = useWindowWidth();

	if (width <= 800) {
		return 1;
	} else if (width <= 1350) {
		return 2;
	} else if (width <= 1636) {
		return 3;
	} else {
		return 4;
	}
}
