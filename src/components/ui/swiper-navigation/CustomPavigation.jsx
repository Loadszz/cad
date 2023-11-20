import React from 'react'

export const CustomPavigation = ({ className }) => {
	return (
		<div className={className}>
			<span className="swiper-pagination-current"></span> /
			<span className="swiper-pagination-total"></span>
		</div>
	)
}
