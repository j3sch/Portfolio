import '../../styles/globals.css';
import { AppProps } from 'next/app';
import { FC } from 'react';
import NavBar from '~/components/NavBar';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
