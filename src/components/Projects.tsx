import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import projects from '~/data/projects';
import ProjectCard from '~/ui/projects/ProjectCard';
import getNumberOfCards from '~/lib/getNumberOfCards';

export default function Projects(): JSX.Element {
	SwiperCore.use([Pagination]);

	return (
		<div
			className="w-screen h-auto min-h-screen space-y-16 p-4 md:p-12 lg:p-24"
			id="projects"
		>
			<h1>Projekte</h1>
			<Swiper
				id="swiper-projects"
				slidesPerView={getNumberOfCards()}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				navigation
				modules={[Navigation]}
				className="h-[27rem] sm:h-[28rem]"
			>
				{projects.map((item) => (
					<SwiperSlide key={item.title}>
						<ProjectCard
							image={item.image}
							title={item.title}
							description={item.description}
							github={item.github}
							website={item.website}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
