import React from 'react'
import { useSwiper } from 'swiper/react';

const ButtonLeft = ({ className }) => {
	const mySwiper = useSwiper()

	return (
		<button
			className={className}
			onClick={() => mySwiper.slidePrev()}></button>
	)
}

export default ButtonLeft