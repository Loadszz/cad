'use client'
import React, { useState } from 'react'
import { useSwiper } from 'swiper/react';
import { CircularProgressbar } from 'react-circular-progressbar';

const SwiperButtons = ({ slides }) => {
	const swiper = useSwiper();
	let [disabledArrowLeft, setDisabledArrowLeft] = useState('disabled')
	let [disabledArrowRigth, setDisabledArrowRight] = useState('')
	const [slidesIndex, setSlidesIndex] = useState(1)

	function addDisabled(swiper) {
		if (swiper.activeIndex != 0 || swiper.isEnd == true) {
			setDisabledArrowLeft('')
			setDisabledArrowRight('disabled')
		}
		if (swiper.activeIndex == 0) {
			setDisabledArrowLeft('disabled')
		}
		if (swiper.isEnd == false) {
			setDisabledArrowRight('')
		}
	}
	const currentSlide = slides.length
	const percentage = Math.round((currentSlide / slides.length) * 100);

	// console.log(swiper.pagination.el.childElementCount);
	console.log(swiper);
	return (
		<div className='flex items-center justify-start gap-[24px] wrapper relative bottom-[130px] z-10'>
			<button
				className={`icon-hero-arrow-left text-[18px] p-[10px] text-white bg-[#50453E] border-[2px] border-[#8C8B8B] rounded-[360px] transition-all duration-300 ${disabledArrowLeft}`}
				onClick={() => { swiper.slidePrev(); addDisabled(swiper); }}></button>
			<div className='font-unbounded font-normal leading-[24px] text-white'>{slidesIndex}/{slides.length}</div>
			<button
				className={`relative icon-hero-arrow-right text-[18px] p-[10px] text-white bg-[#50453E] border border-[#8C8B8B] rounded-[360px] ${disabledArrowRigth}`}
				onClick={() => setSlidesIndex(swiper.activeIndex + 1)}>
				<CircularProgressbar strokeWidth={3} value={percentage} className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-[38px] w-[38px]' />
			</button>
		</div>
	)
}

export default SwiperButtons