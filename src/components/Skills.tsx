import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import CardSkills from '~/ui/skills/CardSkills';
import skills from '~/data/skills';
import selectIcon from '~/lib/selectIcon';
import getNumberOfCards from '~/lib/getNumberOfCards';

export default function Skills(): JSX.Element {
	SwiperCore.use([Pagination]);

	return (
		<div
			className="w-screen h-auto min-h-screen space-y-16 p-6 md:p-12 lg:p-24"
			id="skills"
		>
			<h1>Skills</h1>
			<Swiper
				id="swiper-skills"
				slidesPerView={getNumberOfCards()}
				spaceBetween={15}
				pagination={{
					clickable: true,
				}}
				className="h-[27rem] sm:h-[28rem]"
			>
				{skills.map((item) => {
					return (
						<SwiperSlide key={item.title}>
							<CardSkills
								Icon={selectIcon(item.Icon)}
								title={item.title}
								skills={item.skills}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}
