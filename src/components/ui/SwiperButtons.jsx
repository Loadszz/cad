'use client'
import React, { useState } from 'react'
import { useSwiper } from 'swiper/react';

const SwiperButtons = () => {
	const swiper = useSwiper();
	let [disabledArrowLeft, setDisabledArrowLeft] = useState('disabled')
	let [disabledArrowRigth, setDisabledArrowRight] = useState('')

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
	// console.log(swiper.pagination.el.childElementCount);
	console.log(swiper);
	return (
		<div className="absolute bottom-[10%] left-[50%] translate-x-[-50%] max-w-[1680px] w-full z-10">
			<button
				className={`font-raleway text-[50px] w-[100px] h-[100px] text-white ${disabledArrowLeft}`}
				onClick={() => { swiper.slidePrev(); addDisabled(swiper); }}>←</button>
			<button
				className={`font-raleway text-[50px] w-[100px] h-[100px] text-white  ${disabledArrowRigth}`}
				onClick={() => { swiper.slideNext(); addDisabled(swiper); }}>→</button>
			<div className='font-raleway text-[32px] text-white'>{swiper.activeIndex + 1}/2</div>
		</div>
	)
}

export default SwiperButtons