import { useWindowWidth } from '@react-hook/window-size';

let width = 0;

export default function getNumberOfCards(): number {
	width = useWindowWidth();

	if (width <= 1000) {
		return 1;
	}
	if (width <= 1550) {
		return 2;
	}
	return 3;
}
