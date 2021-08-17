import ProjectCard from '~/ui/ProjectCard';
import projects from '~/data/projects';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import getNumberOfCards from '~/lib/getNumberOfCards';
export default function Projects() {
	SwiperCore.use([Pagination]);

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

	let numberOfCards = getNumberOfCards();

	useEffect(() => {
		displayedCards();
	}, [currentCardIndex, numberOfCards]);

	function displayedCards() {
		let currentCardArray: any = [];
		for (
			let i = currentCardIndex;
			i < currentCardIndex + numberOfCards;
			i++
		) {
			if (projects.length > i) {
				currentCardArray.push(projects[i]);
			}
		}
		setCurrentCards(currentCardArray);
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
				className="h-[27rem] sm:h-[28rem]"
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
