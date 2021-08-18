import CardSkills from '~/ui/CardSkills';
import skills from '~/data/skills';
import selectIcon from '~/lib/selectIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import { getNumberOfCards } from '~/lib/getNumberOfCards';

export default function Skills() {
	SwiperCore.use([Pagination]);

	return (
		<div
			className="w-screen h-screen space-y-16 p-6 md:p-12 lg:p-24"
			id="skills"
		>
			<h1>Skills</h1>
			<Swiper
				id="swiper-skills"
				slidesPerView={getNumberOfCards()}
				spaceBetween={0}
				pagination={{
					clickable: true,
				}}
				className="h-[27rem] sm:h-[28rem]"
			>
				{skills.map((item) => {
					return (
						<SwiperSlide>
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
