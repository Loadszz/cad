import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import React from 'react'
import { useLanguageSwitch } from '@/assets/useLanguageSwitch';


const OurResults = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})
	const { t } = useLanguageSwitch()
	console.log(inView);
	return (
		<section ref={ref} name='our-results' className='bg-our-client-bg bg-center bg-cover bg-no-repeat py-[120px] lp:py-[60px] tb:py-[50px]'>
			<div className='wrapper'>
				<h2 className='text-white mb-[60px] lp:mb-[40px]'>{t('our-results.h2')}</h2>
				<div className='flex justify-between flex-wrap tb:flex-col gap-y-[150px] lp:gap-y-[60px] tb:gap-y-[32px]'>
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] lp:mb-[10px] pt-[40px]'>
							{inView ?
								<CountUp start={1} end={1000000} duration={5} separator=" " /> :
								0}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-first')}</p>
					</div>
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] lp:mb-[10px] pt-[40px]'>
							{inView ?
								<CountUp start={0} end={500} duration={5} separator=" "
									prefix='$'
									suffix="" /> :
								0}
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-second')}</p>
					</div>
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] lp:mb-[10px] pt-[40px]'>
							{inView ?
								<CountUp start={1} end={300} duration={5} separator=" " /> :
								0}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-third')}</p>
					</div>
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] lp:mb-[10px] pt-[40px]'>
							{inView ?
								<CountUp start={1} end={100} duration={5} separator=" " /> :
								0}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-fourth')}</p>
					</div>
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] lp:mb-[10px] pt-[40px]'>
							{inView ?
								<CountUp start={1} end={100} duration={5} separator=" " /> :
								0}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-fifth')}</p>
					</div>
					<div className='flex-[0_0_27.4%] border-t border-gray-400'>
						<div className='our-client-card-number mb-[20px] lp:mb-[10px] pt-[40px]'>
							{inView ?
								<CountUp start={1} end={100} duration={5} separator=" " /> :
								0}+
						</div>
						<p className='our-client-card-text'>{t('our-results.item-text-sixth')}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurResults