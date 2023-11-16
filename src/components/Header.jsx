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
	// console.log(document);
	return (
		<header className="absolute w-full py-[18px] z-10">
			<div className="wrapper">
				<div className='flex justify-between items-center'>
					<div className='flex flex-col items-center'>
						<a href='/' className='z-10'>
							<Image
								src={'./images/header/logo.svg'}
								alt='logo'
								width={163}
								height={59}
								className='mb-[6px] tb:w-[122px] mb:w-[98px]'
							/>
							<Image
								src={'./images/header/consulting-and-audit.svg'}
								alt='sub-logo'
								width={162}
								height={12}
								className='tb:w-[122px] mb:w-[98px]'
							/>
						</a>
					</div>
					<button
						type="button"
						className={`hidden backdrop-blur-[21px] bg-myBrown rounded-[32px] border border-[#B0B0B0] w-[44px] h-[44px] tb:block z-10 transition-all duration-700 relative ${isOpen ? 'border-none' : ''}`}
						onClick={handleBurger}>
						<span className={`absolute w-[20px] h-[3px] top-[12px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] transition-all duration-300 ${isOpen ? 'rotate-[45deg] top-[50%]' : ''}`}></span>
						<span className={`absolute top-1/2 transform -translate-y-1/2 w-[20px] h-[3px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] ${isOpen ? 'hidden' : ''}`}></span>
						<span className={`absolute bottom-[12px] w-[20px] h-[3px] bg-white rounded-[32px] translate-x-[-50%] left-[50%] transition-all duration-300 ${isOpen ? 'rotate-[-45deg] top-[50%]' : ''}`}></span>
					</button>
					<div className={`flex justify-between items-center w-full tb:fixed tb:justify-start tb:flex-col tb:items-start tb:top-0 tb:w-full tb:h-[100%] tb:bg-black tb:pt-[156px] mb:pt-[144px] tb:pl-[32px] mb:pl-[20px] tb:pb-[136px] mb:pb-[124px] tb:overflow-scroll transition-all duration-300 tb:bg-burger-bg tb:bg-center tb:bg-no-repeat tb:bg-cover ${isOpen ? 'tb:left-0' : 'tb:left-[-100%]'}`}>
						<Nav isOpen={isOpen} handleBurger={handleBurger} className='flex justify-center gap-[32px] tb:flex-col tb:justify-stretch tb:gap-[48px] mb:gap-[28px]' />
						<div>
							<LanguageSwitcher />
						</div>
					</div>
				</div>
			</div>
		</header >
	)
}

export default Header