import ProjectCard from '~/ui/ProjectCard';
import projects from '~/data/projects';
import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import CardNavigation from '~/ui/CardNavigation';
import SwipeableViews from 'react-swipeable-views';

export default function Projects() {
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
	const width = useWindowWidth();

	let maxIndexCards = projects.length - getNumberOfCards();

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
		if (width <= 900) {
			return 1;
		} else if (width <= 1350) {
			return 2;
		} else if (width <= 1636) {
			return 3;
		} else {
			return 4;
		}
	}

	const styles = {
		slide: {
			padding: 2,
			minHeight: 100,
		},
	};

	return (
		<div
			className="w-screen h-screen space-y-16 p-6 md:p-12 lg:p-24"
			id="projects"
		>
			<h1>Projekte</h1>

			<CardNavigation
				setCurrentCardIndex={setCurrentCardIndex}
				currentCardIndex={currentCardIndex}
				maxIndexCards={maxIndexCards}
			>
				<SwipeableViews>
					{projects.map((item) => {
						return (
								<ProjectCard
									image={item.image}
									title={item.title}
									description={item.description}
									github={item.github}
									website={item.website}
								/>
						);
					})}
				</SwipeableViews>
			</CardNavigation>
		</div>
	);
}
