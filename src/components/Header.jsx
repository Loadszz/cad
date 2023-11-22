import React, { useState } from 'react'
import Nav from './Nav'
import Image from 'next/image'
import LanguageSwitcher from './ui/LanguageSwitcher'
import Burger from './ui/Burger'

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
		<header className="absolute w-full py-[18px] z-10">
			<div className="wrapper">
				{/* header-body */}
				<div className='flex justify-between items-center'>
					{/* header-logo */}
					<div className='flex flex-col items-center'>
						<a href='/' className='z-10'>
							<Image
								src={'/images/logo.svg'}
								alt='logo'
								width={163}
								height={59}
								className='mb-[6px] tb:w-[122px] mb:w-[98px]'
							/>
							<Image
								src={'/images/consulting-and-audit.svg'}
								alt='sub-logo'
								width={162}
								height={12}
								className='tb:w-[122px] mb:w-[98px]'
							/>
						</a>
					</div>
					{/* header-burger */}
					<Burger isOpen={isOpen} handleBurger={handleBurger} />
					{/* header-nav */}
					<div className={`flex justify-between items-center w-full tb:fixed tb:justify-start tb:flex-col tb:items-start tb:top-0 tb:w-full tb:h-[100%] tb:bg-black tb:pt-[156px] mb:pt-[144px] tb:pl-[32px] mb:pl-[20px] tb:pb-[136px] mb:pb-[124px] tb:overflow-scroll transition-all duration-300 tb:bg-burger tb:bg-center tb:bg-no-repeat tb:bg-cover ${isOpen ? 'tb:left-0' : 'tb:left-[-100%]'}`}>
						<Nav
							isOpen={isOpen}
							handleBurger={handleBurger}
							navStyle={'w-full tb:mb-[50px]'}
							ulStyle={'flex justify-center gap-[32px] tb:flex-col tb:justify-stretch tb:gap-[48px] mb:gap-[28px]'}
							liStyle={'header-nav-link'} />
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