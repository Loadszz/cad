import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import Image from 'next/image';
import React from 'react'
import { BsCloudCheckFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaGear, FaGlobe } from 'react-icons/fa6'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'



const Services = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	return (
		<section className='pt-[100px] lp:pt-[60px] tb:pt-[50px]'>
			<div className='wrapper p-0'>
				<h2 className='text-center mb-[61px] lp:mb-[40px] tb:mb-[32px]'>{t('services.h2')}</h2>
				<div className='flex items-start flex-wrap relative divide-y divide-[#E6E6E6]'>
					{/* line */}
					<div className='absolute h-full w-[1px] left-[33.3%] top-0 bg-[#E6E6E6] lp:left-[50%] lp:translate-x-[-50%] tb:hidden'></div>
					<div className='absolute h-full w-[1px] left-[66.7%] top-0 bg-[#E6E6E6] lp:hidden'></div>
					{/* line */}
					{/* card */}
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] translate-all duration-300 h-full px-[40px] pt-[40px] pb-[50px] lp:py-[40px] lp:pl-[32px] lp:pr-[40px] tb:p-[20px]'>
						<div className='services-card-icon icon-services-cloud-check flex justify-center items-center mb-[29px]'></div>
						<div className='services-card-title mb-[20px]'>
							{t('services.title-first')}
						</div>
						<p className='services-card-text max-w-[450px]'>
							{t('services.text-first')}
						</p>
					</div>
					{/* card */}
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] translate-all duration-300 h-full px-[40px] pt-[40px] pb-[50px] lp:py-[40px] lp:pl-[40px] lp:pr-[32px] tb:p-[20px]'>
						<div className='services-card-icon icon-services-gear flex justify-center items-center mb-[29px]'></div>
						<div className='services-card-title mb-[20px]'>
							{t('services.title-second')}
						</div>
						<p className='services-card-text max-w-[450px]'>
							{t('services.text-second')}
						</p>
					</div>
					{/* card */}
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] translate-all duration-300 h-full px-[40px] pt-[40px] pb-[50px] lp:py-[40px] lp:pl-[32px] lp:pr-[40px] tb:p-[20px]'>
						<div className='services-card-icon icon-services-telephone flex justify-center items-center mb-[29px]'></div>
						<div className='services-card-title mb-[20px]'>
							{t('services.title-third')}
						</div>
						<p className='services-card-text max-w-[450px]'>
							{t('services.text-third')}
						</p>
					</div>
					{/* card */}
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] translate-all duration-300 h-full px-[40px] pt-[40px] pb-[120px] lp:py-[40px] lp:pl-[40px] lp:pr-[32px] tb:p-[20px]'>
						<div className='services-card-icon icon-services-globe flex justify-center items-center mb-[29px]'></div>
						<div className='services-card-title mb-[20px]'>
							{t('services.title-fourth')}
						</div>
						<p className='services-card-text max-w-[450px]'>
							{t('services.text-fourth')}
						</p>
					</div>
					{/* card */}
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2]  translate-all duration-300 h-full px-[40px] pt-[40px] pb-[120px] lp:py-[40px] lp:pl-[32px] lp:pr-[40px] tb:p-[20px]'>
						<div className='services-card-icon icon-services-puzzle flex justify-center items-center mb-[29px]'></div>
						<div className='services-card-title mb-[20px]'>
							{t('services.title-fifth')}
						</div>
						<p className='services-card-text max-w-[450px]'>
							{t('services.text-fifth')}
						</p>
					</div>
					{/* card */}
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] translate-all duration-300 h-full px-[40px] pt-[40px] pb-[120px] lp:py-[40px] lp:pl-[40px] lp:pr-[32px] tb:p-[20px]'>
						<div className='services-card-icon icon-services-puzzle flex justify-center items-center mb-[29px]'></div>
						<div className='services-card-title mb-[20px]'>
							{t('services.title-sixth')}
						</div>
						<p className='services-card-text max-w-[450px]'>
							{t('services.text-sixth')}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services