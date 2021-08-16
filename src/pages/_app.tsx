import '../../styles/globals.css';
import { AppProps } from 'next/app';
import { FC } from 'react';
import NavBar from '~/components/NavBar';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
