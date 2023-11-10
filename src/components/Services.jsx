import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import Image from 'next/image';
import React from 'react'
import { BsCloudCheckFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaGear, FaGlobe } from 'react-icons/fa6'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'



const Services = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch();
	return (
		<section className='pt-[100px]'>
			<div className='wrapper'>
				<h2 className='h2 text-black text-center mb-[61px]'>{t('services.h2')}</h2>
				<div className='flex items-start flex-wrap relative'>
					<div className='absolute h-[1px] w-[113%] translate-x-[-50%] left-[50%] top-0 border lp:hidden'></div>
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] translate-all duration-300 px-[40px] pt-[40px] h-[355px] lp:border-t'>
						<div className='icon-cloud text-[32px] text-cyan-400 group-hover:text-white flex justify-center items-center w-[64px] h-[64px] rounded-[480px] bg-[#F4FBFF] group-hover:bg-[#6AD5FF] mb-[29px]'></div>
						<div className='unbounded-regular text-[22px] leading-[32px] text-black mb-[20px] group-hover:text-white'>
							{t('services.title-first')}
						</div>
						<p className='raleway-medium text-[18px] leading-[25px] text-black max-w-[450px] group-hover:text-white'>
							{t('services.text-first')}
						</p>
					</div>
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2]  translate-all duration-300 px-[40px] pt-[40px] h-[355px] border-l lp:border-t'>
						<div className='icon-gear text-[32px] text-cyan-400 group-hover:text-white flex justify-center items-center w-[64px] h-[64px] rounded-[480px] bg-[#F4FBFF] group-hover:bg-[#6AD5FF] mb-[29px]'></div>
						<div className='unbounded-regular text-[22px] leading-[32px] text-black mb-[20px] group-hover:text-white'>
							{t('services.title-second')}
						</div>
						<p className='raleway-medium text-[18px] leading-[25px] text-black max-w-[450px] group-hover:text-white'>
							{t('services.text-second')}
						</p>
					</div>
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2]  translate-all duration-300 px-[40px] pt-[40px] h-[355px] border-l lp:border-t lp:border-l-[0]'>
						<div className='icon-telephone text-[32px] text-cyan-400 group-hover:text-white flex justify-center items-center w-[64px] h-[64px] rounded-[480px] bg-[#F4FBFF] group-hover:bg-[#6AD5FF] mb-[29px]'></div>
						<div className='unbounded-regular text-[22px] leading-[32px] text-black mb-[20px] group-hover:text-white'>
							{t('services.title-third')}
						</div>
						<p className='raleway-medium text-[18px] leading-[25px] text-black max-w-[450px] group-hover:text-white'>
							{t('services.text-third')}
						</p>
					</div>
					<div className='absolute h-[1px] w-[113%]  translate-x-[-50%] left-[50%] top-[50%] border lp:hidden'></div>
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2]  translate-all duration-300 px-[40px] pt-[40px] h-[355px] lp:border-t lp:border-l'>
						<div className='icon-globe text-[32px] text-cyan-400 group-hover:text-white flex justify-center items-center w-[64px] h-[64px] rounded-[480px] bg-[#F4FBFF] group-hover:bg-[#6AD5FF] mb-[29px]'></div>
						<div className='unbounded-regular text-[22px] leading-[32px] text-black mb-[20px] group-hover:text-white'>
							{t('services.title-fourth')}
						</div>
						<p className='raleway-medium text-[18px] leading-[25px] text-black max-w-[450px] group-hover:text-white'>
							{t('services.text-fourth')}
						</p>
					</div>
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2]  translate-all duration-300 px-[40px] pt-[40px] h-[355px] border-l lp:border-l-[0] lp:border-t'>
						<div className='icon-puzzle text-[32px] text-cyan-400 group-hover:text-white flex justify-center items-center w-[64px] h-[64px] rounded-[480px] bg-[#F4FBFF] group-hover:bg-[#6AD5FF] mb-[29px]'></div>
						<div className='unbounded-regular text-[22px] leading-[32px] text-black mb-[20px] group-hover:text-white'>
							{t('services.title-fifth')}
						</div>
						<p className='raleway-medium text-[18px] leading-[25px] text-black max-w-[450px] group-hover:text-white'>
							{t('services.text-fifth')}
						</p>
					</div>
					<div className='flex-[0_1_33.333%] lp:flex-[0_1_50%] tb:flex-[0_1_100%] group hover:bg-gradient-to-r from-[#44CAFF] to-[#10D7F2] translate-all duration-300 px-[40px] pt-[40px] h-[355px] border-l lp:border-t'>
						<div className='icon-puzzle text-[32px] text-cyan-400 group-hover:text-white flex justify-center items-center w-[64px] h-[64px] rounded-[480px] bg-[#F4FBFF] group-hover:bg-[#6AD5FF] mb-[29px]'></div>
						<div className='unbounded-regular text-[22px] leading-[32px] text-black mb-[20px] group-hover:text-white'>
							{t('services.title-sixth')}
						</div>
						<p className='raleway-medium text-[18px] leading-[25px] text-black max-w-[450px] group-hover:text-white'>
							{t('services.text-sixth')}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services