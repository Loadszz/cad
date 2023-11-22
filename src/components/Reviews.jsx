import React, { useState, useEffect } from 'react'
import ReviewsSwapperButtons from './ui/ReviewsSwapperButtons'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'

const Reviews = ({ Swiper, SwiperSlide, Navigation, Pagination, Autoplay }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	const reviews = [
		{
			id: 1,
			stars: 4,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 2,
			stars: 2,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 3,
			stars: 3,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 4,
			stars: 5,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 5,
			stars: 3,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 6,
			stars: 4,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 7,
			stars: 2,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 8,
			stars: 3,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 9,
			stars: 5,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		},
		{
			id: 10,
			stars: 3,
			text: 'Все сделал быстро и качественно, внимательный к деталям. Исполняет запросы любой сложности, по всем вопросам отвечает очень быстро, всегда на связи.',
			name: 'Михаил Иванов',
			jobTitle: 'CEO/Microsoft'
		}
	]
	const breakpoints = {
		// когда ширина экрана меньше 640
		640: {
			slidesPerView: 2,
		},
		// когда ширина экрана меньше 768
		1024: {
			slidesPerView: 3,
		},
		// когда ширина экрана меньше 1440
		1440: {
			slidesPerView: 4,
		},
	};

	return (
		<section name='reviews' className='pt-[100px] pb-[120px] tb:py-[60px] mb:py-[50px] bg-[#E6E6E6]'>
			<div className='wrapper'>
				<div className='reviews-body'>
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						slidesPerView={1}
						autoplay={{ delay: 5000 }}
						breakpoints={breakpoints}
						pagination={{
							type: 'progressbar',
						}}>
						<div className='flex justify-between items-center mb-[60px] tb:mb-[40px] mb:mb-[32px]'>
							<h2 className='mr-[50px]'>Отзывы клиентов</h2>
							<ReviewsSwapperButtons />
						</div>
						<div>
							{reviews.map((review) => (
								<SwiperSlide key={review.id}>
									{/* cards */}
									<div className='flex flex-col justify-between w-[100%] h-[612px] p-[32px] border border-bdGray bg-white'>
										<div>
											<span className={`icon-star text-[24px] ${review.stars >= 1 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
											<span className={`icon-star text-[24px] ${review.stars >= 2 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
											<span className={`icon-star text-[24px] ${review.stars >= 3 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
											<span className={`icon-star text-[24px] ${review.stars >= 4 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
											<span className={`icon-star text-[24px] ${review.stars >= 5 ? 'text-gradient-blue' : 'text-[#E2E8F1]'}`}></span>
										</div>
										<div>
											<p className='rewiev-card-text pb-[20px] mb-[20px] border-b border-bdGray'>{review.text}</p>
											<p className='rewiev-card-title mb-[4px]'>{review.name}</p>
											<p className='rewiev-card-subtitle '>{review.jobTitle}</p>
										</div>
									</div>
								</SwiperSlide>
							))}
						</div>
					</Swiper>
				</div>
			</div>
		</section >
	)
}

export default Reviews