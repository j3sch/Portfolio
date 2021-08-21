import { useWindowWidth } from '@react-hook/window-size';

let width = 0;

export default function getNumberOfCards(): number {
	width = useWindowWidth();

	if (width <= 800) {
		return 1;
	}
	if (width <= 1350) {
		return 2;
	}
	if (width <= 1636) {
		return 3;
	}
	return 4;
}
