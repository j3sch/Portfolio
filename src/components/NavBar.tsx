import { useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'Hi', href: '#welcome' },
	{ name: 'Über mich', href: '#aboutMe' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projekte', href: '#projects' },
	{ name: 'Kontaktiere mich', href: '#contactMe' },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const handleClick = (e: any) => {
	e.preventDefault();
	const target = e.target.getAttribute('href');
	const location = document.querySelector(target).offsetTop;
	window.scrollTo({
		left: 0,
		top: location - 64,
	});
};

const scrollToTop = (e: any) => {
	e.preventDefault();

	window.scrollTo({
		left: 0,
		top: 0,
	});
};

export default function NavBar(): JSX.Element {
	const [current, setCurrent] = useState('Hi');
	const [shadowActive, setShadowActiv] = useState('');
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		if (window.pageYOffset > 0) {
			setShadowActiv('shadow');
		} else {
			setShadowActiv('');
		}

		if (window.pageYOffset > 4243) {
			setCurrent('Kontaktiere mich');
		} else if (window.pageYOffset >= 3544) {
			setCurrent('Projekte');
		} else if (window.pageYOffset >= 2400) {
			setCurrent('Skills');
		} else if (window.pageYOffset >= 700) {
			setCurrent('Über mich');
		} else if (window.pageYOffset > 0) {
			setCurrent('Hi');
		}
	}

	return (
		<Disclosure
			as="nav"
			className={`scroll sticky top-0 z-10 scroll ${shadowActive}`}
		>
			{({ open }) => (
				<>
					<div className="px-3 sm:px-6 lg:px-8 bg-white">
						<div className="relative flex items-center justify-between h-16">
							<div
								className="flex-shrink-0 text-black flex items-center text-2xl font-semibold"
								onClick={scrollToTop}
							>
								Jens Schlegel
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center sm:items-stretch max-w-4xl">
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4 text-center items-center">
										{navigation.map((item) => (
												<a
													onClick={(e) => {
														handleClick(e);
														setCurrent(item.name);
													}}
													key={item.name}
													href={item.href}
													className={classNames(
														item.name === current
															? 'text-black font-bold border-b-2 border-black p-1'
															: 'text-gray-500 hover:bg-gray-600 hover:text-white font-medium rounded-md px-3 py-2',
														'text-base ',
													)}
													aria-current={current ? 'page' : undefined}
												>
													{item.name}
												</a>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:flex hidden">
								<button className="bg-white p-0.5 rounded-full w-7 h-7 items-center justify-center flex hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									<span className="sr-only">Github Profil</span>
									<svg
										width="1024"
										height="1024"
										viewBox="0 0 1024 1024"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
											transform="scale(64)"
											fill="#1B1F23"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<a
									onClick={(e) => {
										handleClick(e);
										setCurrent(item.name);
									}}
									key={item.name}
									href={item.href}
									className={classNames(
										item.name === current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium',
									)}
									aria-current={current ? 'page' : undefined}
								>
									{item.name}
								</a>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
