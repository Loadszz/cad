import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import React from 'react'


const Advantages = () => {
	const { t, locale, locales, handleClick } = useLanguageSwitch()
	return (
		<section className='bg-[#F5F5F5] py-[150px] lp:py-[60px] p:py-[50px] h-[2757px]'>
			<div className='wrapper'>
				{/* header */}
				<div className='mb-[50px] lp:mb-[60px]'>
					<h2 className='w-[478px] lp:w-[415px] tb:w-full mb-[40px] lp:mb-[20px]'>{t('advantages.h2')}</h2>
					<p className='advantage-header-text w-[668px] lp:w-[527px] tb::w-[311px] tb:w-full'>
						{t('advantages.sub-title')}</p>
				</div>
				{/* main */}
				<div className='relative'>
					<div className='absolute top-[10px] left-[50%] tb:left-[31px] tb:translate-x-[-31px] translate-x-[-50%] w-[20px] tb:w-[10px] h-[2231px] bg-white rounded-[360px]'></div>
					<div>
						{/* item-right */}
						<div className='w-full flex flex-col items-end mb-[120px] tb:mb-[40px] group'>
							<div className='flex items-center w-[50%] tb:w-full mb-[32px] group'>
								{/* circle */}
								<div className="advantage-circle-icon relative left-[-25px] lp:left-[-20px] tb:left-[-11px] z-10 group-hover:bg-cyan-400 transition-all duration-300">
									<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
								</div>
								<div className='border border-dashed border-[#919191] w-[100%]'></div>
								<div className='advantage-circle-number ml-[30px]'>01</div>
							</div>
							<div className='flex justify-end items-start w-[50%] tb:w-full'>
								<div className='advantage-item-icon icon-advantages-globe flex items-center justify-center flex-[0_0_130px] lp:flex-[0_0_100px] tb:flex-[0_0_60px] mr-[40px] lp:mr-[24px] tb:mr-[12px] ml-[40px]'></div>
								<div className='flex-[1_1_auto]'>
									<h3 className='advantage-item-title max-w-[464px] mb-[24px] tb:mb-[12px]'>{t('advantages.item-title-first')}</h3>
									<div className='advantage-item-text'>{t('advantages.item-text-first')}</div>
								</div>
							</div>
						</div>
						{/* item-left */}
						<div className='w-full flex flex-col items-start'>
							<div className='flex items-center tb:flex-row-reverse w-[50%] tb:w-full mb-[32px]'>
								{/* circle */}
								<div className='advantage-circle-number mr-[30px] tb:ml-[30px] tb:mr-0'>02</div>
								<div className='border border-dashed border-[#919191] w-[100%]'></div>
								<div className="advantage-circle-icon relative right-[-25px] lp:right-[-20px] tb:left-[-11px] z-10">
									<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[350px] h-[20px] tb:h-[15px] w-[20px] tb:w-[15px] bg-white'></div>
								</div>
							</div>
							<div className='flex justify-end items-start w-[50%] tb:w-full'>
								<div className='advantage-item-icon icon-advantages-person flex items-center justify-center flex-[0_0_130px] lp:flex-[0_0_100px] tb:flex-[0_0_60px] mr-[40px] lp:mr-[24px] tb:mr-[12px] tb:ml-[40px]'></div>
								<div className='flex-[1_1_auto] mr-[40px] tb:mr-0'>
									<h3 className='advantage-item-title max-w-[464px] mb-[24px] tb:mb-[12px]'>{t('advantages.item-title-second')}</h3>
									<div className='advantage-item-text'>{t('advantages.item-text-second')}</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages