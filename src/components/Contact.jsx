import { useLanguageSwitch } from '@/assets/useLanguageSwitch'
import Image from 'next/image'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () => {
	const { locale } = useLanguageSwitch()
	const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
	const secretKey = process.env.RECAPTCHA_SECRET_KEY;
	const [isVerified, setIsVerified] = useState(false)

	const handleRecaptcha = () => {
		setIsVerified(true)
	}

	const titleEng = <>
		Let's just do it <span className='text-gradient-blue'>together!</span>
	</>
	const titleUa = <>
		Давайте просто сделаем это <span className='text-gradient-blue'>вместе!</span>
	</>

	return (
		<section name='contact' className='md:flex'>
			{/* contact-column */}
			<div className=' flex-[0_0_100%]'>
				<div className='wrapper'>
					{/* contact-content */}
					<div className='md:w-[50%] py-[120px] mb:py-[50px] pr-[120px] tb:pr-[32px] mb:pr-0'>
						{/* contact-header */}
						<div className='mb-[48px] mb:mb-[32px]'>
							<h2 className='mb-[48px] mb:mb-[32px]'>{locale == 'en' ? titleEng : titleUa}</h2>
							<div className='raleway-medium text-[20px] tb:text-[16px] leading-[26px] tb:leading-[21px] text-[#52525A]'>Обращайтесь, если хотите сотрудничать с нами или просто пообщаться.</div>
						</div>
						{/* contact-form */}
						<form action="#" className='flex flex-col gap-y-[20px]'>
							<input className='h-[54px] outline-none border-b-[1px] border-[#E6E6E6] placeholder:text-[#B8BBBC] placeholder:text-[16px] text-[20px]' placeholder='Имя' type="text" required />
							<input className='h-[54px] outline-none border-b-[1px] border-[#E6E6E6] placeholder:text-[#B8BBBC] placeholder:text-[16px] text-[20px]' placeholder='Фамилия' type="text" required />
							<input className='h-[54px] outline-none border-b-[1px] border-[#E6E6E6] placeholder:text-[#B8BBBC] placeholder:text-[16px] text-[20px]' placeholder='Електронная Почта'
								type="email"
								required
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
							<textarea className='h-[54px] outline-none border-b-[1px] border-[#E6E6E6] placeholder:text-[#B8BBBC] placeholder:text-[16px] text-[20px] resize-none' placeholder='Ваше Сообщение' type="text" required />
							<ReCAPTCHA
								sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
								onChange={handleRecaptcha} />
							<button className={`raleway-semibold text-[16px] leading-[24px] text-[#141415] py-[15px] px-[30px] bg-[#F3F4F6] rounded-[360px] mt-[40px] transition-all duration-300 ${isVerified ? 'bg-[#37C0F6] text-white' : ''}`} type='submit' disabled={!isVerified}>Отправить</button>
						</form>
					</div>
				</div>
			</div>
			{/* contact-column */}
			<div className='flex-[0_0_50%] md:translate-x-[-100%] relative md:pb-[45.6%]'>
				<Image
					src={'/images/contact/contact-background.jpg'}
					alt='contact-background.jpg'
					width={969}
					height={876}
					className='h-[676px] md:absolute md:w-full md:h-full md:left-0 md:top-0 object-cover'
				/>
			</div>
		</section>
	)
}

export default Contact