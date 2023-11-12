import React, { useState } from 'react'
import Nav from './Nav'
import Image from 'next/image'
import LanguageSwitcher from './ui/LanguageSwitcher'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleBurger = () => {
		setIsOpen(!isOpen)
		if (!isOpen) {
			document.body.classList.add('lock');
		} else {
			document.body.classList.remove('lock');
		}
	}
	return (
		<header className={`absolute w-full py-[18px] z-10 transition-all duration-300 ${isOpen ? 'bg-cyan-300' : ''}`}>
			<div className="wrapper">
				<div className='flex justify-between items-center'>
					<div className='flex flex-col items-center'>
						<a href='/' className='z-10'>
							<Image
								src={'./images/logo.svg'}
								alt='logo'
								width={163}
								height={58}
								className='mb-[6px]'
							/>
							<Image
								src={'./images/consulting-and-audit.svg'}
								alt='sub-logo'
								width={162}
								height={12}
							/>
						</a>
					</div>
					<button
						type="button"
						className={`hidden backdrop-blur-[21px] bg-myBrown rounded-[32px] border border-[#B0B0B0] w-[44px] h-[44px] lp:block z-10 transition-all duration-700 ${isOpen ? 'border-none' : ''}`}
						onClick={handleBurger}>
						<span className={`absolute w-[20px] h-[3px] top-[12px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] transition-all duration-300 ${isOpen ? 'rotate-[45deg] top-[50%]' : ''}`}></span>
						<span className={`absolute top-1/2 transform -translate-y-1/2 w-[20px] h-[3px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] ${isOpen ? 'hidden' : ''}`}></span>
						<span className={`absolute bottom-[12px] w-[20px] h-[3px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] transition-all duration-300 ${isOpen ? 'rotate-[-45deg] top-[50%]' : ''}`}></span>
					</button>
					<div class={`flex justify-between items-center w-full lp:absolute lp:flex-col lp:items-start lp:top-0 lp:w-full lp:h-[100vh] lp:justify-stretch lp:bg-black lp:mt-[113px] lp:pt-[60px] lp:pl-[32px] lp:pb-[113px] lp:overflow-scroll tb:pl-[20px] transition-all duration-300 ${isOpen ? 'lp:left-0' : 'lp:left-[-100%]'}`}>
						<div className='invisible lp:visible lp:absolute lp:left-0 lp:top-0 lp:bg-lol lp:bg-center lp:bg-no-repeat lp:bg-cover lp:w-full lp:h-[768px]'></div>
						<Nav className='flex justify-center gap-[32px] lp:flex-col lp:justify-stretch lp:gap-[48px] tb:gap-[28px]' />
						<div className='mb-[40px]'>
							<LanguageSwitcher />
						</div>
					</div>
				</div>
			</div>
		</header >
	)
}

export default Header