import '../../styles/globals.css';
import { AppProps } from 'next/app';
import { FC } from 'react';
import NavBar from '~/components/NavBar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
