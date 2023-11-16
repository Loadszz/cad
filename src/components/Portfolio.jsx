import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/assets/variants'

const Portfolio = () => {

	return (
		<section name='portfolio' className='pt-[100px] tb:pt-[60px] mb:pt-[50px]'>
			<div className='wrapper'>
				{/* heading */}
				<h2 className='text-center mb-[60px]'>Портфолио</h2>
				{/* cards */}
				<div className='flex flex-wrap mb:flex-col relative'>
					{/* line */}
					<div className='absolute left-[50%] translate-x-[-50%] h-full w-[1px] bg-[#E6E6E6] mb:hidden'></div>
					<div className='flex justify-between mb:flex-col gap-x-[180px] tb:gap-x-[64px] mb:gap-0 border-t'>
						{/* card */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>01</div>
									<div className='pf-card-heading-text'>Название компании/для кого делали</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Первый кейс</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-y-[20px] mb:gap-y-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Решения на базе ИИ</div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Консалтинг</div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Оптимизация</div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'>Максимизируем скорость и эффективность разработки с помощью DevOps-практик и автоматизации процессов. Переносим вашу инфраструктуру из on-prem в облачные решения, обеспечивая гибкость и масштабируемость.
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/portfolio-card-1.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 hover:scale-125'
								/>
							</div>
						</motion.div>
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>01</div>
									<div className='pf-card-heading-text'>Название компании/для кого делали</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Первый кейс</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-y-[20px] mb:gap-y-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Решения на базе ИИ</div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Консалтинг</div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Оптимизация</div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'>Максимизируем скорость и эффективность разработки с помощью DevOps-практик и автоматизации процессов. Переносим вашу инфраструктуру из on-prem в облачные решения, обеспечивая гибкость и масштабируемость.
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/portfolio-card-2.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 hover:scale-125'
								/>
							</div>
						</motion.div>
					</div>
					<div className='flex justify-between mb:flex-col gap-x-[180px] tb:gap-x-[64px] mb:gap-0 border-t'>
						{/* card */}
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>01</div>
									<div className='pf-card-heading-text'>Название компании/для кого делали</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Первый кейс</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-y-[20px] mb:gap-y-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Решения на базе ИИ</div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Консалтинг</div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Оптимизация</div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'>Максимизируем скорость и эффективность разработки с помощью DevOps-практик и автоматизации процессов. Переносим вашу инфраструктуру из on-prem в облачные решения, обеспечивая гибкость и масштабируемость.
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/portfolio-card-3.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 hover:scale-125'
								/>
							</div>
						</motion.div>
						<motion.div
							variants={fadeIn('right', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.3 }}
							className='flex-[0_1_44.7%] mb:flex-[0_0_auto] py-[90px] tb:py-[64px] mb:py-[32px]'>
							{/* card-heading */}
							<div className='mb-[28px]'>
								<div className='flex items-center gap-x-[20px] mb-[18px]'>
									<div className='pf-card-heading-number'>01</div>
									<div className='pf-card-heading-text'>Название компании/для кого делали</div>
								</div>
								{/* card-title */}
								<h3 className='mb-[18px]'>Первый кейс</h3>
								{/* card-tags */}
								<div className='flex flex-wrap gap-y-[20px] mb:gap-y-[10px]'>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Решения на базе ИИ</div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Консалтинг</div>
									<div className='pf-card-tags py-[7px] px-[20px] border border-[#E6E6E6] rounded-[360px]'>Оптимизация</div>
								</div>
							</div>
							{/* card-text */}
							<div className='pf-card-text mb-[28px]'>Максимизируем скорость и эффективность разработки с помощью DevOps-практик и автоматизации процессов. Переносим вашу инфраструктуру из on-prem в облачные решения, обеспечивая гибкость и масштабируемость.
							</div>
							{/* card-image */}
							<div className='overflow-hidden relative h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px]   border border-[#E6E6E6] rounded-[12px]'>
								<Image
									src={'/images/portfolio/portfolio-card-4.jpg'}
									alt='portfolio-card.jpg'
									width={750}
									height={358}
									className='absolute h-[358px] tb:h-[250px] mb:h-[300px] mm:h-[250px] object-cover transition-all duration-300 hover:scale-125'
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio