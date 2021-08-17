import ProjectCard from '~/ui/ProjectCard';
import projects from '~/data/projects';
import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
let width = 0;

export default function Projects() {
	SwiperCore.use([Pagination]);
	width = useWindowWidth();

	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [currentCards, setCurrentCards] = useState([
		{
			image: '/monopoly.png',
			title: 'Monopoly',
			description:
				'Ein Online Browser spiel, indem 4 Spieler gegeneinander spielen können.',
			github: 'https://github.com/J3ns6/MonopolySE3',
			website: 'https://monopoly-fro.vercel.app/',
		},
	]);

	useEffect(() => {
		displayedCards();
	}, [currentCardIndex, width]);

	function displayedCards() {
		let currentCardArray: any = [];
		for (
			let i = currentCardIndex;
			i < currentCardIndex + getNumberOfCards();
			i++
		) {
			if (projects.length > i) {
				currentCardArray.push(projects[i]);
			}
		}
		setCurrentCards(currentCardArray);
	}

	function getNumberOfCards() {
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

	return (
		<div
			className="w-screen h-screen space-y-16 p-6 md:p-12 lg:p-24 pr-0 md:pr-0 lg:pr-0"
			id="projects"
		>
			<h1>Projekte</h1>
			<Swiper
				slidesPerView={getNumberOfCards()}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				className="h-[28rem]"
			>
				{projects.map((item) => {
					return (
						<SwiperSlide>
							<ProjectCard
								image={item.image}
								title={item.title}
								description={item.description}
								github={item.github}
								website={item.website}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
