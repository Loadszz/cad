import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import React, { useState } from 'react'
import Button from './ui/Button';
import Image from 'next/image';
import SwiperButtons from './ui/SwiperButtons';

const Hero = ({ Swiper, SwiperSlide, Navigation, Pagination, Autoplay }) => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();

	const slides = [
		{
			id: 1,
			image: 'bg-hero-bg',
			subTitle: `${t('hero.sub-title')}`,
			titleEng: <>Custom <span className='text-gradient-blue'>IT solutions</span> for your business</>,
			titleUa: <>Кастомні <span className='text-gradient-blue'>IT-рішення</span> для вашого бізнесу</>,
			text: `${t('hero.text')}`
		},
		{
			id: 2,
			image: 'bg-hero-bg',
			subTitle: `${t('hero.sub-title')}`,
			titleEng: <>Custom <span className='text-gradient-blue'>IT solutions</span> for your business</>,
			titleUa: <>Кастомні <span className='text-gradient-blue'>IT-рішення</span> для вашого бізнесу</>,
			text: `${t('hero.text')}`
		},
		{
			id: 3,
			image: 'bg-hero-bg',
			subTitle: `${t('hero.sub-title')}`,
			titleEng: <>Custom <span className='text-gradient-blue'>IT solutions</span> for your business</>,
			titleUa: <>Кастомні <span className='text-gradient-blue'>IT-рішення</span> для вашого бізнесу</>,
			text: `${t('hero.text')}`
		},
	]

	return (
		<>
			<Swiper
				className={'hero-swiper-pagination'}
				modules={[Navigation, Pagination, Autoplay]}
				slidesPerView={1}
				autoplay={{ delay: 5000 }}
				pagination={{
					type: 'fraction',
					el: '.hero-swiper-pagination',
				}}>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<section className='bg-hero-bg bg-center bg-cover bg-no-repeat pt-[251px] pb-[196px] tb:pt-[176px] mb:pt-[164px] relative'>
							<div className="wrapper">
								<div>
									<div className='hero-sub-title mb-[15px]'>{slide.subTitle}</div>
									<h1 className='max-w-[934px] tb:max-w-[784px] mb-[60px] tb:mb-[32px] mb:mb-[24px]'>{locale == 'en' ? slide.titleEng : slide.titleUa}</h1>
									<div className='hero-text max-w-[665px] mb-[64px] tb:mb-[48px] mb:mb-[40px]'>{slide.text}</div>
									<div className='flex justify-center items-center h-[54px] w-[250px] rounded-[360px] bg-accent'>
										<Button text={t('hero.button-text')} />
										<Image
											src={'./images/heroButtonArrow.svg'}
											alt={'heroButtonArrow.svg'}
											width={20}
											height={20} />
									</div>
								</div>
							</div>
						</section>
					</SwiperSlide>
				))}
				<SwiperButtons slides={slides}>
				</SwiperButtons>
			</Swiper >
		</>
	)
}

export default Hero