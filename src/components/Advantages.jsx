import Image from 'next/image'
import React from 'react'

const Advantages = () => {
	return (
		<section className='bg-[#F5F5F5] py-[150px] h-[2757px]'>
			<div className='wrapper'>
				<h2 className='h2 text-black max-w-[478px] mb-[40px]'>Преимущества работы с нами</h2>
				<p className='raleway-medium text-[18px] text-black leading-[23px] max-w-[668px]'>Максимизируем скорость и эффективность разработки с помощью DevOps-практик и автоматизации процессов. Переносим вашу инфраструктуру из on-prem в облачные решения, обеспечивая гибкость и масштабируемость.</p>
				<div className='relative'>
					<div className='absolute left-[50%] w-[20px] h-[2231px] bg-white rounded-[360px]'></div>
					<div>
						<div className='w-full flex flex-col items-end'>
							<div className='flex items-center w-[50%]'>
								<Image
									src={'/images/advantages/circle.svg'}
									alt='circle.svg'
									width={48}
									height={48}
									className='mr-[30px] z-10 relative left-[-13px]'
								// className='mr-[30px] z-10 absolute left-[50%] translate-x-[-50%]' 
								/>
								<div className='border border-dashed border-[#919191] w-[100%]'></div>
								<div className='unbounded-semibold text-[44px] ml-[30px]'>01</div>
							</div>
							<div className='flex items-center'>
								<div className='icon-cloud text-[64px] mr-[40px]'></div>
								<div>
									<h3 className='unbounded-semibold text-[32px] leading-[45px]'>Утверждаем<br /> Road Мар и бюджет</h3>
									<div className='raleway-regular text-[20px]'>На каждый проект мы выделяем персонального Team Lead</div>
								</div>
							</div>
						</div>
						{/* <div className='w-full flex items-center justify-end'>
							<div className='icon-cloud'></div>
							<div>
								<h3>Утверждаем Road Мар и бюджет</h3>
								<div>На каждый проект мы выделяем персонального Team Lead</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages