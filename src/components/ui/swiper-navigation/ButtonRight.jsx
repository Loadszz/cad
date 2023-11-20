
import React, { useState } from 'react'
// import { useSwiper } from 'swiper/react';
import { CircularProgressbar } from 'react-circular-progressbar';
const ButtonRight = ({ className, progress, slides, handleSlideNext }) => {
	// const swiper = useSwiper()

	return (
		<>
			<button
				className='relative icon-hero-arrow-right text-[18px] p-[10px] text-white bg-[#50453E] border border-[#8C8B8B] rounded-[360px]'
				onClick={handleSlideNext}>
				<CircularProgressbar strokeWidth={3} value={progress} className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-[38px] w-[38px]' />
			</button>
		</>
	)
}

export default ButtonRight