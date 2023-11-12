'use client'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import React from 'react'
import Button from './ui/Button';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import SwiperButtons from './ui/SwiperButtons';


const Hero = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();

	return (
		<>
			<section className='bg-hero-pattern bg-center bg-cover bg-no-repeat py-[116px]'>
				<div className="wrapper">
					<div className='py-[116px]'>
						<div className='hero-sub-title mb-[15px]'>{t('hero.sub-title')}</div>
						<h1 className='max-w-[1134px] lp:max-w-[784px] mb-[60px] lp:mb-[32px] tb:mb-[24px]'>{t('hero.h1')}</h1>
						<div className='hero-text max-w-[665px] mb-[64px] lp:mb-[48px] tb:mb-[40px]'>{t('hero.text')}</div>
						<div className='flex justify-center items-center h-[54px] w-[250px] rounded-[360px] bg-accent'>
							<Button className={'raleway-bold text-[16px] text-white leading-[24px] mr-[10px]'} text={t('hero.buttonText')} />
							<Image
								src={'./images/heroButtonArrow.svg'}
								alt={'heroButtonArrow.svg'}
								width={20}
								height={20} />
						</div>
					</div>
				</div>
			</section>
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				pagination
				scrollbar={{ draggable: true }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
				{/* <SwiperSlide>
				<section className='bg-hero-pattern bg-center bg-cover bg-no-repeat py-[116px]'>
					<div className="wrapper">
						<div className='py-[116px]'>
							<div className='unbounded-regular text-[20px] text-white mb-[15px]'>{t('hero.subTitle')}</div>
							<h1 className='unbounded-medium text-[72px] text-white max-w-[1134px] leading-[93px] mb-[60px]'>{t('hero.h1')}</h1>
							<div className='unbounded-regular text-[24px] text-white max-w-[665px] leading-[33px] mb-[64px]'>{t('hero.text')}</div>
							<div className='flex justify-center items-center h-[54px] w-[250px] rounded-[360px] bg-accent'>
								<Button className={'raleway-bold text-[16px] text-white leading-[24px] mr-[10px]'} text={t('hero.buttonText')} />
								<Image
									src={'./images/heroButtonArrow.svg'}
									alt={'heroButtonArrow.svg'}
									width={20}
									height={20} />
							</div>
						</div>
					</div>
				</section>
			</SwiperSlide> */}
				{/* <SwiperSlide>
				<section className='bg-hero-pattern bg-center bg-cover bg-no-repeat py-[116px]'>
					<div className="wrapper">
						<div className='py-[116px]'>
							<div className='hero-sub-title mb-[15px]'>{t('hero.sub-title')}</div>
							<h1 className='max-w-[1134px] lp:max-w-[784px] mb-[60px] lp:mb-[32px] tb:mb-[24px]'>{t('hero.h1')}</h1>
							<div className='hero-text max-w-[665px] mb-[64px] lp:mb-[48px] tb:mb-[40px]'>{t('hero.text')}</div>
							<div className='flex justify-center items-center h-[54px] w-[250px] rounded-[360px] bg-accent'>
								<Button className={'raleway-bold text-[16px] text-white leading-[24px] mr-[10px]'} text={t('hero.buttonText')} />
								<Image
									src={'./images/heroButtonArrow.svg'}
									alt={'heroButtonArrow.svg'}
									width={20}
									height={20} />
							</div>
						</div>
					</div>
				</section>
			</SwiperSlide> */}
				<SwiperButtons />
			</Swiper >
		</>
	)
}

export default Hero